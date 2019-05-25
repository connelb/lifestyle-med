import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { AmplifyService } from 'aws-amplify-angular';
import { Events } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage implements OnInit{
  showSkip = true;
  seen = false;
  repeat = false;
  isLoggedIn;
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
    //initially 'err- no current user' and sets 'hasLoggedIn' to false
    // or sets 'hasLoggedIn'to true
    Auth.currentSession()
    .then(data => {
      this.authState = data;
      this.isLoggedIn= this.authState.idToken.payload.email_verified;
      this.storage.set('hasLoggedIn',true);
    }).catch(err => {
      this.storage.set('hasLoggedIn',false);
      console.log("err:",err)
    });
  }

  ngOnInit() {
    this.storage.set('ion_did_tutorial',false).then(res => this.seen = res);
  }


  startApp() {
    this.storage.set('ion_did_tutorial',true).then(res => this.seen = res);

      if(this.isLoggedIn===false){
        this.router.navigateByUrl('/login');
      }else if (this.isLoggedIn===true){
        this.router.navigateByUrl('/home');
      }
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {

    this.storage.get("ion_did_tutorial").then(res => this.seen = res);
    this.storage.get('hasLoggedIn').then(res => this.isLoggedIn = res);

    this.storage.get("ion_repeat_tutorial").then(res => {
      if (res === false && this.isLoggedIn == true) {
        this.router.navigateByUrl('/home');
        }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
