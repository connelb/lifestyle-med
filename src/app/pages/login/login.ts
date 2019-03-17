import { Component, ViewEncapsulation } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AmplifyService }  from 'aws-amplify-angular';
import User from '../../types/user';
import Conversation from '../../types/conversation';
import AWSAppSyncClient from 'aws-appsync';

import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
import createUser from '../../graphql/mutations/createUser';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  signedIn;
  user;
  //greeting;

  username: string;
  session;
  client: AWSAppSyncClient<any>;
  //client:any;
  me: User;
  //conversation: Conversation;
  update: boolean;
  signInUserSession;

  constructor(
    public amplifyService: AmplifyService,
    public userData: UserData,
    public router: Router,
    private appsync: AppsyncService
  ) { 

    //this.amplifyService = amplifyService;

    this.amplifyService.authStateChange$
        .subscribe(authState => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
              console.log('what is authState????????', authState);
                this.user = authState.user;
                //this.greeting = "Hello " + this.user.username;
                this.userData.login(this.user.username);
                this.session = authState.user.signInUserSession;
                this.logInfoToConsole(authState.user.signInUserSession);
                
                this.register();
                setImmediate(() => this.createUser());

                this.router.navigateByUrl('/app/tabs/blog');
                //this.router.navigate(['members', 'blog1']);
            }
        });

  }

  //signInUserSession.idToken
  logInfoToConsole(session) {
    console.log(session);
    console.log(`ID Token: <${session.idToken.jwtToken}>`);
    console.log(`Access Token: <${session.accessToken.jwtToken}>`);
    console.log('Decoded ID Token:');
    console.log(JSON.stringify(session.idToken.payload, null, 2));
    console.log('Decoded Acess Token:');
    console.log(JSON.stringify(session.accessToken.payload, null, 2));
  }

  createUser() {
    const user: User = {
      username: this.session.idToken.payload['cognito:username'],
      id: this.session.idToken.payload['sub'],
      cognitoId: this.session.idToken.payload['sub'],
      registered: false,
      bio:'',
      image:''
    };
    console.log('creating user', user);
    
    this.appsync.hc().then(client => {
      //console.log('client?', client);
      client.mutate({
        mutation: createUser,
        variables: {username: user.username},

        optimisticResponse: () => ({
          createUser: {
            ...user,
            __typename: 'User'
          }
        }),

        update: (proxy, {data: { createUser: _user }}) => {
          // console.log('createUser update with:', _user);
          proxy.writeQuery({query: getMe, data: {me: {..._user}}});
        }
      }).catch(err => console.log('Error registering user', err));
    });
  }

  register() {
    this.appsync.hc().then(client => {
      
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({data}) => {
        // console.log('register user, fetch cache', data);
        if (data) { this.me = data.me; }
      });
    });
  }

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
