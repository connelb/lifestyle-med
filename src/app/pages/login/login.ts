import { Component, ViewEncapsulation, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AmplifyService }  from 'aws-amplify-angular';
import User from '../../types/user';
import Member from '../../types/member';
import Conversation from '../../types/conversation';
import AWSAppSyncClient from 'aws-appsync';

import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
// import createUser from '../../graphql/mutations/createUser';
import createMember from '../../graphql/mutations/createMember';
import {APIService} from '../../API.service';
import gql from 'graphql-tag';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  isLoggedIn = false;
  authState: any;
  //login: UserOptions = { username: '', password: '' };
  submitted = false;
  signedIn;
  user;
  member;
  //greeting;

  username: string;
  session;
  client: AWSAppSyncClient<any>;
  //client:any;
  me: Member;
  //conversation: Conversation;
  update: boolean;
  signInUserSession;

  loggedIn = false;
  userCreated: boolean;
  // signedIn;
  greeting;
  // session;
  // client: AWSAppSyncClient<any>;
  // me: Member;
  
  // rates$: Observable<any[]>;
  // loading$: Observable<boolean>;
  // errors$: Observable<any>;
  // member = '';
  no_member;
  loading: boolean;
  currentUser: any;

  signUpConfig = {
    header: 'Sign up to get access code via email',
    defaultCountryCode: '1',
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 3,
        type: 'email',
      },
      // {
      //   label: 'Name',
      //   key: 'name',
      //   required: true,
      //   displayOrder: 4,
      //   type: 'string',
      // },
      // {
      //   label: 'Family name',
      //   key: 'family_name',
      //   required: true,
      //   displayOrder: 5,
      //   type: 'string',
      // },
      // {
      //   label: 'Phone number',
      //   key: 'phone_number',
      //   required: false,
      //   displayOrder: 4,
      //   type: 'string',
      // }
    ]
  };

  constructor(
    public events: Events,
    public storage:Storage,
    private api: APIService, 
    public amplifyService: AmplifyService,
    public userData: UserData,
    public router: Router,
    private appsyncService: AppsyncService
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);
      });

 
  }


//   this.amplifyService.authStateChange$.subscribe(authState => {
//     const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
//     if (this.isLoggedIn && !isLoggedIn) {
//       router.navigate(['']);
//     } else if (!this.isLoggedIn && isLoggedIn) {
//       router.navigate(['/chat']);
//     }
//     this.isLoggedIn = isLoggedIn;
// });

  ngOnInit() {

    // this.amplifyService.auth().currentSession().then(session => {
    //   this.storage.set('hasLoggedIn', true)
    //   this.userCreated = true;
    //   this.logInfoToConsole(session);
    //   this.session = session;
    //   this.register();
    //   setImmediate(() => this.createMember());
    // });

    // this.checkLoginStatus1();
    // this.listenForLoginEvents();

    this.amplifyService.authStateChange$
    .subscribe(authState => {
      console.log('authState ',authState );
      const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
        // this.signedIn = authState.state === 'signedIn';
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);

        if (this.isLoggedIn && !isLoggedIn) {
        //if (!authState.user) {
            this.user = null;
            this.router.navigate(['/blog']);
        //} 
        } else if (!this.isLoggedIn && isLoggedIn) {
          
            this.user = authState.user;
            this.events.publish('data:AuthState', this.authState);
            //console.log('this.user.username', this.user.username, authState.user);
            //this.greeting = "Hello " + this.user.username;
            this.userData.login(this.user.username);
            this.session = authState.user.signInUserSession;
            //this.logInfoToConsole(authState.user.signInUserSession);
            
            // this.register();
           
            //setImmediate(() => this.createMember());

            this.router.navigateByUrl('/home');
            //this.router.navigate(['members', 'blog1']);
        }
    });

  }

  

//   createMember() {
//  this.appsync.hc().then(client => {
//        client.watchQuery({
//         query: getMe,
//         fetchPolicy: 'cache-and-network'
//       }).subscribe(({data}) => {
//         console.log('register member, fetch cache', data);
//         if (data) { 
//           this.me = data.me;
//         }
//       });

//       const member = {
//         id: this.session.idToken.payload['sub'],
//         username: this.session.idToken.payload['cognito:username'],
//         firstname:this.me.firstname,
//         lastname:this.me.lastname,
//         registered: false,
//         bio:this.me.bio,
//         image:this.me.image,
//       };
      //console.log('user.cognitoId?', user.cognitoId);

      //async onImageUploaded(e) {await this.api.CreateMember(user)};

      // input CreateMemberInput {
      //   id: ID!
      //   username: String
      //   firstname: String
      //   lastname: String
      //   registered: Boolean
      //   bio: String
      //   image: String
      // }

//       bio: ""
// firstname: ""
// id: "a058b829-6b29-4063-b59b-e7afc81ca481"
// image: ""
// lastname: ""
// registered: false
// username: "lynette"

  //     client.mutate({
  //       mutation: createMember,
  //       variables: { id: member.id },
  //       // {cognitoId:'4e13fa4d-5d51-4c18-834b-406ba731054b'}
  //       //user
  //       //  {
  //       //   cognitoId: user.cognitoId,
  //       //   username: user.username,
  //       //   firstname:user.firstname,
  //       //   lastname:user.lastname,
  //       //   registered:user.registered,
  //       //   id:user.id,
  //       //   bio:user.bio,
  //       //   image:user.image},

  //       //   await this.api[this.getType()](user);

  //       optimisticResponse: () => ({
  //         createMember: {
  //           ...member,
  //           __typename: 'Member'
  //         }
  //       }),

  //       update: (proxy, {data: { createMember: _member }}) => {
  //         console.log('createMember update with:', _member);
  //         proxy.writeQuery({query: getMe, data: {me: {..._member}}});
  //       }
  //     }).catch(err => console.log('Error registering user', err));
  //   });
  // }

  // register() {
  //   this.appsync.hc().then(client => {
      
  //     client.watchQuery({
  //       query: getMe,
  //       fetchPolicy: 'cache-only'
  //     }).subscribe(({data}) => {
  //       console.log('register member, fetch cache', data);
  //       if (data) { this.me = data.me; }
  //     });
  //   });
  // }

  // onLogin(form: NgForm) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.userData.login(this.login.username);
  //     this.router.navigateByUrl('/app/tabs/schedule');
  //   }
  // }

  // onSignup() {
  //   this.router.navigateByUrl('/signup');
  // }


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
    console.log('creating new member', member);
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



          this.router.navigateByUrl('/home');
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
}
