import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('../pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('../pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('../pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('../pages/sleep/sleep.module').then(m => m.SleepPageModule)
  },
  {
    path: 'sleep-history',
    loadChildren: () => import('../pages/sleep-history/sleep-history.module').then(m => m.SleepHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
