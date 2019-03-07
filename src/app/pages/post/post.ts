import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
//import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Auth } from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';

import { AmplifyService } from 'aws-amplify-angular';
import { SwUpdate } from '@angular/service-worker';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../post-popover/post-popover';

import { Storage } from 'aws-amplify'
import aws_exports from './../../../aws-exports';

@Component({
  selector: 'page-map',
  templateUrl: 'post.html',
  styleUrls: ['./post.scss']
})
export class PostPage implements AfterViewInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;

  dateValue = new Date().toISOString().slice(0, 10);

  session;

  public myOptions: any = {level: 'public'};

  client: AWSAppSyncClient<any>;
  //client: any;
  //me: User;
  //conversation: Conversation;
  //bucket:any = aws_exports.aws_user_files_s3_bucket
  update: boolean;
  path: any = 'photos';
  options: any = 'public';
  list: Array<Object>;

  constructor(public toastController: ToastController, public popoverCtrl: PopoverController, public amplifyService: AmplifyService, private swUpdate: SwUpdate, public platform: Platform) { }

  async ngAfterViewInit() {
    const storageOptions = {
      bucket: aws_exports.aws_user_files_s3_bucket,
      level: 'public'
    };

    this.amplifyService.storage()
      .list('photos', storageOptions)
      .then(data => {
        this.list = data.map(item => {
          return item.key;
        });
      })
      .catch(e => console.error(e));
  }

  //updates date
  async updateMyDate(event) {
    this.dateValue = event.detail.value
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your photo has been saved.',
      duration: 2000
    });
    toast.present();

  }

  onImageSelected($event) {
    console.log('onImageSelect', event)

  }

//   Storage.put('example.png', file, {
//     contentType: 'image/png'
// })

  onImagePicked1(file) {
    let key = `photos/${file.name}`; //photos/2014-06-29 15.53.02-1.jpg 
    console.log('what is file?', key, file);
    this.amplifyService.storage().put(`${file.name}`,this.myOptions, {
      'level': 'public',
      'contentType': file.type,
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      }
    })
      .then(result => console.log('uploaded: ', result))
      .catch(err => console.log('upload error: ', err));
  }

  // onImagePicked(file) {

  //   let key = `photos/${file.name}`;

  //   this.amplifyService.storage().put('photos', `${file.name}`, {
  //     'level': 'public',
  //     'contentType': file.type,
  //     progressCallback(progress) {
  //       console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
  //     }
  //   })
  //     .then(result => {
  //       // console.log('uploaded: what is thsi????????????', key, file, result);
  //       this.presentToast();
  //     })
  //     .catch(err => console.log('upload error: ', err));

  // }

  onImageLoaded(event) {
    console.log('event', event)
  }

  onAlbumImageSelected(event) {
    console.log('what is the album event??', event);
    window.open(event, '_blank');
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

}
