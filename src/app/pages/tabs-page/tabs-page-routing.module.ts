import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { MeasurePage } from '../measure/measure';
import { BlogPage } from '../blog/blog.page';
import { ActionSheetPage } from '../action-sheet/action-sheet.page';
import { HomePage } from '../home/home.page';
import { ProfilePage } from '../profile/profile.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'action-sheet',
        children: [
          {
            path: '',
            component: ActionSheetPage,
          }]
        },
      {
        path: 'sleep',
        children: [
          {
            path: '',
        //loadChildren: '../sleep/sleep.module#SleepPageModule'
        loadChildren: () => import('../sleep/sleep.module').then(m => m.SleepPageModule)
          }]
      },
      {
        path: 'sleep-history',
        children: [
          {
            path: '',
            loadChildren: () => import('../sleep-history/sleep-history.module').then(m => m.SleepHistoryPageModule)
        //loadChildren: '../sleep-history/sleep-history.module#SleepHistoryPageModule'
          }]
      },
      {
        path: 'water',
        children: [
          {
              path: '',
              loadChildren: () => import('../water/water.module').then(m => m.WaterPageModule)
              //loadChildren: '../water/water.module#WaterPageModule'
          },
        ]
      },
      // {
      //   path: 'action-sheet',
      //   children: [
      //     // {
      //     //   path: '',
      //     //   redirectTo: '/app/tabs/home',
      //     //   pathMatch: 'full'
      //     // }
      //     {
      //       path: '',
      //       component: ActionSheetPage,
      //     },
          
      //   ]
      // },
      // {
      //   path: 'speakers',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule'
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
      //     },
      //     {
      //       path: 'speaker-details/:speakerId',
      //       loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
      //     }
      //   ]
      // },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfilePage,
          }
        ]
      },


      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
            //loadChildren: '../chat/chat.module#ChatPageModule'
            // loadChildren: '../post/post.module#PostModule'
          }
        ]
      },
      // {
      //   path: 'app/tabs/water',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../water/water.module#WaterPageModule'
      //       // loadChildren: '../post/post.module#PostModule'
      //     }
      //   ]
      // },
      // {
      //   path: 'profile',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../profile/profile.module#ProfilePageModule'
      //     }
      //   ]
      // },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
            //loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      // {
      //   path: 'signup',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../signup/signup.module#SignUpModule'
      //     }
      //   ]
      // },
      // {
      //   path: 'login',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../login/login.module#LoginModule'
      //     }
      //   ]
      // },

      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
            //loadChildren: '../home/home.module#HomePageModule'
            // component: HomePage,
          }
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          // }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/home',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

