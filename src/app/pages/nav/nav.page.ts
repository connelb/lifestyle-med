import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage {
  // loggedIn = false;
  appPages = [
    {
      title: 'Journal',
      url: '/app/tabs/action-sheet',
      icon: 'book'
    },
    {
      title: 'Chat',
      url: '/app/tabs/chat',
      icon: 'contacts'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];

  isLoggedIn = false;
  user: string;
  status: string;


  constructor(public events: Events, private menu: MenuController, public storage: Storage, private amplifyService: AmplifyService, public router: Router) {
    this.storage.set("ion_repeat_tutorial", false);
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.user = authState.user;
      this.status = authState.state;
      const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
      if (authState.state === 'confirmSignIn') {
        console.log('confirmSignIn', authState.state)
        //router.navigate(['/confirm']);
      } else if (authState.state === 'signUp') {
        console.log('signUp', authState.state)
        //router.navigateByUrl('/home');
      } else if (authState.state === 'signedIn') {
        console.log('signedIn', authState.state)
        //router.navigateByUrl('/home');
      } else if (authState.state === 'confirmSignUp') {
        console.log('confirmSignUp', authState.state)
        //router.navigateByUrl('/home');
      }

      this.isLoggedIn = isLoggedIn;
    });
  }

  // ‘confirmSignIn’
  // ‘confirmSignUp’
  // ‘forgotPassword’
  // ‘requireNewPassword’
  // ‘signedIn’
  // ‘signIn’
  // ‘signUp’ 

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.storage.set('ion_repeat_tutorial', true);
    this.router.navigateByUrl('/tutorial');
  }

  public signOut() {
    // this.storage.set('ion_did_tutorial', false);
    //this.storage.set('hasLoggedIn', false);

    this.amplifyService.auth().signOut()
      .then(() => {
        this.isLoggedIn = false;
        this.storage.set('ion_repeat_tutorial', false);
        this.storage.set('ion_did_tutorial', false);
        this.storage.set('hasLoggedIn', false);
        this.storage.set('loggedIn', false);
        this.events.publish('loggedIn', false);
        this.router.navigateByUrl('/home');
        // this.userData.logout().then(() => {
        //   return this.router.navigateByUrl('/app/tabs/blog');
        // })
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

}
