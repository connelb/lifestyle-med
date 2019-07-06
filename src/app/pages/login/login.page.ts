import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ToastController, Events } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthGuard } from '../../providers/auth-guard.service'
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterContentInit {
  authState: any;
  // including AuthGuardService here so that it's available to listen to auth events
  authService: AuthGuard
  amplifyService: AmplifyService

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
      }
    ]
  };


  constructor(
    //private fb: FormBuilder,
    private router: Router,
    public toastController: ToastController,
    public events: Events,
    public guard: AuthGuard,
    public amplify: AmplifyService,
    public storage: Storage
  ) {
    this.authState = { loggedIn: false };
    //this.authService = guard;
    this.amplifyService = amplify;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
          this.authState.loggedIn = authState.state === 'signedIn';
          this.events.publish('data:AuthState', this.authState);
          this.storage.set('data:AuthState', this.authState);
          this.storage.set('hasLoggedIn',true);
          router.navigateByUrl('/home');
      });
  }

  ngAfterContentInit() {
    this.events.publish('data:AuthState', this.authState)
  }


}
