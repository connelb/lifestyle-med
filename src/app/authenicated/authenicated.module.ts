import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenicatedGuard } from './authenicated.guard';
import { AppsyncService } from './appsync.service';

import { AuthenicatedRoutingModule } from './authenicated-routing.module';
import { AppMaterialModule } from './../app-material/app-material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasureComponent } from './measure/measure.component';
import { WorkoutComponent } from './workout/workout.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    MeasureComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenicatedRoutingModule,
    //NgxPageScrollModule,
    AppMaterialModule,
    AmplifyAngularModule
  ]
})
export class AuthenicatedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenicatedModule,
      providers: [
        AuthenicatedGuard,
        AppsyncService,
        AmplifyService 
      ]
    };
  }
}
