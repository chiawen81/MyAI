import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BlockUiDialogComponent } from '../common-component/bolck-ui/block-ui-dialog.component';

@Injectable({
  providedIn: 'root' // 確保這個服務可以全局使用
})
export class UiBlockService {
  private dialogRef: MatDialogRef<BlockUiDialogComponent> | null = null;

  constructor(
    private dialog: MatDialog
  ) { }

  // 開啟 UI Block
  addBlockUI(): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(BlockUiDialogComponent, {
        disableClose: true, // 禁止用戶關閉
        panelClass: 'block-ui-dialog' // 使用自定義樣式
      });
    }
  }


  // 關閉 UI Block
  removeBlockUI(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
