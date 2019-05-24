import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccountPage } from '../pages/account/account';

  const routes: Routes = [
    {
      path: 'account',
      loadChildren: '../pages/account/account.module#AccountModule'
    },
    {
      path: 'support',
      loadChildren: '../pages/support/support.module#SupportModule'
    },
    // { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
    // { path: 'blog', loadChildren: '../pages/blog/blog.module#BlogPageModule' },
    { path: 'chat', loadChildren: '../pages/chat/chat.module#ChatPageModule' },
    { path: 'action-sheet', loadChildren: '../pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
    { path: 'sleep', loadChildren: '../pages/sleep/sleep.module#SleepPageModule' },
    { path: 'sleep-history', loadChildren: '../pages/sleep-history/sleep-history.module#SleepHistoryPageModule' },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
