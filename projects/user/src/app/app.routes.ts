import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat-page/chat.routes').then(m => m.chatRoutes)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
