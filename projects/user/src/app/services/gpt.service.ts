


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatSingleCoversation } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  private apiUrl: string = 'https://api.openai.com/v1/chat/completions';
  private apiKey: string = '';

  constructor(
    private http: HttpClient
  ) {

  }

  // 取得 API 金鑰
  getApiKeyForOpenAI(): string | null {
    let apiKey: string | null = localStorage.getItem("myAI_OpenAI_ApiKey");

    if (apiKey) {
      this.apiKey = apiKey;
    } else {
      alert("請輸入API金鑰！");
    };

    return apiKey;
  }



  // 取得GPT回覆
  getModelAnsFromOpenAI(messages: ChatSingleCoversation[]): Observable<any> {
    //  檢查 API 金鑰
    this.getApiKeyForOpenAI();

    // 設定 HttpHeaders
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    // 設定傳送參數
    const body = {
      model: 'gpt-4o-2024-08-06',
      messages: messages,
      // [
      //   //  預設的角色扮演訊息
      //   {role: 'system', content: '你是一位專業的軟體工程師'},
      //   { role: 'user', content: prompt },
      // ],
      max_tokens: 3000,
      temperature: 0,
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }




}

