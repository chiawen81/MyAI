import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShikiService } from '../../../services/shiki.service';
import { Highlighter } from 'shiki';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule

  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @ViewChild('userMenu') userMenu!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  // @ViewChild('textInput', { static: true }) textInputRef!: ElementRef; // 準備棄用====

  chats: string[] = ['新對話'];
  messages: { text: string, sender: string }[] = [];
  isSidebarOpen: boolean = true;                                              // 左側欄
  userPromptText: FormControl = new FormControl("");                          // 輸入框
  isComposing: boolean = false;                                               // 輸入框- 是否正在選字
  highlighter!: Highlighter;                                                  // 程式碼版- 高亮初始設定
  defaultCodeBoardLanguaged: string = "typescript";                           // 程式碼版- 預設語言

  constructor(
    private _shikiService: ShikiService,
    private sanitizer: DomSanitizer,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async ngOnInit(): Promise<void> {
    // 程式碼版- 高亮語法的初始設定
    this.highlighter = await this._shikiService.initShiki([this.defaultCodeBoardLanguaged], ["github-dark"]);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

    // 程式碼版- 複製事件監聽
    this.copyCodeBoardEventListener();
  }



  // ———————————————————— 左側欄 ————————————————————
  // 新增對話
  addNewChat(): void {
    console.log('addNewChat');
    this.chats.push(`新對話 ${this.chats.length + 1}`);
  }

  // 切換左側欄
  toggleSidebar(): void {
    console.log('toggleSidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
  }





  // ———————————————————— 置頂橫幅 ————————————————————
  // 顯示選單(右上)
  toggleUserMenu(): void {
    console.log('toggleUserMenu');
    this.userMenu.nativeElement.classList.toggle('show');
  }


  // 關閉選單(右上)  // 待確認==== 這個方法沒用到ＸＤ
  closeDropdowns(event: any): void {
    console.log('closeDropdowns');
    if (!event.target.matches('.user-avatar')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }





  // ———————————————————— 主內容 ————————————————————
  // 送出訊息
  sendMessage(): void {
    const message = this.userPromptText.value;
    console.log('sendMessage', message);

    if (message) {
      console.log('has message', message);
      this.messages.push({ text: message, sender: 'user' });
      this.userPromptText.setValue("");

      // 模擬API回應
      setTimeout(async () => {
        const managedChatApiRes = await this.processChatApiRes(this.exampleApiResText);
        console.log('highlightedResponse', managedChatApiRes);
        this.messages.push({ text: managedChatApiRes, sender: 'bot' });
        this._changeDetectorRef.detectChanges();
      }, 500);
    };
  }



  // 輸入框- 按下Enter
  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLTextAreaElement;
      event.preventDefault(); // 阻止預設的 enter 行為

      // 排除正在進行選字
      if (!this.isComposing) {
        if (!event.shiftKey) {
          // 按下enter，但沒有按住 Shift 鍵
          this.sendMessage();                 // 送出訊息

        } else {
          // 處理 Shift+Enter，僅當輸入框高度小於 250px 時增加高度
          const currentHeight = inputElement.offsetHeight;
          const neededHeight = inputElement.scrollHeight;

          if (neededHeight > currentHeight && currentHeight < 250) {
            // 增加高度，但不超過 250px
            inputElement.style.height = `${Math.min(neededHeight, 250)}px`;
          };

          // 在輸入框內容中插入換行符
          const cursorPosition = inputElement.selectionStart;
          const textBeforeCursor = inputElement.value.substring(0, cursorPosition);
          const textAfterCursor = inputElement.value.substring(cursorPosition);
          inputElement.value = textBeforeCursor + "\n" + textAfterCursor;

          // 更新游標位置以放在插入的換行符後面
          inputElement.selectionStart = cursorPosition + 1;
          inputElement.selectionEnd = cursorPosition + 1;
        };
      };
    };
  }



  // 輸入框- 捕獲到事件（開始）
  onCompositionStart() {
    this.isComposing = true; // 開始選字時設置為 true
  }



  // 輸入框- 捕獲到事件（結束）
  onCompositionEnd() {
    this.isComposing = false; // 選字結束時設置為 false
  }



  // 程式版- 挑出程式碼段落處理
  async processChatApiRes(ApiRes: string): Promise<string> {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;       // 正則：全段內容、所用語言、程式碼段落
    const allCodeBlockMatch = ApiRes.matchAll(codeBlockRegex);// 程式碼段落- 所有匹配到的程式碼段落
    let afterFormattedRes = '';                               // 處理後的最終內容
    let textIndex = 0;                                        // 普通文字的匹配起始位置

    // 遍歷處理每個找到的程式碼段落
    for (const match of allCodeBlockMatch) {
      let [fullMatch, language, code] = match;                // 正則匹配到的全段內容、所用語言、程式碼段落
      language = language || this.defaultCodeBoardLanguaged;  // 無匹配到語言則用預設程式語言(TS)

      // 加入普通文字
      afterFormattedRes += ApiRes.slice(textIndex, match.index);
      // NOTE:範圍是上次匹配到的程式碼結束位置，到這次匹配到的程式碼開始位置

      // 加入高亮後的程式碼
      afterFormattedRes += await this.getHighlightCode(code, language);

      // 更新匹配位置
      textIndex = match.index! + fullMatch.length;
      // NOTE: lastIndex 為當前匹配結束的位置，以備下次切割普通文字
    };

    // 加入最後的普通文字
    afterFormattedRes += ApiRes.slice(textIndex);
    // NOTE:匹配到最後的程式碼段落，其後的普通文字

    return afterFormattedRes;
  }



  // 程式版- 取得進行高亮處理後的程式碼段落
  async getHighlightCode(code: string, language: string): Promise<string> {
    let managedCode: string = "";

    // 使用 Shiki 進行語法高亮
    const highlightedCode = await this._shikiService.highlightCode(this.highlighter, code, language, "github-dark");

    const encodedCode = encodeURIComponent(code); // 編輯程式碼- 編成URL安全的格式

    // 程式碼版的標頭(含所有語言、複製功能）
    managedCode += `<div class="code-block-header">
                        <div class="code-language-label">${language}</div>
                        <span class="copy-text" data-code="${encodedCode}">
                          <i class="fas fa-copy"></i> 複製程式碼
                        </span>
                    </div>`;
    managedCode += '<pre>\n';                     // 空白行留空
    managedCode += highlightedCode;               // 高亮語法主體
    managedCode += '</pre>';

    return managedCode;
  }



  // 程式版- 注入處力過的Html (繞過Angular保護機制)
  getSanitizedHtml(highlightedCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(highlightedCode);
  }



  // 程式版- 複製
  copyCodeBoardEventListener(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log(1, this.platformId, isPlatformBrowser(this.platformId))
      const chatMessagesContainer = document.querySelector('.chat-messages');

      if (chatMessagesContainer) {
        console.log('chatMessagesContainer', chatMessagesContainer);
        // 移除舊的事件監聽器
        chatMessagesContainer?.removeEventListener('click', this.implementCopyCode);

        // 添加新的事件監聽器
        chatMessagesContainer?.addEventListener('click', this.implementCopyCode);
      };
    };
  }



  // 程式版- 複製(實作)
  implementCopyCode = (event: Event) => {
    const target = event.target as HTMLElement;
    console.log('handleCopyClick target ', target);

    if (target && target.closest('.copy-text')) {
      console.log(33)
      const encodedCode = target.getAttribute('data-code');
      if (encodedCode) {
        console.log(44);
        const code = decodeURIComponent(encodedCode);
        this.copySuccess(code);
      };
    }
  };



  // 程式版- 複製成功
  copySuccess(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  }



  exampleApiResText = "在Angular中，依賴注入（Dependency Injection，簡稱DI）是一個核心概念，用於提供或\"注入\"組件和服務之間的依賴關係。Angular的依賴注入系統會為你提供所需的依賴項，例如服務或其他類別。\n\n要使用Angular的依賴注入系統，你通常會經歷以下步驟：\n\n1. **定義一個服務（Service）**：首先，建立一個服務類別，該類別包含你想要在應用程序中的其他部分使用的方法和屬性。\n\n```typescript\nimport { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root' // 這個服務是全域單例\n})\nexport class MyService {\n  constructor() {}\n\n  doSomething() {\n    // 這裡是你的邏輯\n  }\n}\n```\n\n2. **注入服務到組件（Component）或其他服務中**：在組件或其他服務的建構函數中，通過參數列表來注入先前定義的服務。\n\n```typescript\nimport { Component } from '@angular/core';\nimport { MyService } from './my.service';\n\n@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\nexport class MyComponent {\n  // MyService 會被Angular DI系統自動注入到這個組件中\n  constructor(private myService: MyService) {}\n\n  useService() {\n    // 使用注入的服務\n    this.myService.doSomething();\n  }\n}\n```\n\n在上面的程式碼中，`MyService` 是透過 `MyComponent` 的建構函數注入的。Angular會自動創建`MyService`的實例（如果尚未創建），並將其作為參數傳遞給組件的建構函數。\n\n這樣，你就可以在組件中使用`myService`實例來調用`doSomething`方法或其他方法。\n\n請注意，為了讓服務可以被注入，你必須在Angular模組中註冊它。在上面`@Injectable()`裝飾器中使用`providedIn: 'root'`，表示該服務是全局單例，它會自動註冊到根注入器中，這意味著你不需要在任何NgModule的`providers`陣列中再次註冊它。如果你希望將服務限制在特定模組或組件中使用，則可以在相應的NgModule或@Component的`providers`陣列中註冊該服務。\n\n這就是Angular依賴注入系統的基本用法。透過這種方式，Angular幫助我們保持組件和服務之間的解耦，並提高了代碼的可測試性和可維護性。";





}




// ngAfterViewInit(): void {
//   console.log('ngAfterViewChecked');
//   if(isPlatformBrowser(this.platformId)) {
//   console.log(1, this.platformId, isPlatformBrowser(this.platformId))
//   const chatMessagesContainer = document.querySelector('.chat-messages');
//   console.log('chatMessagesContainer', chatMessagesContainer);
//   // 移除舊的事件監聽器
//   chatMessagesContainer?.removeEventListener('click', this.handleCopyClick);

//   // 添加新的事件監聽器
//   chatMessagesContainer?.addEventListener('click', this.handleCopyClick);

//   if (chatMessagesContainer) {
//     console.log(2, chatMessagesContainer)
//     chatMessagesContainer.addEventListener('click', (event: Event) => {
//       const target = event.target as HTMLElement;
//       console.log('target', target);
//       // 檢查點擊的是否是帶有 `copy-text` class 的按鈕
//       if (target && target.closest('.copy-text')) {
//         console.log(3, target.closest('.copy-text'));
//         const encodedCode = target.getAttribute('data-code'); // 取得 URL 編碼的程式碼
//         if (encodedCode) {
//           console.log(4);
//           const code = decodeURIComponent(encodedCode); // 將 URL 編碼解碼回原本的程式碼
//           this.copyToClipboard(code);
//         }
//       }
//     });
//   }
// }
//   }
