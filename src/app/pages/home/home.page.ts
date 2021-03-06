import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showBtn: boolean = false;
  deferredPrompt;
  update: boolean;

  constructor(public swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    swUpdate.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
   }

  ngOnInit() {
    this.swUpdate.available.subscribe(event => {
      console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
      this.update = true;
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }

  checkForUpdate() {
    // console.log('[ChatQL] checkForUpdate started');
    this.swUpdate.checkForUpdate()
    .then(() => { console.log('[ChatQL] checkForUpdate completed'); })
    .catch(err => { console.error(err); });
  }

  activateUpdate() {
    // console.log('[ChatQL] activateUpdate started');
    this.swUpdate.activateUpdate()
    .then(() => {
      // console.log('[ChatQL] activateUpdate completed');
      location.reload();
    }).catch(err => { console.error(err); });
    this.update = false;
  }

  ionViewWillEnter(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
       
    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });
     
    //button click event to show the promt
             
    window.addEventListener('appinstalled', (event) => {
     alert('installed');
    });
     
     
    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }
 
  add_to_home(e){
    debugger
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  };
 

}



// import { Component, AfterContentInit } from '@angular/core';
// import { Events } from '@ionic/angular';
// import { AuthGuardService } from '../../services/auth-route-guard'
// import { AmplifyService }  from 'aws-amplify-angular';


// @Component({
//   selector: 'app-page-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss']
// })
// export class HomePage implements AfterContentInit{

//   authState: any;
//   // including AuthGuardService here so that it's available to listen to auth events
//   authService: AuthGuardService
//   amplifyService: AmplifyService

//   constructor(
//     public events: Events,
//     public guard: AuthGuardService,
//     public amplify: AmplifyService
//   ) {
//     this.authState = {loggedIn: false};
//     this.authService = guard;
//     this.amplifyService = amplify;
//     this.amplifyService.authStateChange$
//     .subscribe(authState => {
//       this.authState.loggedIn = authState.state === 'signedIn';
//       this.events.publish('data:AuthState', this.authState)
//     });
//   }

//   ngAfterContentInit(){
//     this.events.publish('data:AuthState', this.authState)
//   }
// }