import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

//import { Component, OnInit, Input } from '@angular/core';
import { AppsyncService } from '../../providers/appsync.service';
import { v4 as uuid } from 'uuid';
// import {  } from '../../graphql.1/mutations';//createMeasurement

import getMeasurements from '../../graphql.1/queries/getMeasurements';
import createMeasurement from '../../graphql.1/mutations/createMeasurement';
import createWorkout from '../../graphql.1/mutations/createWorkout';
//import { unshiftMessage, constants } from '../chat-helper';
//import Measurement from '../types/measurement';
import {Measurement} from '../../interfaces/measurement'
import { Analytics } from 'aws-amplify';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppMaterialModule } from '../../app-material/app-material.module';
import getMe from '../../graphql.1/queries/getMe';
import { Auth } from 'aws-amplify';
import User from '../../types/user';

import gql from 'graphql-tag';


@Component({
  selector: 'page-measure',
  templateUrl: 'measure.html',
  styleUrls: ['./measure.scss'],
})
export class MeasurePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList') scheduleList: IonList;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  measurementFormGroup: FormGroup;
  workoutFormGroup: FormGroup;
  //titleAlert: string = 'This field is required';
  measurementPost: any = '';
  workoutPost: any = '';
  me:User;

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    private fb: FormBuilder, private appsync: AppsyncService
  ) { }

  ngOnInit() {
    // this.app.setTitle('Schedule');
    //this.updateSchedule();
    this.createForm();
    this.createForm1();
    this.register();
  }

  register() {
    this.appsync.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({data}) => {
        console.log('register user, fetch cache', data);
        if (data) { this.me = data.me; }
      });
    });
  }




  createForm() {
    this.measurementFormGroup = this.fb.group({
      'chest': [''],
      'hips': [''],
      'leftArm': [''],
      'leftThigh': [''],
      'rightArm': [''],
      'rightThigh': [''],
      'waist': [''],
      'weight': ['']
    });
  }

  createForm1() {
    this.workoutFormGroup = this.fb.group({
      'desc': [''],
      'duration': [''],
      'capture': ['']
    });
  }

  measurementOnSubmit(post) {
    this.measurementPost = post;
    this.measurementPost.measurementId = `${uuid()}`;
    this.measurementPost.createdAt = `${new Date().toISOString()}_${uuid()}`;

    this.appsync.hc().then(client => {
      client.mutate({
        mutation: createMeasurement,
        variables: this.measurementPost,
   
        optimisticResponse: () => ({
          createMeasurement: {
            ...this.measurementPost,
            __typename: 'Measurement'
          }
        }),

        update: (proxy, {data: { createMeasurement: _measurement }}) => {

          // const options = {
          //   //query: getMeasurements,
          //   //variables: { measurementId: this.measurement.measurementId, first: constants.messageFirst }
          //   //variables: { measurementId: 'test4', createdAt:'ppop', chest:66, hips:14}
          // };

          // const data = proxy.readQuery(options);
          // //const _tmp = unshiftMessage(data, _measurement);
          // //proxy.writeQuery({...options, data: _tmp});
          // proxy.writeQuery({...options, data: data});
        }
      }).then(({data}) => {
        console.log('mutation complete', data);
      }).catch(err => console.log('Error creating measurement', err));
    });

    //Analytics.record('measurements sent');
  }

  workoutOnSubmit(post) {
    console.log('workout',post);
    this.workoutPost = post;
    this.workoutPost.workoutId = `${uuid()}`;
    this.workoutPost.createdAt = `${new Date().toISOString()}_${uuid()}`;
    this.workoutPost.userId = this.me.id;

    //this.measurement = '';
    this.appsync.hc().then(client => {
      client.mutate({
        mutation: createWorkout,
        variables: this.workoutPost,

        optimisticResponse: () => ({
          createWorkout: {
            ...this.workoutPost,
            __typename: 'Workout'
          }
        }),

        update: (proxy, {data: { createWorkout: _workout }}) => {

          // const options = {
          //   query: getMeasurements,
          //   //variables: { measurementId: this.measurement.measurementId, first: constants.messageFirst }
          //   variables: { measurementId: 'test4', createdAt:'ppop', chest:66, hips:14}
          // };

          // const data = proxy.readQuery(options);
          // //const _tmp = unshiftMessage(data, _measurement);
          // //proxy.writeQuery({...options, data: _tmp});
          // proxy.writeQuery({...options, data: data});
        }
      }).then(({data}) => {
        console.log('mutation complete', data);
      }).catch(err => console.log('Error creating workout', err));
    });
    Analytics.record('workout sent');
  }
  // async openSocial(network: string, fab: HTMLIonFabElement) {
  //   const loading = await this.loadingCtrl.create({
  //     message: `Posting to ${network}`,
  //     duration: (Math.random() * 1000) + 500
  //   });
  //   await loading.present();
  //   await loading.onWillDismiss();
  //   fab.close();
  // }
}



// @Component({
//   selector: 'app-measure',
//   templateUrl: './measure.component.html',
//   styleUrls: ['./measure.component.css']
// })
// export class MeasureComponent implements OnInit {
//   //selectFormControl = new FormControl('', Validators.required);

//   measurementFormGroup: FormGroup;
//   //titleAlert: string = 'This field is required';
//   measurementPost: any = '';
//   // workoutPost: any = '';

//   //@Input() measurement: any;
//   //@Input() senderId: string;
//   //constructor(private fb: FormBuilder, private appsync: AppsyncService) {}

//   ngOnInit() {
//     this.createForm();
//   }



// }

  // updateSchedule() {
  //   // Close any open sliding items when the schedule updates
  //   if (this.scheduleList) {
  //     this.scheduleList.closeSlidingItems();
  //   }

  //   this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
  //     this.shownSessions = data.shownSessions;
  //     this.groups = data.groups;
  //   });
  // }

  // async presentFilter() {
  //   const modal = await this.modalCtrl.create({
  //     component: ScheduleFilterPage,
  //     componentProps: { excludedTracks: this.excludeTracks }
  //   });
  //   await modal.present();

  //   const { data } = await modal.onWillDismiss();
  //   if (data) {
  //     this.excludeTracks = data;
  //     this.updateSchedule();
  //   }
  // }

  // async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
  //   if (this.user.hasFavorite(sessionData.name)) {
  //     // woops, they already favorited it! What shall we do!?
  //     // prompt them to remove it
  //     this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
  //   } else {
  //     // remember this session as a user favorite
  //     this.user.addFavorite(sessionData.name);

  //     // create an alert instance
  //     const alert = await this.alertCtrl.create({
  //       header: 'Favorite Added',
  //       buttons: [{
  //         text: 'OK',
  //         handler: () => {
  //           // close the sliding item
  //           slidingItem.close();
  //         }
  //       }]
  //     });
  //     // now present the alert on top of all other content
  //     await alert.present();
  //   }

  // }

  // async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     message: 'Would you like to remove this session from your favorites?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           // they clicked the cancel button, do not remove the session
  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       },
  //       {
  //         text: 'Remove',
  //         handler: () => {
  //           // they want to remove this session from their favorites
  //           this.user.removeFavorite(sessionData.name);
  //           this.updateSchedule();

  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       }
  //     ]
  //   });
  //   // now present the alert on top of all other content
  //   await alert.present();
  // }