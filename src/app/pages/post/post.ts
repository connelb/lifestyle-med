import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';

import { Auth } from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';

import { AmplifyService } from 'aws-amplify-angular';
import { SwUpdate } from '@angular/service-worker';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../post-popover/post-popover';

import { Storage } from 'aws-amplify'

@Component({
  selector: 'page-map',
  templateUrl: 'post.html',
  styleUrls: ['./post.scss']
})
export class PostPage implements AfterViewInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;

  dateValue = new Date().toISOString().slice(0, 10);

  session;
  client: AWSAppSyncClient<any>;
  //client: any;
  //me: User;
  //conversation: Conversation;
  update: boolean;
  //path:any = 'https://s3.amazonaws.com/lifestylemed6a375832c546456d80452010981f5b6a';
  path:any = 'pics';
  options: any = { level: 'public' };
  list: Array<Object>;

  constructor(public popoverCtrl: PopoverController, public amplifyService: AmplifyService, private swUpdate: SwUpdate, public confData: ConferenceData, public platform: Platform) { }

  async ngAfterViewInit() {
    //Storage.configure({ level: 'private' });

    //Storage.get('pics/avatar.png').then(data => console.log('data?', data))

    Storage.list('pics')
      .then(data => console.log('images from S3: ', data))
      .catch(err => console.log('error'))

      this.amplifyService.storage()
      .list(this.path, this.options)
      .then(data => {
        this.list = data.map(item => {
          //return item;
          return { path: item.key };
        });
      })
      .catch(e => console.error(e));
    //this.amplifyService.storage().list

    // const googleMaps = await getGoogleMaps(
    //   'AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw'
    // );
    // this.confData.getMap().subscribe((mapData: any) => {
    //   const mapEle = this.mapElement.nativeElement;

    //   const map = new googleMaps.Map(mapEle, {
    //     center: mapData.find((d: any) => d.center),
    //     zoom: 16
    //   });

    //   mapData.forEach((markerData: any) => {
    //     const infoWindow = new googleMaps.InfoWindow({
    //       content: `<h5>${markerData.name}</h5>`
    //     });

    //     const marker = new googleMaps.Marker({
    //       position: markerData,
    //       map,
    //       title: markerData.name
    //     });

    //     marker.addListener('click', () => {
    //       infoWindow.open(map, marker);
    //     });
    //   });

    //   googleMaps.event.addListenerOnce(map, 'idle', () => {
    //     mapEle.classList.add('show-map');
    //   });
    // });
  }

  //updates date
  async updateMyDate(event) {
    this.dateValue = event.detail.value
  }

  async presentToast() {
    // this.modifiedDate();
    // this.sleepOnSubmit();

    // const toast = await this.toastController.create({
    //   message: 'Your hours slept have been saved.',
    //   duration: 2000
    // });
    // toast.present();

  }

  onImagePicked(file) {

    let key = `private/pics/${file.name}`;

    this.amplifyService.storage().put(key, file, {
      'level': 'private',
      'contentType': file.type
    })
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

// function getGoogleMaps(apiKey: string): Promise<any> {
//   const win = window as any;
//   const googleModule = win.google;
//   if (googleModule && googleModule.maps) {
//     return Promise.resolve(googleModule.maps);
//   }

//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     script.onload = () => {
//       const googleModule2 = win.google;
//       if (googleModule2 && googleModule2.maps) {
//         resolve(googleModule2.maps);
//       } else {
//         reject('google maps not available');
//       }
//     };
//   });
// }
