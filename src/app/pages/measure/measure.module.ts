import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MeasurePage } from './measure';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { MeasurePageRoutingModule } from './measure-routing.module';
import { AppsyncService } from '../../providers/appsync.service';
import { AmplifyService } from 'aws-amplify-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MeasurePageRoutingModule
  ],
  declarations: [
    MeasurePage,
    ScheduleFilterPage
  ],
  entryComponents: [
    ScheduleFilterPage
  ],
  providers: [
    //AuthenicatedGuard,
    AppsyncService,
    AmplifyService,
    AppsyncService 
  ]
})
export class MeasureModule { }

// export class MeasureModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: AuthenicatedModule,
//       providers: [
//         AuthenicatedGuard,
//         AppsyncService,
//         AmplifyService 
//       ]
//     };
//   }
// }
