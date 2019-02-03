import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { CheckUser } from './providers/check-user.service';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
//   { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
//   { 
//     path: 'members', 
//     canActivate: [AuthGuardService],
//     loadChildren: './members/member-routing.module#MemberRoutingModule'
//   },
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },{
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
    //canActivate: [CheckUser]
  },

    { 
      path: 'members', 
      //canActivate: [CheckUser ],
      loadChildren: './members/member-routing.module#MemberRoutingModule'
    },
  { path: 'sleep-history', loadChildren: './pages/sleep-history/sleep-history.module#SleepHistoryPageModule' },
  { path: 'water', loadChildren: './pages/water/water.module#WaterPageModule' }
  ]

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tutorial',
//     pathMatch: 'full'
//   },
//   {
//     path: 'account',
//     loadChildren: './pages/account/account.module#AccountModule'
//   },
//   {
//     path: 'support',
//     loadChildren: './pages/support/support.module#SupportModule'
//   },
//   {
//     path: 'login',
//     loadChildren: './pages/login/login.module#LoginModule'
//   },
//   {
//     path: 'app',
//     loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
//     canLoad: [CheckUser]
//   },
//   {
//     path: 'tutorial',
//     loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
//     canLoad: [CheckTutorial]
//   },
//   { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
//   { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
