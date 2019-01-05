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
import { User } from './interfaces/user'

import { SwUpdate } from '@angular/service-worker';
import { AppsyncService } from './providers/appsync.service';
import { SubmitRepositoryService } from './providers/submit-repository.service';
import getMe from './graphql/queries/getMe';
import createUser from './graphql/mutations/createUser';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, Subscription } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import getAllUsers from './graphql/queries/getAllUsers';
import queryListAllMessages from './graphql/queries/queryListAllMessages';

const CurrentUserForProfile = gql`
query CurrentUserForProfile {
  currentUser {
    login
    avatar_url
  }
}
`;


const CurrentUserForProfile1 = gql`
query getAllUsers {
  allUser {
    __typename
    id
    cognitoId
    username
  }
}`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})






export class AppComponent implements OnInit, OnDestroy {
  appPages = [
    {
      title: 'Measure',
      url: '/app/tabs/measure',
      icon: 'calendar'
    },
    {
      title: 'action-sheet',
      url: '/action-sheet',
      icon: 'contacts'
    },
    {
      title: 'Post',
      url: '/app/tabs/post',
      icon: 'contacts'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  user;
  signedIn;
  greeting;
  session;
  client: AWSAppSyncClient<any>;
  //client: any;
  me: User;
  //conversation: Conversation;
  update: boolean;
  rates$: Observable<any[]>;
  loading$: Observable<boolean>;
  errors$: Observable<any>;
  users;
  no_user;

  loading: boolean;
  currentUser: any;

  mutation = gql`
      mutation submitRepository($repoFullName: String!) {
        submitRepository(repoFullName: $repoFullName) {
          createdAt
        }
  }`;

  private querySubscription: Subscription;




  constructor(
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


  // newRepository() {
  //   this.submitRepoService.submitRepository()//'apollographql/apollo-client'
  //     .subscribe(({ data }) => {
  //       console.log('got data', data);
  //     }, (error) => {
  //       console.log('there was an error sending the query', error);
  //     });
  // }

  // temp = {
  //   chest: "",
  //   createdAt: "2018-12-29T12:53:06.605Z_745568ed-3161-45c3-9479-ef3a286ca314",
  //   hips: "",
  //   leftArm: "",
  //   leftThigh: "",
  //   measurementId: "b32772a1-dd95-44c8-aabf-5cfa7e677731",
  //   rightArm: "",
  //   rightThigh: "",
  //   waist: "78",
  //   weight: "",
  //   __typename: "Measurement"
  // }

  // submitRepository() {//repoFullName: string
  //   return this.apollo.mutate({
  //     mutation: temp,
  //     variables: {}//repoFullName: repoFullName
  //   });
  // }



  ngOnDestroy() {
    // this.querySubscription.unsubscribe();
  }

  ngOnInit() {

    // this.amplifyService.auth().currentSession().then(session => {
    //   this.logInfoToConsole(session);
    //   this.session = session;
    //   // this.register();
    //   // this.register1();
    //   this.register2();

    //   setImmediate(() => this.createUser());
    // });

    // this.submitRepository().subscribe(d => console.log('kkjjk', d))



    // this.appsyncService.hc().then(client => {
    //   const observable = client.query({
    //     query: gql`
    //     query getAllUsers {
    //       allUser {
    //         __typename
    //         id
    //         cognitoId
    //         username
    //       }
    //     }`,
    //     fetchPolicy: 'cache-and-network'
    //   });

    //       observable.subscribe(({data}) => {
    //         if (!data) {
    //           return console.log('getAllUsers - no data');
    //         }
    //         //this.users = _(data.allUser).sortBy('username').reject(['id', this._user.id]).value();
    //         console.log('getAllUsers - Got data', data);
    //         //this.no_user = (this.users.length === 0);
    // });
    //});
    //}
    // const source$ = this.apollo.query({
    //   query: gql`
    //   {
    //     createMessage(content: "First!" conversationId: "myNewId" createdAt: "This afternoon" id: "messageOneId") {
    //       content
    //       createdAt
    //     }
    //   }
    //   `
    // }).pipe(shareReplay(1));

    // this.rates$ = source$.pipe(map(result => result && result.data['createMessage']));//
    // this.loading$ = source$.pipe(map(result => result.loading));
    // this.errors$ = source$.pipe(map(result => result.errors));
    //}

    //this.amplifyService = amplifyService;
    this.checkLoginStatus1();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(event => {
      console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
      this.update = true;
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  createUser() {
    const user: User = {
      username: this.session.idToken.payload['cognito:username'],
      id: this.session.idToken.payload['sub'],
      cognitoId: this.session.idToken.payload['sub'],
      registered: false
    };
    console.log('creating user', user);
    this.appsyncService.hc().then(client => {
      client.mutate({
        mutation: createUser,
        variables: { username: user.username },

        optimisticResponse: () => ({
          createUser: {
            ...user,
            __typename: 'User'
          }
        }),

        update: (proxy, { data: { createUser: _user } }) => {
          // console.log('createUser update with:', _user);
          proxy.writeQuery({ query: getMe, data: { me: { ..._user } } });
        }
      }).catch(err => console.log('Error registering user', err));
    });
  }

  logInfoToConsole(session) {
    console.log(session);
    console.log(`ID Token: <${session.idToken.jwtToken}>`);
    console.log(`Access Token: <${session.accessToken.jwtToken}>`);
    console.log('Decoded ID Token:');
    console.log(JSON.stringify(session.idToken.payload, null, 2));
    console.log('Decoded Acess Token:');
    console.log(JSON.stringify(session.accessToken.payload, null, 2));
  }

  checkLoginStatus1() {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        //console.log('from app.component', authState.user);
        this.signedIn = authState.state === 'signedIn';

        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          //this.greeting = "Hello0000000000 " + this.user.username;
          this.userData.login(this.user.username);
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

  updateUser() {
    //this.userData.HAS_LOGGED_IN
  }

  register1() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: getAllUsers
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.currentUser = data.me;
        console.log('reg1', data)
      });
  }

  register2() {
    this.appsyncService.hc().then(client => {
      client.watchQuery({
        query: queryListAllMessages,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        console.log('queryListAllMessages', data);
        //if (data) { this.me = data.me; }
      });
    });

    // this.apollo.watchQuery<any>({
    //   query: queryListAllMessages,
    // })
    //   .valueChanges
    //   .pipe(
    //     map(result => result)
    //   ).subscribe(res=>console.log(res))

  }

  register() {
    this.appsyncService.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        console.log('reg1', data);
        if (data) { this.me = data.me; }
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

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
