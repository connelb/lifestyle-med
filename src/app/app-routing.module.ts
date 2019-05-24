import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { CheckUser } from './providers/check-user.service';
import { AuthGuard } from './providers/auth-guard.service';


const routes: Routes = [
    {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
// { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard]},
{path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule'},
{ path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  }
]

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tutorial',
//     pathMatch: 'full'
//   }, {
//     path: 'support',
//     loadChildren: './pages/support/support.module#SupportModule'
//   },
//   // {
//   //   path: 'signup',
//   //   loadChildren: './pages/signup/signup.module#SignUpModule'
//   // },
//   // {
//   //   path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule'
//   // },
//   {
//     path: 'app',
//     loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
//     canActivate: [AuthGuard]
//   },
//   { path: 'app/tabs/chat', loadChildren: './pages/chat/chat.module#ChatPageModule',canActivate: [AuthGuard] },
//   { path: 'app/tabs/sleep-history', loadChildren: './pages/sleep-history/sleep-history.module#SleepHistoryPageModule' ,canActivate: [AuthGuard] },
//   { path: 'app/tabs/water', loadChildren: './pages/water/water.module#WaterPageModule' ,canActivate: [AuthGuard] },
//   { path: 'app/tabs/sleep', loadChildren: './pages/sleep/sleep.module#SleepPageModule' ,canActivate: [AuthGuard] },
//   { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule',canActivate: [AuthGuard] },
  
//   {
//     path: 'tutorial',
//     loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
//     canLoad: [CheckTutorial]
//   },
//   { path: 'home', loadChildren: './pages/blog/blog.module#BlogPageModule',canActivate: [AuthGuard] },
//   {
//     path: 'login',
//     loadChildren: './pages/login/login.module#LoginModule'
//   }
// ]

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
//     path: 'signup',
//     loadChildren: './pages/signup/signup.module#SignUpModule'
//   },
//   {
//     path: 'app',
//     loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
//   },
//   {
//     path: 'tutorial',
//     loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
//     canLoad: [CheckTutorial]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
