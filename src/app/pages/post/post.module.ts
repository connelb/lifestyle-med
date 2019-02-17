import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PostPage } from './post';
import { PostPageRoutingModule } from './post-routing.module';
import { AmplifyAngularModule, AmplifyService, AmplifyIonicModule } from 'aws-amplify-angular';
import { PopoverPage } from '../post-popover/post-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  declarations: [
    PostPage, PopoverPage
  ],
  entryComponents: [PopoverPage],
  bootstrap: [PostPage],
  providers: [AmplifyService],
})
export class PostModule { }
