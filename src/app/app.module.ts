import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavPage } from './../app/pages/nav/nav.page'
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';


import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { APIService } from './API.service';

import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppsyncService } from './providers/appsync.service';

import { ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';//ApolloModule,, APOLLO_OPTIONS
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Apollo
import { GraphQLModule } from './graphql.module';
import { SubmitRepositoryService } from './providers/submit-repository.service';
import { MemberRoutingModule } from './members/member-routing.module';
import { } from './providers/pwa.service';
import { AuthGuard } from './providers/auth-guard.service';
import { MembersModule } from './members/members.module';
// import { ProfilePageModule } from './pages/profile/profile.module';
//import { MembersPage } from './pages/profile/profile.page';

// import 'chart.js/src/chart.js';

@NgModule({
  declarations: [
    AppComponent,
    NavPage,
    //ProfilePage 
    // FooterComponent,
    // HomeComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembersModule,
    MemberRoutingModule,
    HttpClientModule,
    ApolloModule,
    AmplifyAngularModule,
    HttpLinkModule,
    // ProfilePageModule,

    // BrowserModule,
    BrowserAnimationsModule,
    // ChatAppModule.forRoot(),
    // AuthenicatedModule.forRoot(),
    // RoutingModule,
    // AuthenicatedRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AmplifyAngularModule,
    GraphQLModule,
    ChartsModule
  ],
  providers: [InAppBrowser, SplashScreen, StatusBar, 
    AmplifyService,
    APIService,
    AppsyncService,
    SubmitRepositoryService,
    AuthGuard
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory(httpLink: HttpLink) {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         uri: `https://iv4v7zdyabfg3gdhmlucmgzg24.appsync-api.us-east-1.amazonaws.com/graphql`
    //       })
    //     }
    //   },
    //   deps: [HttpLink]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { IonicModule } from '@ionic/angular';
// import { IonicStorageModule } from '@ionic/storage';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';

// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

// @NgModule({
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     AmplifyAngularModule,
//     IonicModule.forRoot(),
//     IonicStorageModule.forRoot(),
//     ServiceWorkerModule.register('ngsw-worker.js', {
//       enabled: environment.production
//     })
//   ],
//   declarations: [AppComponent],
//   providers: [InAppBrowser, SplashScreen, StatusBar, AmplifyService],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

