import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { AuthGuard } from './providers/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  // { path: 'login', loadChildren: './pages/signin/signin.module#SigninModule' },
  //{ path: 'login', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  //{ path: 'signup', loadChildren: './pages/signup/signup.module#SignUpModule' },
  //{ path: 'confirm', loadChildren: './pages/confirm/confirm.module#ConfirmPageModule' },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule',
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'members',
  //   loadChildren: './pages/members/members.module#MembersModule',
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  },
  //{ path: 'confirm', loadChildren: './pages/confirm/confirm.module#ConfirmPageModule' },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
