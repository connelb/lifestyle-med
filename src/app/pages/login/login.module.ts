import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';
import { AmplifyAngularModule, AmplifyService,  AmplifyIonicModule } from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
  ],
  providers: [AmplifyService],
})
export class LoginModule { }
