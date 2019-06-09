import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Events, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { PopoverPage } from '../blog-popover/blog-popover';
// import isLoggedIn1 from './../../providers/user-data';


@Component({
  selector: 'blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  showBtn: boolean = false;
  deferredPrompt;
  // isLoggedIn = { signedIn: false };
  authState: any;
  tut: any;
  hasLoggedIn;
  signedIn;
  signedIn23;
  
  //authState = { signedIn: false };
  username;

  constructor(public popoverCtrl: PopoverController, public storage: Storage, public events: Events, public amplifyService: AmplifyService) {

    console.log("blog constructor called", );
    this.authState = { signedIn: false };

    this.events.subscribe('data:AuthState', async (data) => {
      this.signedIn = data.signedIn;
    })

    this.storage.get('hasLoggedIn').then(res => {
      // if (res === true) {
      this.hasLoggedIn = res
      // }
    })



    this.storage.get('username').then(res => {
      // if (res === true) {
      this.username = res
      // }
    })




    // this.amplifyService.authState()
    // .subscribe(authState => {
    //   console.log('authState ',authState );
    //   this.events.subscribe('data:AuthState', async (data) => {
    //     // this.isLoggedIn = data.signedIn;
    //     this.authState = data;
    //   })
    // })


    // this.authState = { signedIn: false };

    // this.amplifyService.authStateChange$
    //   .subscribe(authState => {
    //     this.authState.signedIn = authState.state === 'signedIn';
    //     this.events.publish('data:AuthState', this.authState);
    //   });

    // this.amplifyService.authStateChange$.subscribe(authState => {
    //   // this.user = authState.user;
    //   const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
    //   // if (this.isLoggedIn && !isLoggedIn) {
    //   //   router.navigate(['']);
    //   // } else if (!this.isLoggedIn && isLoggedIn) {
    //   //   router.navigateByUrl('/app/tabs/home');
    //   // }
    //   this.isLoggedIn = isLoggedIn;
    // });
  }

 

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  async isLoggedIn(){
    this.amplifyService.authStateChange$
    .subscribe(authState => this.authState = authState)
      // return authState
      // this.authState.signedIn = authState.state === 'signedIn';
      // this.events.publish('data:AuthState', this.authState);
    // });
    return this.authState
  }

  ngOnInit() {

    this.signedIn23 = this.isLoggedIn()
    // console.log('what is blog init called');
    // this.events.subscribe('data:AuthState', async (data) => {
    //   // this.isLoggedIn = data.signedIn;
    //   console.log('what is blog init events', data)
    //   this.authState = data;
    // })


    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.tut = true
      }
    })
    // this.authState = { signedIn: false };



  }



  // ionViewWillEnter(){
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     // Prevent Chrome 67 and earlier from automatically showing the prompt
  //     e.preventDefault();
  //     // Stash the event so it can be triggered later on the button event.
  //     this.deferredPrompt = e;

  //   // Update UI by showing a button to notify the user they can add to home screen
  //     this.showBtn = true;
  //   });

  //   //button click event to show the promt

  //   window.addEventListener('appinstalled', (event) => {
  //    alert('installed');
  //   });


  //   if (window.matchMedia('(display-mode: standalone)').matches) {
  //     alert('display-mode is standalone');
  //   }
  // }

  // add_to_home(e){
  //   debugger
  //   // hide our user interface that shows our button
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //     .then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         alert('User accepted the prompt');
  //       } else {
  //         alert('User dismissed the prompt');
  //       }
  //       this.deferredPrompt = null;
  //     });
  // };


}
