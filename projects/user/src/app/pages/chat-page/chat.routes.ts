import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';


export const chatRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: 'index',
        loadComponent: () => import('../chat-page/chat/chat.component').then(m => m.ChatComponent),
        data: {
          component: ChatComponent,
        }
      }
    ],
  }
];

