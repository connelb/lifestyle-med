import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavPage } from './../app/pages/nav/nav.page'
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';

import { APIService } from './API.service';

import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppsyncService } from './providers/appsync.service';

// import { ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';//ApolloModule,, APOLLO_OPTIONS
// import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// Apollo
// import { GraphQLModule } from './graphql.module';
import { MemberRoutingModule } from './members/member-routing.module';
// import { } from './providers/pwa.service';
import { AuthGuard } from './providers/auth-guard.service';
import { MembersModule } from './members/members.module';
// import { ProfilePageModule } from './pages/profile/profile.module';
//import { MembersPage } from './pages/profile/profile.page';

// import 'chart.js/src/chart.js';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    AppComponent,
    NavPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembersModule,
    MemberRoutingModule,
    HttpClientModule,
    // ApolloModule,
    AmplifyAngularModule,
    // HttpLinkModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AmplifyAngularModule,
    // GraphQLModule,
    ChartsModule
  ],
  providers: [InAppBrowser, SplashScreen, StatusBar, 
    AmplifyService,
    APIService,
    AppsyncService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }