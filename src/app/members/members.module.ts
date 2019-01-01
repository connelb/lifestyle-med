import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SupportPage } from '../pages/support/support';
import { AccountPage } from '../pages/account/account';
import { BlogPage } from '../pages/blog/blog.page';
import { ChatPage } from '../pages/chat/chat.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [BlogPage, AccountPage,SupportPage,ChatPage ]
})
export class MemberModule {}

