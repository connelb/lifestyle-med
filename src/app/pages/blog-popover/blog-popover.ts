import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

// import { App} from 'ionic-angular';

@Component({
  template: `
  <ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>

  <ion-card-content>
      <b>Welcome! </b>Select the
      <ion-icon name="menu"></ion-icon> icon on the upper top left of the screen. Sign up and you will receive a confirmation code via email. Apply the access code and then log in again to enable full access. 
  </ion-card-content>
</ion-card>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) { } //, private app: App


  support() {
    // this.app.getRootNavById[0].push('/support');

    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}