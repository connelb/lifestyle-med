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



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
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

  constructor(
    private api: APIService, 
    public amplifyService: AmplifyService,
    public userData: UserData,
    public router: Router,
    private appsync: AppsyncService
  ) {}

  ngOnInit() {
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
            this.user = null;
        } else {
          
            this.user = authState.user;
            //console.log('this.user.username', this.user.username, authState.user);
            //this.greeting = "Hello " + this.user.username;
            this.userData.login(this.user.username);
            this.session = authState.user.signInUserSession;
            //this.logInfoToConsole(authState.user.signInUserSession);
            
            // this.register();
           
            //setImmediate(() => this.createMember());

            this.router.navigateByUrl('/app/tabs/blog');
            //this.router.navigate(['members', 'blog1']);
        }
    });
  }

  

  //signInUserSession.idToken
  // logInfoToConsole(session) {
  //   console.log('session:',session);
  //   // console.log(`ID Token: <${session.idToken.jwtToken}>`);
  //   // console.log(`Access Token: <${session.accessToken.jwtToken}>`);
  //   // console.log('Decoded ID Token:');
  //   // console.log( JSON.stringify(session.idToken.payload, null, 2));
  //   // console.log('Decoded Acess Token:');
  //   // console.log(JSON.stringify(session.accessToken.payload, null, 2));
  //   console.log('cognitoId??????', session.idToken.payload['sub'])
  // }

  // bio: ""
  // cognitoId: "4e13fa4d-5d51-4c18-834b-406ba731054b"
  // firstname: ""
  // id: "4e13fa4d-5d51-4c18-834b-406ba731054b"
  // image: ""
  // lastname: ""
  // registered: false
  // username: "kevin"

  // createUser(input:{
  //   cognitoId: $cognitoId
  // }) {
  //   __typename
  //   cognitoId
  //   username
  //   registered
  //   id
  //   bio
  //   image

  createMember() {
 
    //console.log('is member complete???', member);
    
    this.appsync.hc().then(client => {
      

      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-and-network'
      }).subscribe(({data}) => {
        console.log('register member, fetch cache', data);
        if (data) { 
          this.me = data.me;
        }
      });

      const member = {
        id: this.session.idToken.payload['sub'],
        username: this.session.idToken.payload['cognito:username'],
        firstname:this.me.firstname,
        lastname:this.me.lastname,
        registered: false,
        bio:this.me.bio,
        image:this.me.image,
      };
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

      client.mutate({
        mutation: createMember,
        variables: { id: member.id },
        // {cognitoId:'4e13fa4d-5d51-4c18-834b-406ba731054b'}
        //user
        //  {
        //   cognitoId: user.cognitoId,
        //   username: user.username,
        //   firstname:user.firstname,
        //   lastname:user.lastname,
        //   registered:user.registered,
        //   id:user.id,
        //   bio:user.bio,
        //   image:user.image},

        //   await this.api[this.getType()](user);

        optimisticResponse: () => ({
          createMember: {
            ...member,
            __typename: 'Member'
          }
        }),

        update: (proxy, {data: { createMember: _member }}) => {
          console.log('createMember update with:', _member);
          proxy.writeQuery({query: getMe, data: {me: {..._member}}});
        }
      }).catch(err => console.log('Error registering user', err));
    });
  }

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
}
