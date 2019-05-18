import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { PostModule } from '../post/post.module';
import { MeasureModule } from '../measure/measure.module';
//import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
import { BlogPageModule } from '../blog/blog.module';
import { ChatPageModule } from '../chat/chat.module';
import { SignUpModule } from '../signup/signup.module';
import { SleepPageModule } from '../sleep/sleep.module';
import { ActionSheetPageModule } from '../action-sheet/action-sheet.module';
import { HomePageModule } from '../home/home.module';
import { ProfilePageModule } from '../profile/profile.module';
import { WaterPageModule } from '../water/water.module';
import { SignupPageRoutingModule } from '../signup/signup-routing.module';
import { SleepHistoryPage } from '../sleep-history/sleep-history.page';
import { SleepHistoryPageModule } from '../sleep-history/sleep-history.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    PostModule,
    ChatPageModule,
    MeasureModule,
    HomePageModule,
    ProfilePageModule,
    WaterPageModule,
    SignupPageRoutingModule,
    //SessionDetailModule,
    // SpeakerDetailModule,
    // SpeakerListModule,
    BlogPageModule,
    SignUpModule,
    SleepPageModule,
    SleepHistoryPageModule,
    ActionSheetPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
