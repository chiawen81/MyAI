import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';


const chatRoutes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      // 在這裡定義子路由，例如：
      // { path: 'details', component: ChatDetailsComponent },
      // { path: 'new', component: NewChatComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
