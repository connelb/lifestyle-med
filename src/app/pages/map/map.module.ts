import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapPage } from './map';
import { MapPageRoutingModule } from './map-routing.module';
import { AmplifyAngularModule, AmplifyService, AmplifyIonicModule  } from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapPageRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule 
  ],
  declarations: [
    MapPage,
  ],
  providers: [AmplifyService],
})
export class MapModule { }
