import { Component, Input, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
// import { PageScrollConfig } from 'ngx-page-scroll';

import AWSAppSyncClient from 'aws-appsync';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

import User from './types/user';
import Member from '../../types/member';
import Conversation from '../../types/conversation';

import { AppsyncService } from '../../providers/appsync.service';
import getMe from './graphql/queries/getMe';
import createUser from './graphql/mutations/createUser';

import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular/dist/src/providers/amplify.service';
import { APIService } from '../../API.service';
import gql from 'graphql-tag';
import createMember from '../../graphql/mutations/createMember';
import { ModalController, Events } from '@ionic/angular';
import { ChatModal } from './chat.modal';
import getAllMembers from './graphql/queries/getAllMembers';
import { constants, addConversation, addUser } from './chat-helper';
import subscribeToNewMembers from './graphql/subscriptions/subscribeToNewMembers';
import { getAllMembersQuery as UsersQuery } from './graphql/operation-result-types';
import * as _ from 'lodash';


@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  username: string;
  session;
  client: AWSAppSyncClient<any>;
  me: Member;
  conversation: Conversation;
  update: boolean;

  users: Member[] = [];
  //modal: any;
  _user;
  no_user = false;

  amplifyService: AmplifyService;
  modal: any;
  data: any;
  user: any;
  user1: any;
  //itemList: ToDoList|any;
  signedIn: boolean;


  constructor(
    public modalController: ModalController,
    private swUpdate: SwUpdate,
    private appsync: AppsyncService,
    amplify: AmplifyService,
    public events: Events
  ) {
    // PageScrollConfig.defaultDuration = 400;
    this.amplifyService = amplify;
    //console.log('this.amplifyService.auth().currentUserInfo():',this.amplifyService.auth().currentUserInfo())

 
  }

  ngOnInit() {
    this.events.subscribe('data:AuthState', async (data) => {
      // console.log('what is event.subscribe??',data)
      if (data.loggedIn){
        this.user1 = await this.amplifyService.auth().currentUserInfo();
         console.log('when event is triggered?....this.user in the chat page constructor',this.user1)
        // this.getItems();
      } else {
        console.log('nothing here!')
        // this.itemList = [];
        // this.user = null;
      }
    })

    Auth.currentSession().then(session => {
      this.logInfoToConsole(session);
      this.session = session;
      this.register();
      //this.getAllUsers();
      setImmediate(() => this.createUser());
    });

    // this.swUpdate.available.subscribe(event => {
    //   console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
    //   this.update = true;
    // });
  }


  logInfoToConsole(session) {
    // console.log(session);
    // console.log(`ID Token: <${session.idToken.jwtToken}>`);
    // console.log(`Access Token: <${session.accessToken.jwtToken}>`);
    // console.log('Decoded ID Token:');
    // console.log(JSON.stringify(session.idToken.payload, null, 2));
    // console.log('Decoded Acess Token:');
    // console.log(JSON.stringify(session.accessToken.payload, null, 2));
  }

  createUser() {
    //if (this.me) {

      const user: Member = {
        username: this.session.idToken.payload['cognito:username'],
        id: this.session.idToken.payload['sub'],
        //cognitoId: this.session.idToken.payload['sub'],
        registered: true,
        bio: 'Identify your goals...',
        image: 'Add a profile image...',
        lastname: 'Add your last name...',
        firstname: 'Add your first name...'
      };
      //console.log('creating user using the createUser() in the chat.page ', user);
      this.appsync.hc().then(client => {
        //console.log('client???', client, user, this.user1);
        client.mutate({
          mutation: createMember,
          variables: user,//{username: user.username},

          optimisticResponse: () => ({
            createMember: {
              ...user,
              __typename: 'Member'
            }
          }),

          update: (proxy, { data: { createMember: _user } }) => {
            //console.log('createUser update with _user:', _user);
            proxy.writeQuery({ query: getMe, data: { me: { ..._user } } });
          }
        }).catch(err => console.log('Error registering user', err));
      });
    //}
  }


  register() {
    this.appsync.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        //console.log('register user, fetch cache  does this work??', data);
        if (data) {
          this.me = data.me;
          this._user = data.me;
          
        }
      });
      this.createUser();
    });
  }

  setNewConvo(convo) { this.conversation = convo; }













  // ngOnInit() {
  //   this.appsync.hc().then(client => {

  //     client.watchQuery({
  //       query: getMe, //gql(this.api.Me),//getMe,//getMe,
  //       fetchPolicy: 'cache-and-network'
  //     }).subscribe(({data}) => {
  //       // console.log('register user, fetch cache', data);
  //       if (data) { this.me = data.me; }
  //     });
  //   });

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
  // }

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

  // setNewConvo(convo) { this.conversation = convo; }


}

