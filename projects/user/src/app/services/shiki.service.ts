import { Injectable } from '@angular/core';
import { createHighlighter, Highlighter } from 'shiki';

@Injectable({
  providedIn: 'root',
})
export class ShikiService {
  private highlighter: Highlighter | undefined;

  constructor() { }


  // 初始化 Shiki 設定
  async initShiki(langs: string[], themes: string[]) {
    if (!this.highlighter) {
      this.highlighter = await createHighlighter({
        langs: langs,  // ['javascript']
        themes: themes // ['github-dark']
      });
    }
    return this.highlighter;
  }

  // 將程式段落加上高亮語法
  async highlightCode(highlighter: Highlighter, code: string, language: string, theme: string) {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: theme
    });
  }

}
