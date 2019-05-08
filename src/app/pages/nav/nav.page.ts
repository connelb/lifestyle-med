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

  // constructor(
  //   private menu: MenuController,
  //   private platform: Platform,
  //   private router: Router,
  //   public storage: Storage,
  //   public amplifyService: AmplifyService,
  //   public events: Events
  // ) {

    isLoggedIn = false;

    constructor(private menu: MenuController, public storage: Storage, private amplifyService: AmplifyService, public router: Router) {
      this.amplifyService.authStateChange$.subscribe(authState => {
        const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
        if (this.isLoggedIn && !isLoggedIn) {
          router.navigate(['']);
        } else if (!this.isLoggedIn && isLoggedIn) {
          router.navigate(['/chat']);
        }
        this.isLoggedIn = isLoggedIn;
      });
    }
  

  //  }

  // ngOnInit() {
  //   // this.amplifyService.auth().currentSession().then(session => {
  //   //   this.loggedIn = true;
  //   //   this.storage.set('hasLoggedIn', true);
  //   //   this.storage.set('loggedIn', true);
  //   //   //this.logInfoToConsole(session);
  //   //   //this.session = session;
  //   //   //this.register();
  //   //   //setImmediate(() => this.createMember());
  //   // });
  // }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', true);
    this.router.navigateByUrl('/tutorial');
  }

  public signOut() {
    // this.storage.set('ion_did_tutorial', false);
    this.amplifyService.auth().signOut();
  }

  // logout() {     
  //   this.amplifyService.auth().signOut()
  //     .then(() => {
  //       this.loggedIn =false;
  //       this.storage.set('ion_did_tutorial', false);
  //       this.storage.set('hasLoggedIn', false);
  //       this.storage.set('loggedIn', false);
  //       this.events.publish('loggedIn', false);
  //       this.router.navigateByUrl('/home');
  //       // this.userData.logout().then(() => {
  //       //   return this.router.navigateByUrl('/app/tabs/blog');
  //       // })
  //     })
  //     .catch(err => {
  //       console.log('err: ', err)
  //     })
  // }

}
