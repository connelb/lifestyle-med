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
        path: 'blog',
        children: [
          {
            path: '',
            component: BlogPage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          // }
        ]
      },
      {
        path: 'action-sheet',
        children: [
          {
            path: '',
            component: ActionSheetPage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          // }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          // }
        ]
      },
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
            loadChildren: '../chat/chat.module#ChatPageModule'
            // loadChildren: '../post/post.module#PostModule'
          }
        ]
      },
      {
        path: 'water',
        children: [
          {
            path: '',
            loadChildren: '../water/water.module#WaterPageModule'
            // loadChildren: '../post/post.module#PostModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
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
      {
        path: '',
        redirectTo: '/app/tabs/blog',
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

