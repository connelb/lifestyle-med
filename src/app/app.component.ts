// import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
// import awsconfig from '../aws-exports';



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent { }


// export class AppComponent {
//   title = 'amplify-angular-app';
//   url = 'https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/'
//         + awsconfig.aws_mobile_analytics_app_id + '/analytics/events';
//   eventsSent = 0;
//   analyticsEventSent = false;

//   constructor( private amplifyService: AmplifyService ) {}

//   handleAnalyticsClick() {
//     this.amplifyService.analytics().record('AWS Amplify Tutorial Event')
//     .then( (evt) => {
//         ++this.eventsSent;
//         this.analyticsEventSent = true;
//     });
//   }
// }

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

import AWSAppSyncClient from 'aws-appsync';
//import { User } from './interfaces/user';
import Member from './types/member';


import { AppsyncService } from './providers/appsync.service';
import { SubmitRepositoryService } from './providers/submit-repository.service';
import getMe from './graphql/queries/getMe';
import createMember from './graphql/mutations/createMember';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, Subscription } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import listAllMembers from './graphql/queries/listAllMembers';
//import {allMember} from './graphql/queries.graphql'
import queryListAllMessages from './graphql/queries/queryListAllMessages';
import {APIService} from './API.service';
import { Auth } from 'aws-amplify';

// const CurrentUserForProfile = gql`
// query CurrentUserForProfile {
//   currentUser {
//     login
//     avatar_url
//   }
// }
// `;


// const CurrentUserForProfile1 = gql`
// query getallMembers {
//   allMember {
//     __typename
//     id
//     username
//   }
// }`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit, OnDestroy {
  appPages = [
    {
      title: 'Journal',
      url: '/action-sheet',
      icon: 'book'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'contacts'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  userCreated: boolean;
  signedIn;
  greeting;
  session;
  client: AWSAppSyncClient<any>;
  me: Member;
  
  rates$: Observable<any[]>;
  loading$: Observable<boolean>;
  errors$: Observable<any>;
  member = '';
  no_member;
  loading: boolean;
  currentUser: any;

  private querySubscription: Subscription;

  constructor(
    private api: APIService,
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    public amplifyService: AmplifyService,
    // private swUpdate: SwUpdate,
    public appsyncService: AppsyncService,
    private apollo: Apollo,
    private submitRepoService: SubmitRepositoryService

  ) {
    this.initializeApp();
  }


  ngOnDestroy() {
    // this.querySubscription.unsubscribe();
  }

  ngOnInit() {

    // Auth.currentSession().then(session => {
    //   this.logInfoToConsole(session);
    //   this.session = session;
    //   this.register();
    //   setImmediate(() => this.createMember());
    // });




  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 

  // logout() {
  //   this.amplifyService.auth().signOut()
  //     .then(() => {
  //       this.userData.logout().then(() => {
  //         return this.router.navigateByUrl('/app/tabs/blog');
  //       })
  //     })
  //     .catch(err => {
  //       console.log('err: ', err)
  //     })
  // }

  // this.amplifyService.authStateChange$.subscribe(authState => {
  //   const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
  //   if (this.isLoggedIn && !isLoggedIn) {
  //     router.navigate(['']);
  //   } else if (!this.isLoggedIn && isLoggedIn) {
  //     router.navigate(['/chat']);
  //   }
  //   this.isLoggedIn = isLoggedIn;
  // });

  // openTutorial() {
  //   this.menu.enable(false);
  //   this.storage.set('ion_did_tutorial', false);
  //   this.router.navigateByUrl('/tutorial');
  // }
}
