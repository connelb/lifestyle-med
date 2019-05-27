import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup';
import { SignupPageRoutingModule } from './signup-routing.module';
import { AmplifyAngularModule, AmplifyService,AmplifyIonicModule } from 'aws-amplify-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    SignupPageRoutingModule
  ],
  declarations: [
    SignupPage,
  ],
  providers: [AmplifyService]
})
export class SignUpModule { }
