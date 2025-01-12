
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  // 取得自訂指令
  getInstructionCache(): string {
    const cache = localStorage.getItem('myAICusInstruction');
    return cache ? JSON.parse(cache) : "";
  }
}
