import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatPage } from './chat.page';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatAppRoutingModule { }
