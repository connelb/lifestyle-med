import { Component, ViewEncapsulation } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AmplifyService }  from 'aws-amplify-angular';



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

  constructor(
    public amplifyService: AmplifyService,
    public userData: UserData,
    public router: Router
  ) { 

    //this.amplifyService = amplifyService;

    this.amplifyService.authStateChange$
        .subscribe(authState => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
                //this.greeting = "Hello " + this.user.username;
                this.userData.login(this.user.username);
                this.router.navigateByUrl('/app/tabs/blog');
            }
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
