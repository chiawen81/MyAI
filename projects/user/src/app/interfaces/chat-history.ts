import { ChatSingleCoversation } from "./chat-single-thread";

export interface ChatHistoryCahce {
  /* 對話串流水號 */
  threadId: string,

  /* 頁籤的對話串排序 */
  tabSortIdx: number,

  /* 對話標題 */
  title: string,

  /* 對話訊息 */
  msgContents: ChatSingleCoversation[],

  /* 創建時間 */
  createTime: string,

  /* 最後更新時間 */
  lastUpdateTime: string
}
