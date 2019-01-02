import { Component } from '@angular/core';

import { PopoverController} from '@ionic/angular';

// import { App} from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://google.com')">
        <ion-label>Facebook</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://google.com')">
        <ion-label>LinkedIn</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {} //, private app: App


  support() {
    // this.app.getRootNavById[0].push('/support');
  
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}