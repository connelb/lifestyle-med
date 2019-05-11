import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { CheckUser } from './providers/check-user.service';
import { AuthGuard } from './providers/auth-guard.service';

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

// { path: '', redirectTo: 'home', pathMatch: 'full' },
// { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardService]},
// { path: 'cards/:id', loadChildren: './cards/cards.module#CardsPageModule', canActivate: [AuthGuardService] },
// { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  }, {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  },
  {
    path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
    canActivate: [AuthGuard]
  },

  // {
  //   path: 'home',
  //   loadChildren: './pages/home/home.module#HomePageModule',
  //   // path: 'members', 
  //   //canActivate: [CheckUser],
  //   // loadChildren: './members/member-routing.module#MemberRoutingModule'
  // },
  // { path: 'sleep-history', loadChildren: './pages/sleep-history/sleep-history.module#SleepHistoryPageModule' },
  // { path: 'water', loadChildren: './pages/water/water.module#WaterPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule',canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'nav', loadChildren: './pages/nav/nav.module#NavPageModule' }
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  }, {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  }
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
