import { Component, OnInit  } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PageScrollConfig } from 'ngx-page-scroll';

import AWSAppSyncClient from 'aws-appsync';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

import User from '../../types/user';
import Member from '../../types/member';
import Conversation from '../../types/conversation';

import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
import createUser from '../../graphql/mutations/createUser';

import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular/dist/src/providers/amplify.service';
import { APIService } from '../../API.service';


@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  username: string;
  session;
  client: AWSAppSyncClient<any>;
  //client:any;
  // me: User;
  me: Member;
  conversation: Conversation;
  update: boolean;
  user;

  constructor(
    private api: APIService,
    private swUpdate: SwUpdate,
    private appsync: AppsyncService,
    public amplifyService: AmplifyService
  ) {
    PageScrollConfig.defaultDuration = 400;
  }

  ngOnInit() {

    this.appsync.hc().then(client => {
      
      client.watchQuery({
        query: getMe,//getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({data}) => {
        console.log('register user, fetch cache', data);
        if (data) { this.me = data.me; }
      });
    });

    // this.amplifyService.authStateChange$
    //     .subscribe(authState => {
    //         //this.signedIn = authState.state === 'signedIn';
    //         if (!authState.user) {
    //             this.user = null;
    //         } else {
    //           //console.log('what is authState????????', authState);
    //             //this.user = authState.user;
    //             //this.greeting = "Hello " + this.user.username;
    //             //this.userData.login(this.user.username);
    //             this.session = authState.user.signInUserSession;
    //             this.logInfoToConsole(authState.user.signInUserSession);
    //             this.register();
    //             setImmediate(() => this.createUser());
    //         }
    //     });


    // this.register()
    // Auth.currentSession().then(session => {
    //   console.log('what is session in chat, can it be used everywhere??',session)
    // })
    // Auth.currentSession().then(session => {
    //   this.logInfoToConsole(session);
    //   this.session = session;
    //   this.register();
    //   setImmediate(() => this.createUser());
    // });

    // this.swUpdate.available.subscribe(event => {
    //   console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
    //   this.update = true;
    // });
  }

  // logInfoToConsole(session) {
  //   console.log(session);
  //   console.log(`ID Token: <${session.idToken.jwtToken}>`);
  //   console.log(`Access Token: <${session.accessToken.jwtToken}>`);
  //   console.log('Decoded ID Token:');
  //   console.log(JSON.stringify(session.idToken.payload, null, 2));
  //   console.log('Decoded Acess Token:');
  //   console.log(JSON.stringify(session.accessToken.payload, null, 2));
  // }

  // createUser() {
  //   const user: User = {
  //     username: this.session.idToken.payload['cognito:username'],
  //     id: this.session.idToken.payload['sub'],
  //     //cognitoId: this.session.idToken.payload['sub'],
  //     registered: false,
  //     bio:'',
  //     image:'',
  //     lastname:'',
  //     firstname:''
  //   };
  //   //console.log('creating user, does thsi wor??????', user);
    
  //   this.appsync.hc().then(client => {
  //     //console.log("this.session.idToken.payload['cognito:username']", user.username, this.session.idToken.payload['cognito:username']);
  //     client.mutate({
  //       mutation: this.api.CreateMember,//createUser,
  //       variables: {username: user.id},

  //       optimisticResponse: () => ({
  //         createUser: {
  //           ...user,
  //           __typename: 'User'
  //         }
  //       }),

  //       update: (proxy, {data: { createUser: _user }}) => {
  //         // console.log('createUser update with:', _user);
  //         proxy.writeQuery({query: getMe, data: {me: {..._user}}});
  //       }
  //     }).catch(err => console.log('Error registering user', err));
  //   });
  // }

  // register() {
  //   this.appsync.hc().then(client => {
      
  //     client.watchQuery({
  //       query: this.api.Me,//getMe,
  //       fetchPolicy: 'cache-only'
  //     }).subscribe(({data}) => {
  //       // console.log('register user, fetch cache', data);
  //       if (data) { this.me = data.me; }
  //     });
  //   });
  // }

  setNewConvo(convo) { this.conversation = convo; }

  checkForUpdate() {
    console.log('[ChatQL] checkForUpdate started');
    this.swUpdate.checkForUpdate()
    .then(() => { console.log('[ChatQL] checkForUpdate completed'); })
    .catch(err => { console.error(err); });
  }

  activateUpdate() {
    console.log('[ChatQL] activateUpdate started');
    this.swUpdate.activateUpdate()
    .then(() => {
      console.log('[ChatQL] activateUpdate completed');
      location.reload();
    }).catch(err => { console.error(err); });
    this.update = false;
  }
}

