import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-block-ui-dialog',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './block-ui-dialog.component.html',
  styleUrl: './block-ui-dialog.component.scss',
})
export class BlockUiDialogComponent { }
