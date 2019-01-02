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

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    PostModule,
    ChatPageModule,
    MeasureModule,
    //SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    BlogPageModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
