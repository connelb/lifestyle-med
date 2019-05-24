import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { AmplifyService } from 'aws-amplify-angular';
import { Events } from '@ionic/angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;
  seen = false;
  isLoggedIn = false;
  authState: any;
  user;

  @ViewChild('slides') slides: IonSlides;

  constructor(
    private amplifyService: AmplifyService,
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public events: Events,
  ) {
    console.log('step 1')

  }


  startApp() {
    Auth.currentSession()
    .then(data => {
      this.authState = data;
    }).catch(err => console.log("err:",err));
    console.log('step 2')
    console.log('this.authState',this.authState);
    
    this.router
    .navigateByUrl('/login')
    .then(() => this.storage.set('ion_did_tutorial', true));

    // Auth.currentSession()
    // .then(data => {
    //   this.callLogIn();
    //   this.authState = data;
    //   console.log('this.authState',this.authState);
      
      // if(this.authState == 'No current user'){
        // this.router
        //     .navigateByUrl('/login')
        //     .then(() => this.storage.set('ion_did_tutorial', true));

      // }else{
      //   this.router.navigateByUrl('/home');



      // }
  
  //   }
  // )
  //   .catch(err => console.log(err));
// console.log('startApp() called??')
// this.callLogIn();
//     this.amplifyService.authStateChange$
//     .subscribe(authState => {
//       console.log('authState in tutorial???? ',authState );
//       const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
//         // this.signedIn = authState.state === 'signedIn';
//         this.authState.signedIn = authState.state === 'signedIn';
//         this.events.publish('data:AuthState', this.authState);

//         if (!isLoggedIn) {
//         //if (!authState.user) {
//             this.user = null;
//             // this.router.navigate(['/blog']);
//             this.router
//             .navigateByUrl('/login')
//             .then(() => this.storage.set('ion_did_tutorial', true));
//         //} 
//         } else if (!this.isLoggedIn && isLoggedIn) {
          
//             this.user = authState.user;
//             this.events.publish('data:AuthState', this.authState);
//             //console.log('this.user.username', this.user.username, authState.user);
//             //this.greeting = "Hello " + this.user.username;
//             //this.userData.login(this.user.username);
//             //this.session = authState.user.signInUserSession;
//             //this.logInfoToConsole(authState.user.signInUserSession);
            
//             // this.register();
           
//             //setImmediate(() => this.createMember());

//             this.router.navigateByUrl('/home');
//             //this.router.navigate(['members', 'blog1']);
            
//         }
    // });



   
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {

    this.storage.get('ion_did_tutorial').then(res => {
      this.seen = res;
      // if (res === true) {
      //   this.router.navigateByUrl('/blog');
      // }
    });

    // this.amplifyService.authStateChange$
    // .subscribe(authState => {
    //   console.log('authState ',authState );
    //   const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
    //     // this.signedIn = authState.state === 'signedIn';
    //     this.authState.signedIn = authState.state === 'signedIn';
    //     this.events.publish('data:AuthState', this.authState);

    //     if (!isLoggedIn && !this.seen) {
    //       console.log('!isLoggedIn && !this.seen not logged in, not seen, goes to login',!isLoggedIn,!this.seen );
    //     //if (!authState.user) {
    //         // this.user = null;
    //         // this.router.navigate(['/blog']);
    //         this.router
    //         .navigateByUrl('/login')
    //         .then(() => this.storage.set('ion_did_tutorial', true));
    //     //} 
    //     } else if (this.isLoggedIn && this.seen) {
    //       console.log('or else isLoggedIn && this.seen , logged in, seen, goes to home',!isLoggedIn,this.seen );
          
    //         this.user = authState.user;
    //         this.events.publish('data:AuthState', this.authState);
    //         //console.log('this.user.username', this.user.username, authState.user);
    //         //this.greeting = "Hello " + this.user.username;
    //         //this.userData.login(this.user.username);
    //         //this.session = authState.user.signInUserSession;
    //         //this.logInfoToConsole(authState.user.signInUserSession);
            
    //         // this.register();
           
    //         //setImmediate(() => this.createMember());

    //         this.router.navigateByUrl('/home');
    //         //this.router.navigate(['members', 'blog1']);
            
    //     }
    // });





    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
