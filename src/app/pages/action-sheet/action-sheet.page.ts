import { Component} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage{

  constructor(public actionSheetController: ActionSheetController, public router: Router ) {
    
   }

  async sleep() {
    const actionSheet = await this.actionSheetController.create({
      header: "Sleep Habits",
      buttons: [{
        text: 'Record',
        icon: 'share',
        handler: () => {
          // console.log('Delete clicked');
          this.router.navigateByUrl('/sleep');
        }
      }, {
        text: 'History',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.router.navigateByUrl('/sleep-history');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async nutrition() {
    const actionSheet = await this.actionSheetController.create({
      header: "Nutrition",
      buttons: [{
        text: 'Water',
        icon: 'food',
        handler: () => {
          console.log('Water clicked');
          this.router.navigateByUrl('/app/tabs/water');
        }
      }, {
        text: 'Breakfast',
        icon: 'food',
        handler: () => {
          console.log('Breakfast clicked');
        }
      },
      {
        text: 'Lunch',
        icon: 'food',
        handler: () => {
          console.log('Lunch clicked');
        }
      },
      {
        text: 'Dinner',
        icon: 'food',
        handler: () => {
          console.log('Dinner clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
