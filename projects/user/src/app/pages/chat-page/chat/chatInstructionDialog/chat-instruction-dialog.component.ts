import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../../../../services/chat.service';

@Component({
  selector: 'app-chat-instruction-dialog',
  standalone: true,
  imports: [
    MatDialogModule, ReactiveFormsModule, MatButtonModule
  ],
  templateUrl: './chat-instruction-dialog.component.html',
  styleUrls: ['./chat-instruction-dialog.component.scss']
})
export class ChatInstructionDialogComponent implements OnInit {
  // ====優化部分====
  // 1. 優化指令與格式化 https://chatgpt.com/c/67839cad-0338-800c-952a-6058cdbe5b04
  // 2. 調整彈窗樣式（border-radius）

  instructionText = new FormControl('');

  /* Service */
  private dialogRef = inject(MatDialogRef<ChatInstructionDialogComponent>);
  private _chatService = inject(ChatService);

  ngOnInit(): void {
    // 從 localStorage 讀取已存在的自訂指令
    this.instructionText.setValue(this._chatService.getInstructionCache());
  }



  // 儲存自訂指令
  saveInstruction(): void {
    // 儲存到 localStorage
    localStorage.setItem('myAICusInstruction', JSON.stringify(this.instructionText.value));
    this.dialogRef.close(this.instructionText.value);
  }
}
