import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';

// import { AboutModule } from '../about/about.module';
// import { PostModule } from '../post/post.module';
// import { MeasureModule } from '../measure/measure.module';

// // import { BlogPageModule } from '../blog/blog.module';
// // import { ChatPageModule } from '../chat/chat.module';
// // import { SignUpModule } from '../signup/signup.module';
// // import { SleepPageModule } from '../sleep/sleep.module';
// // import { ActionSheetPageModule } from '../action-sheet/action-sheet.module';
// import { ProfilePage } from '../pages/profile/profile.page';
// // import { WaterPageModule } from '../water/water.module';
// // import { SignupPageRoutingModule } from '../signup/signup-routing.module';
// // import { SleepHistoryPage } from '../sleep-history/sleep-history.page';
// // import { SleepHistoryPageModule } from '../sleep-history/sleep-history.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MemberRoutingModule
  ],
  exports:[
    // ProfilePage
  ]
})
export class MembersModule { }


// @NgModule({
//   imports: [
//     DashboardRoutingModule
//   ],
//   declarations: [
//     DashboardComponent
//   ],
//   exports: [
//     DashboardComponent
//   ]
// })
// export class DashboardModule {
// }