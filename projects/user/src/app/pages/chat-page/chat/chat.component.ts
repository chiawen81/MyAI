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
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatProgressSpinnerModule, MarkdownModule
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
    @Inject(PLATFORM_ID) private platformId: Object,
    private _markdownService: MarkdownService
  ) { }

  async ngOnInit(): Promise<void> {
    // 程式碼版- 高亮語法的初始設定
    this.highlighter = await this._shikiService.initShiki(
      [this.defaultCodeBoardLanguaged, 'bash', 'html', 'css', 'javascript', 'python'],
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





  // ———————————————————————————— 對話串 ————————————————————————————
  // 排版- 處理文字排版、程式碼高亮語法
  async formatGptApiRes(ApiRes: string): Promise<string> {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;       // 正則：全段內容、所用語言、程式碼段落
    const allCodeBlockMatch = ApiRes.matchAll(codeBlockRegex);// 程式碼段落- 所有匹配到的程式碼段落
    let afterFormattedRes = '';                               // 處理後的最終內容
    let textIndex = 0;                                        // 普通文字的匹配起始位置

    // 遍歷處理每個找到的程式碼段落
    for (const match of allCodeBlockMatch) {
      let [fullMatch, language, code] = match;                // 正則匹配到的全段內容、所用語言、程式碼段落
      language = language || this.defaultCodeBoardLanguaged;  // 無匹配到語言則用預設程式語言(TS)

      // 加入轉譯後的文字
      afterFormattedRes += this._markdownService.parse(
        ApiRes.slice(textIndex, match.index)
      );
      // NOTE:範圍是上次匹配到的程式碼結束位置，到這次匹配到的程式碼開始位置

      // 加入高亮後的程式碼
      afterFormattedRes += await this.getHighlightCode(code, language);

      // 更新匹配位置
      textIndex = match.index! + fullMatch.length;
      // NOTE: lastIndex 為當前匹配結束的位置，以備下次切割普通文字
    };

    // 加入最後的轉譯文字
    afterFormattedRes += this._markdownService.parse(
      ApiRes.slice(textIndex)
    );
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
      alert('複製成功!');
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

          // 還原高度
          inputElement.style.height = "auto";

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
  saveToCahce(creatTimestamp: number, queAndAnsMsgContent: ChatSingleCoversation[]) {
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
            lastUpdateTime: this.generateTitleFromTimestamp(creatTimestamp)     // 更新時間戳為當前時間
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
        title: this.generateTitleFromTimestamp(creatTimestamp),
        msgContents: queAndAnsMsgContent,
        createTime: this.generateTitleFromTimestamp(creatTimestamp),
        lastUpdateTime: this.generateTitleFromTimestamp(creatTimestamp)
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

      // 處理文字排版、高亮語法
      const afterFormat = await this.formatGptApiRes(res.choices[res.choices.length - 1].message.content);
      console.log('afterFormat ', afterFormat);

      // 更新當前視窗畫面、資料
      const answerMsgContent: ChatSingleCoversation = {
        role: 'system',
        content: afterFormat
      };
      this.currentThreadData!.msgContents.push(answerMsgContent);

      // 存到暫存
      this.saveToCahce(res.created, [questionMsgContent, answerMsgContent]);

      this._changeDetectorRef.detectChanges();
      this._uiBlockService.removeBlockUI();
    });
  }


  fakeApiRes = {
    title: "假資料標題",
    exampleApiResText: "不用下載程式碼即可使用：[MyAI線上版](https://chiawen81.github.io/MyAI/user/chat/index)\n\n#### 測試h4\n### 測試h3\n## 測試h2\n# 測試h1\n~~非常棒~~\nMarkdown 是一種輕量級的標記語言，常用於格式化文本。以下是一些常用的 Markdown 語法：\n\n1. **標題**：\n   - 使用 `#` 表示標題，`#` 的數量表示標題的層級。\n     ```\n     # 一級標題\n     ## 二級標題\n     ### 級標題\n     ```\n\n2. **粗體**：\n   - 使用 `**` 或 `__` 包圍文字。\n ~~非常棒~~\n    ```\n     **粗體文字**\n     __粗體文字__\n     ```\n\n#### 測試h4\n這裡是一段文字\n### 測試h3\n這裡是一段文字\n## 測試h2\n這裡是一段文字\n# 測試h1\n這裡是一段文字\n\n3. **斜體**：\n   - 使用 `*` 或 `_` 包圍文字。\n     ```\n     *斜體文字*\n     _斜體文字_\n     ```\n\n4. **刪除線**：\n   - 使用 `~~` 包圍文字。\n     ```\n     ~~刪除線文字~~\n     ```\n\n5. **清單**：\n   - 無序清單使用 `*`、`+` 或 `-`。\n     ```\n     * 項目一\n     * 項目二\n     ```\n   - 有序清單使用數字加上 `.`。\n     ```\n     1. 第一項\n     2. 第二項\n     ```\n\n6. **連結**：\n   - 使用 `[顯示文字](網址)`。\n     ```\n     [Google](https://www.google.com)\n     ```\n\n7. **圖片**：\n   - 使用 `![替代文字](圖片網址)`。\n     ```\n     ![示例圖片](https://example.com/image.jpg)\n     ```\n\n8. **引用**：\n   - 使用 `>`。\n     ```\n     > 這是一個引用\n     ```\n\n"
  };


  fakeApiRes2 = {
    title: "假資料標題",
    exampleApiResText: "Angular 是一個流行的前端框架，用於構建動態的單頁應用程式（SPA）。在 Angular 中，Component 是構建應用程式的基本單位。每個 Component 都包含了 HTML 模板、CSS 樣式和 TypeScript 類，這些組成部分共同定義了應用程式的視圖和行為。\n\n### 如何使用 Angular Component\n\n1. **創建 Component**:\n- 使用 Angular CLI 創建 Component 是最簡單的方法。你可以使用以下命令：\n ```bash\nng generate component component-name\n```\n- 這將創建一個新的目錄，包含四個文件：`component-name.component.ts`、`component-name.component.html`、`component-name.component.css` 和 `component-name.component.spec.ts`。\n\n2. **Component 類**:\n- 在 `component-name.component.ts` 文件中，Component 類使用 `@Component` 裝飾器來定義。這個裝飾器包含了元數據，用於描述 Component 的行為。\n- 例如：\n```typescript\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-component-name',\n  templateUrl: './component-name.component.html',\n  styleUrls: ['./component-name.component.css']\n})\nexport class ComponentNameComponent {\n  // Component 的邏輯\n}\n```\n\n3. **模板和樣式**:\n- `templateUrl` 指定了 HTML 模板的路徑，這是 Component 的視圖。\n- `styleUrls` 是一個數組，包含了 CSS 樣式的路徑。\n\n4. **使用 Component**:\n- 在其他模板中使用 Component 時，可以使用 `selector` 屬性中定義的選擇器。\n- 例如，在 `app.component.html` 中使用：\n```html\n<app-component-name></app-component-name>\n```\n\n### Component 的屬性\n\n1. **selector**:\n- 定義了 Component 的選擇器，這是用於在模板中插入 Component 的標籤。\n\n2. **templateUrl / template**:\n- `templateUrl` 是指向外部 HTML 文件的路徑。\n- `template` 是內聯 HTML 字符串。\n\n3. **styleUrls / styles**:\n- `styleUrls` 是一個數組，包含了外部 CSS 文件的路徑。\n- `styles` 是內聯 CSS 字符串數組。\n\n4. **providers**:\n- 用於定義在這個 Component 中可用的服務。\n\n5. **animations**:\n- 定義了這個 Component 中使用的動畫。\n\n6. **changeDetection**:\n- 設置變更檢測策略，默認是 `ChangeDetectionStrategy.Default`。\n\n7. **encapsulation**:\n- 定義樣式封裝策略，選項包括 `ViewEncapsulation.Emulated`（默認）、`ViewEncapsulation.None` 和 `ViewEncapsulation.ShadowDom`。\n\n8. **inputs / outputs**:\n- `inputs` 定義了可以從父 Component 傳入的屬性。\n- `outputs` 定義了可以向父 Component 發送的事件。\n\n這些屬性和功能使得 Angular Component 成為構建複雜應用程式的強大工具。通過組合和重用 Component，你可以創建結構良好且可維護的應用程式。"
  };


  fakeApiRes3 = {
    title: "假資料標題",
    exampleApiResText: "在Angular中，依賴注入（Dependency Injection，簡稱DI）是一個核心概念，用於提供或\"注入\"組件和服務之間的依賴關係。Angular的依賴注入系統會為你提供所需的依賴項，例如服務或其他類別。\n\n要使用Angular的依賴注入系統，你通常會經歷以下步驟：\n\n1. **定義一個服務（Service）**：首先，建立一個服務類別，該類別包含你想要在應用程序中的其他部分使用的方法和屬性。\n\n```typescript\nimport { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root' // 這個服務是全域單例\n})\nexport class MyService {\n  constructor() {}\n\n  doSomething() {\n    // 這裡是你的邏輯\n  }\n}\n```\n\n2. **注入服務到組件（Component）或其他服務中**：在組件或其他服務的建構函數中，通過參數列表來注入先前定義的服務。\n\n```typescript\nimport { Component } from '@angular/core';\nimport { MyService } from './my.service';\n\n@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\nexport class MyComponent {\n  // MyService 會被Angular DI系統自動注入到這個組件中\n  constructor(private myService: MyService) {}\n\n  useService() {\n    // 使用注入的服務\n    this.myService.doSomething();\n  }\n}\n```\n\n在上面的程式碼中，`MyService` 是透過 `MyComponent` 的建構函數注入的。Angular會自動創建`MyService`的實例（如果尚未創建），並將其作為參數傳遞給組件的建構函數。\n\n這樣，你就可以在組件中使用`myService`實例來調用`doSomething`方法或其他方法。\n\n請注意，為了讓服務可以被注入，你必須在Angular模組中註冊它。在上面`@Injectable()`裝飾器中使用`providedIn: 'root'`，表示該服務是全局單例，它會自動註冊到根注入器中，這意味著你不需要在任何NgModule的`providers`陣列中再次註冊它。如果你希望將服務限制在特定模組或組件中使用，則可以在相應的NgModule或@Component的`providers`陣列中註冊該服務。\n\n這就是Angular依賴注入系統的基本用法。透過這種方式，Angular幫助我們保持組件和服務之間的解耦，並提高了代碼的可測試性和可維護性。"
  };





}
