import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat-page/chat/chat.component';

export const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat-page/chat.routes').then(m => m.ChatRoutingModule)
    // path: 'chat',
    // component: ChatComponent,

  }
];
