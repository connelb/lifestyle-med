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

import { SwUpdate } from '@angular/service-worker';
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
  update: boolean;
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
    private swUpdate: SwUpdate,
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

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }

    this.swUpdate.available.subscribe(event => {
      //console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
      this.update = true;
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }

    this.amplifyService.auth().currentSession().then(session => {
      this.userCreated = true;
      this.logInfoToConsole(session);
      this.session = session;
      this.register();
      setImmediate(() => this.createMember());
    });

    this.checkLoginStatus1();
    this.listenForLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  createMember() {
    const member = {
      username: this.session.idToken.payload['cognito:username'],
      id: this.session.idToken.payload['sub'],
      firstname:this.session.idToken.payload['cognito:username'],
      lastname:this.session.idToken.payload['cognito:username'],
      cognitoId: this.session.idToken.payload['sub'],
      registered: true,
      bio:'',
      image:''
    };
    // console.log('creating user', user);
    this.appsyncService.hc().then(client => {
      client.mutate({
        mutation: gql(this.api.CreateMember), //createMember,//
        variables: {id: member.id},

        optimisticResponse: () => ({
          createMember: {
            ...member,
            __typename: 'Member'
          }
        }),

        update: (proxy, {data: { createMember: _member }}) => {
          //console.log('createUser update with:', _member);
          proxy.writeQuery({query: gql(this.api.Me) , data: {me: {..._member}}});//  gql(this.api.Me)  getMe
        }
      }).catch(err => console.log('Error registering member', err));
    });
  }

  UpdateMember() {
    const member = {
      // username: this.session.idToken.payload['cognito:username'],
      // id: this.session.idToken.payload['sub'],
      // firstname:this.session.idToken.payload['cognito:username'],
      // lastname:this.session.idToken.payload['cognito:username'],
      // cognitoId: this.session.idToken.payload['sub'],
      // registered: true,
      // bio:'',
      // image:''
    };
    // console.log('creating user', user);
    this.appsyncService.hc().then(client => {
      client.mutate({
        mutation: gql(this.api.Me1), //createMember,//
        variables: {id: this.session.idToken.payload['sub']},

        optimisticResponse: () => ({
          createMember: {
            ...member,
            __typename: 'Member'
          }
        }),

        update: (proxy, {data: { createMember: _member }}) => {
          //console.log('createUser update with:', _member);
          proxy.writeQuery({query: gql(this.api.Me) , data: {me: {..._member}}});//  gql(this.api.Me)  getMe
        }
      }).catch(err => console.log('Error updating member', err));
    });
  }

  logInfoToConsole(session) {
    console.log('session:',session);
    // console.log(`ID Token: <${session.idToken.jwtToken}>`);
    // console.log(`Access Token: <${session.accessToken.jwtToken}>`);
    // console.log('Decoded ID Token:');
    // console.log(JSON.stringify(session.idToken.payload, null, 2));
    // console.log('Decoded Access Token:');
    // console.log(JSON.stringify(session.accessToken.payload, null, 2));
  }

  getType(): string {
    return this.userCreated ? 'UpdateMember' : 'CreateMember';
  }

  // installPwa(): void {
  //   this.Pwa.promptEvent.prompt();
  // }

  // checkLoginStatus2(){
  //   this.amplifyService.authStateChange$
  //   .subscribe(authState => {
  //     const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
  //       // this.signedIn = authState.state === 'signedIn';
  //       if (this.isLoggedIn && !isLoggedIn) {
  //       // if (!authState.user) {
  //           this.user = null;
  //           this.router.navigate(['']);
  //       // } else {
  //       } else if (!this.isLoggedIn && isLoggedIn) {
          
  //           this.user = authState.user;
  //           //console.log('this.user.username', this.user.username, authState.user);
  //           //this.greeting = "Hello " + this.user.username;
  //           this.userData.login(this.user.username);
  //           this.session = authState.user.signInUserSession;
  //           //this.logInfoToConsole(authState.user.signInUserSession);
            
  //           // this.register();
           
  //           //setImmediate(() => this.createMember());

  //           this.router.navigateByUrl('/blog');
  //           //this.router.navigate(['members', 'blog1']);
  //       }
  //   });
  // }

  checkLoginStatus1() {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        //console.log('from app.component', authState.user);
        this.signedIn = authState.state === 'signedIn';

        if (!authState.user) {
          this.member = null;
        } else {
          this.member = authState.user;
          //this.greeting = "Hello0000000000 " + this.user.username;
          // this.userData.login(this.member.username);
          this.checkLoginStatus();

          // this.amplifyService.storage()
          //   .list('')
          //   .then(data => console.log('data from S3: ', data))
          //   .catch(err => console.log('error'))



          //this.router.navigateByUrl('/app/tabs/blog');
        }
      });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  register() {
    //console.log('registration called')
    this.appsyncService.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        console.log('register()', data['me']);
        if (data) { 
          console.log("me return data: ", data)
          this.me = data.me;
         }else{
          console.log("me does not return data!!")
         }
      });
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.amplifyService.auth().signOut()
      .then(() => {
        this.userData.logout().then(() => {
          return this.router.navigateByUrl('/app/tabs/blog');
        })
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

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
