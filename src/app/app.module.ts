import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ChatAppModule } from './chat-app/chat-app.module';
import { AuthenicatedModule } from './authenicated/authenicated.module'
import { RoutingModule } from './routing.module';
import { AuthenicatedRoutingModule } from './authenicated/authenicated-routing.module';

import { environment } from '../environments/environment';

import { AppMaterialModule } from './app-material/app-material.module';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
//import { DashboardComponent } from './authenicated/dashboard/dashboard.component';
//Amplify.configure(aws_exports);
import { APIService } from './API.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChatAppModule.forRoot(),
    AuthenicatedModule.forRoot(),
    RoutingModule,
    AuthenicatedRoutingModule,
    FormsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
