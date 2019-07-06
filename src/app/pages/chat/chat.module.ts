// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

// import { IonicModule } from '@ionic/angular';

// import { ChatPage } from './chat.page';
// import { AppMaterialModule } from '../../app-material/app-material.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: ChatPage
//   }
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     AppMaterialModule,
//     RouterModule.forChild(routes)
//   ],
//   declarations: [ChatPage]
// })
// export class ChatPageModule {}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { ChatAppRoutingModule } from './chat-app-routing.module';

import { AuthGuard } from './auth-guard.service';
import { AppsyncService } from './../../providers/appsync.service';

import { ChatPage } from './chat.page';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatConvoListComponent, MyFilterPipe  } from './chat-convo-list/chat-convo-list.component';
import { ChatMessageViewComponent } from './chat-message-view/chat-message-view.component';

import { InfscrollDirective } from './infscroll.directive';
import { MomentAgoPipe } from './moment-ago.pipe';

// import { NgxPageScrollModule } from 'ngx-page-scroll';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAngularModule, AmplifyIonicModule } from 'aws-amplify-angular';
// import@ionic/angular { IonicSelectableModule } from '@ionic/angular';
import { ChatModal } from './chat.modal';


const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    //NgbModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    // IonicSelectableModule,
    ChatAppRoutingModule,
    // NgxPageScrollModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ChatPage,
    ChatMessageComponent,
    ChatInputComponent,
    ChatUserListComponent,
    ChatConvoListComponent,
    MyFilterPipe,
    ChatMessageViewComponent,
    MomentAgoPipe,
    InfscrollDirective,
    ChatModal
  ],
  entryComponents: [
    // ListPage,
   //ChatModal
  ]
})
export class ChatPageModule{}

