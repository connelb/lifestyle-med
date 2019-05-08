import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AmplifyAngularModule, AmplifyService,  AmplifyIonicModule } from 'aws-amplify-angular';


const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AmplifyAngularModule,
    IonicModule,
    AmplifyIonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [AmplifyService],
  declarations: [HomePage]
})
export class HomePageModule {}
