import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShikiService } from '../../../services/shiki.service';
import { Highlighter } from 'shiki';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatHistoryCahce, ChatSingleCoversation } from '../../../interfaces';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { GptService } from '../../../services/gpt.service';
import { UiBlockService } from '../../../services/block-ui.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @ViewChild('userMenu') userMenu!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  // @ViewChild('textInput', { static: true }) textInputRef!: ElementRef; // 準備棄用====

  myAIChatData: ChatHistoryCahce[] = [];                                      // 資料- 全
  currentThreadData: ChatHistoryCahce | any = undefined;                      // 資料- 當前頁籤訊息
  isSidebarOpen: boolean = true;                                              // 左側欄
  newTitle = new FormControl("");                                             // 置頂橫幅- 標題名
  isOpenRenameTitle: boolean = false;                                         // 置頂橫幅- 換標題
  userPromptText: FormControl = new FormControl("");                          // 輸入框
  isComposing: boolean = false;                                               // 輸入框- 是否正在選字
  highlighter!: Highlighter;                                                  // 程式碼版- 高亮初始設定
  defaultCodeBoardLanguaged: string = "typescript";                           // 程式碼版- 預設語言

  constructor(
    private _shikiService: ShikiService,
    private _gptService: GptService,
    private _sanitizer: DomSanitizer,
    private _dialog: MatDialog,
    private _uiBlockService: UiBlockService,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async ngOnInit(): Promise<void> {
    // 程式碼版- 高亮語法的初始設定
    this.highlighter = await this._shikiService.initShiki(
      [this.defaultCodeBoardLanguaged, 'bash', 'html', 'css', 'javascript'],
      ["github-dark"]
    );
  }

  ngAfterViewInit(): void {
    // 延遲至瀏覽器環境初始完後執行
    if (isPlatformBrowser(this.platformId)) {
      this.currentThreadData = this.createCurrentThreadDafaultData();   // 資料- 初始化當前頁籤資料
      this.myAIChatData = this.getMyAIChatDataFromCahce();              // 資料- 取得快取資料
      this._changeDetectorRef.detectChanges();
    };
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');

    // 程式碼版- 複製事件監聽
    this.copyCodeBoardEventListener();
  }





  // ———————————————————————————— 左側欄 ————————————————————————————
  // 左側欄- 新增對話
  addNewChat(): void {
    console.log('addNewChat');

    // 清空當前視窗訊息
    this.currentThreadData = this.createCurrentThreadDafaultData();
  }



  // 左側欄- 切換左側欄
  toggleSidebar(): void {
    console.log('toggleSidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
  }



  // 左側欄- 檢視單筆頁籤
  checkHistoryThread(data: ChatHistoryCahce): void {
    this.currentThreadData = data;
  }



  // 左側欄- 刪除單筆頁籤
  deleteThread(data: ChatHistoryCahce): void {
    console.log('刪除單筆頁籤');

    // 當前要面是不是要刪的訊息
    if (data.threadId === this.currentThreadData.threadId) {
      // 清空當前視窗訊息
      this.currentThreadData = this.createCurrentThreadDafaultData();

      // 更新資料- 畫面、暫存
      this.updateDeleteData(data);

    } else {
      // 更新資料- 畫面、暫存
      this.updateDeleteData(data);
    };

    this._changeDetectorRef.detectChanges();
  }



  // 左側欄- 刪除單筆頁籤（更新資料）
  updateDeleteData(targetThreadData: ChatHistoryCahce): void {
    // 更新畫面資料
    const targetIdx = this.myAIChatData.findIndex(val => val.threadId === targetThreadData.threadId);
    this.myAIChatData.splice(targetIdx, 1);

    // 更新暫存資料
    localStorage.setItem("myAIChatData", JSON.stringify(this.myAIChatData));
  }





  // ———————————————————————————— 置頂橫幅 ————————————————————————————
  // 置頂橫幅- 顯示選單(右上)
  toggleUserMenu(): void {
    console.log('toggleUserMenu');
    this.userMenu.nativeElement.classList.toggle('show');
  }


  // 置頂橫幅- 關閉選單(右上)  // 待確認==== 這個方法沒用到ＸＤ
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



  // 置頂橫幅- 重新命名頁籤名稱
  renameTitle(): void {
    this.isOpenRenameTitle = true;
    this.newTitle.setValue(this.currentThreadData.title);
  }



  // 置頂橫幅- 重新命名頁籤名稱
  createNewTitle(newTitle: string): void {
    if (newTitle && (newTitle !== this.currentThreadData.title)) {
      // 更新當前頁籤
      this.currentThreadData.title = newTitle;

      // 更新畫面資料
      const targetIdx = this.myAIChatData.findIndex(val => val.threadId === this.currentThreadData.threadId)
      this.myAIChatData[targetIdx].title = newTitle;

      // 更新暫存資料
      localStorage.setItem("myAIChatData", JSON.stringify(this.myAIChatData));
      this.newTitle.setValue("");
    };

    this.isOpenRenameTitle = false;
  }





  // ———————————————————————————— 程式版 ————————————————————————————
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
    return this._sanitizer.bypassSecurityTrustHtml(highlightedCode);
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





  // ———————————————————————————— 輸入框 ————————————————————————————
  // 輸入框- 送出訊息
  sendMessage(): void {
    const message = this.userPromptText.value;
    let questionMsgContent: ChatSingleCoversation;

    if (message) {
      questionMsgContent = { role: 'user', content: message }

      // 更新當前視窗畫面、資料
      this.currentThreadData!.msgContents.push(questionMsgContent);
      this.userPromptText.setValue("");

      // call API拿訊息
      this.getOpenAiGptAnswer(this.currentThreadData.msgContents, questionMsgContent);
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





  // ———————————————————————————— 資料 ————————————————————————————
  // 資料- 取得快取資料
  getMyAIChatDataFromCahce(): ChatHistoryCahce[] | [] {
    let data: any = localStorage.getItem("myAIChatData");

    if (data) {
      data = JSON.parse(data);

    } else {
      data = [];
    };

    return data;
  }



  // 資料- 存到暫存
  saveToCahce(apiRes: any, queAndAnsMsgContent: ChatSingleCoversation[]) {
    console.log('saveToCahce 存到暫存');
    if (this.currentThreadData.threadId) {
      // ———————————————— 舊對話 ————————————————
      this.myAIChatData.map((conversation) => {
        // 找到該筆資料並更新對話紀錄
        if (conversation.threadId === this.currentThreadData.threadId) {
          // 更新對話紀錄與時間戳
          const updataSingleThreadData: ChatHistoryCahce = {
            ...conversation,
            msgContents: [...conversation.msgContents, ...queAndAnsMsgContent], // 加入新的訊息
            lastUpdateTime: this.generateTitleFromTimestamp(apiRes.created) // 更新時間戳為當前時間
          };

          return updataSingleThreadData;

        } else {
          return conversation;
        };
      });


    } else {
      // ———————————————— 新對話 ————————————————
      let threadData: ChatHistoryCahce = {
        threadId: this.generateNewUUID(),
        tabSortIdx: 0,// ====後續再思考怎麼調整
        title: this.generateTitleFromTimestamp(apiRes.created),
        msgContents: queAndAnsMsgContent,
        createTime: this.generateTitleFromTimestamp(apiRes.created),
        lastUpdateTime: this.generateTitleFromTimestamp(apiRes.created)
      };

      // 更新畫面資料
      this.myAIChatData.unshift(threadData);// 放在第一筆
      this.currentThreadData = threadData;
      this._changeDetectorRef.detectChanges();
    };

    // 更新暫存資料
    localStorage.setItem("myAIChatData", JSON.stringify(this.myAIChatData));
    console.log('myAIChatData', this.myAIChatData);
  }



  // 資料- 建立新頁籤資料結構
  createCurrentThreadDafaultData(): ChatHistoryCahce {
    let data: ChatHistoryCahce = {
      threadId: "",
      tabSortIdx: 0,
      title: "",
      msgContents: [],
      createTime: "",
      lastUpdateTime: ""
    };

    return data;
  }



  // 資料- 產生新對話流水號
  generateNewUUID(): string {
    return crypto.randomUUID();
  }



  // 資料- 取得時間戳記
  generateTitleFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // UNIX 時間戳是以秒為單位，所以需要乘以 1000
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份從 0 開始，所以需要 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }





  // ———————————————————————————— API ————————————————————————————
  // API- 取得OpenAI回覆
  getOpenAiGptAnswer(
    passMsgContent: ChatSingleCoversation[],
    questionMsgContent: ChatSingleCoversation
  ): void {
    const para = [...passMsgContent, questionMsgContent];

    this._uiBlockService.addBlockUI();
    this._gptService.getModelAnsFromOpenAI(para).subscribe(async res => {
      console.log('getGptAnswer', res);

      const managedChatApiRes = await this.processChatApiRes(res.choices[res.choices.length - 1].message.content);
      const answerMsgContent: ChatSingleCoversation = {
        role: 'system',
        content: managedChatApiRes
      };
      console.log('highlightedResponse', managedChatApiRes);

      // 更新當前視窗畫面、資料
      this.currentThreadData!.msgContents.push(answerMsgContent);

      // 存到暫存
      this.saveToCahce(res, [questionMsgContent, answerMsgContent]);

      this._changeDetectorRef.detectChanges();
      this._uiBlockService.removeBlockUI();
    });
  }



  fakeApiRes = {
    title: "假資料標題",
    exampleApiResText: "在Angular中，依賴注入（Dependency Injection，簡稱DI）是一個核心概念，用於提供或\"注入\"組件和服務之間的依賴關係。Angular的依賴注入系統會為你提供所需的依賴項，例如服務或其他類別。\n\n要使用Angular的依賴注入系統，你通常會經歷以下步驟：\n\n1. **定義一個服務（Service）**：首先，建立一個服務類別，該類別包含你想要在應用程序中的其他部分使用的方法和屬性。\n\n```typescript\nimport { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root' // 這個服務是全域單例\n})\nexport class MyService {\n  constructor() {}\n\n  doSomething() {\n    // 這裡是你的邏輯\n  }\n}\n```\n\n2. **注入服務到組件（Component）或其他服務中**：在組件或其他服務的建構函數中，通過參數列表來注入先前定義的服務。\n\n```typescript\nimport { Component } from '@angular/core';\nimport { MyService } from './my.service';\n\n@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\nexport class MyComponent {\n  // MyService 會被Angular DI系統自動注入到這個組件中\n  constructor(private myService: MyService) {}\n\n  useService() {\n    // 使用注入的服務\n    this.myService.doSomething();\n  }\n}\n```\n\n在上面的程式碼中，`MyService` 是透過 `MyComponent` 的建構函數注入的。Angular會自動創建`MyService`的實例（如果尚未創建），並將其作為參數傳遞給組件的建構函數。\n\n這樣，你就可以在組件中使用`myService`實例來調用`doSomething`方法或其他方法。\n\n請注意，為了讓服務可以被注入，你必須在Angular模組中註冊它。在上面`@Injectable()`裝飾器中使用`providedIn: 'root'`，表示該服務是全局單例，它會自動註冊到根注入器中，這意味著你不需要在任何NgModule的`providers`陣列中再次註冊它。如果你希望將服務限制在特定模組或組件中使用，則可以在相應的NgModule或@Component的`providers`陣列中註冊該服務。\n\n這就是Angular依賴注入系統的基本用法。透過這種方式，Angular幫助我們保持組件和服務之間的解耦，並提高了代碼的可測試性和可維護性。"
  };





}
