import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Auth } from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';

import { AppsyncService } from '../../providers/appsync.service';

import { AmplifyService } from 'aws-amplify-angular';
import { SwUpdate } from '@angular/service-worker';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../post-popover/post-popover';

import { Storage } from 'aws-amplify'
import aws_exports from './../../../aws-exports';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'page-map',
  templateUrl: 'post.html',
  styleUrls: ['./post.scss']
})
export class PostPage implements AfterViewInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;

  dateValue = new Date().toISOString().slice(0, 10);

  session;

  // public myOptions: any = {bucket:aws_exports.aws_user_files_s3_bucket, level: 'public', path:'bananas'};

  client: AWSAppSyncClient<any>;
  //client: any;
  //me: User;
  //conversation: Conversation;
  //bucket:any = aws_exports.aws_user_files_s3_bucket
  update: boolean;
  // path: any = 'photos11';
  // options: any = 'public';


  list: Array<Object>;
  // _path: string;
  // _options: any = {};

  // @Input() set data(data: any) {
  //   if (!data.path) { return; }
  //   this._path = data.path;
  //   this._options = data.options;
  // }

  // @Input() set path(path: string) {
  //   this._path = path;
  // }

  // @Input() set options(options: any) {
  //   this._options = options;
  // }

  constructor(private appsync: AppsyncService,
    public toastController: ToastController,
    public popoverCtrl: PopoverController,
    public amplifyService: AmplifyService,
    private swUpdate: SwUpdate,
    public platform: Platform) { }

  async ngAfterViewInit() {

    const storageOptions = {
      bucket: aws_exports.aws_user_files_s3_bucket,
      level: 'private'
    };

    this.amplifyService.storage()
      .list('pics', storageOptions)
      .then(data => {
        this.list = data.map(item => {
          return { path: item.key };
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

  onImagePicked1(file) {
    let key = 'pics/' + `${file.name}`;
    this.amplifyService.storage().put(key, file,
      {
        'level': 'private',
        'contentType': file.type
      }
    )
      .then(result => console.log('uploaded: ', result))
      .catch(err => console.log('upload error: ', err));
  }

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
