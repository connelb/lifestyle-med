import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import createSleep from '../../graphql/mutations/createSleep';
import { AppsyncService } from '../../providers/appsync.service';
import { v4 as uuid } from 'uuid';
import getMe from '../../graphql/queries/getMe';
import User from '../../types/user';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit{
  me:User;
  // sleepFormGroup: FormGroup;
  sleepPost: any = '';

  value: number = 8;
  sleepHours:number;

  dateValue = new Date().toISOString().slice(0,10)

  constructor(public toastController: ToastController, private appsync: AppsyncService) {}

  ngOnInit() {
    this.createForm();
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
    this.sleepPost = {
      updatedAt: this.dateValue
    };
    // this.sleepFormGroup = this.fb.group({
    //   'updatedAt': ['']
    // });
  }

  sleepOnSubmit() {
    //this.sleepPost = post;
    this.sleepPost.hours = this.sleepHours;
    this.sleepPost.sleepId = `${uuid()}`;
    this.sleepPost.createdAt = `${new Date().toISOString()}_${uuid()}`;
    this.sleepPost.userId = this.me.id;

    console.log('sleep',this.sleepPost);
    //this.measurement = '';
    this.appsync.hc().then(client => {
      client.mutate({
        mutation: createSleep,
        variables: this.sleepPost,

        optimisticResponse: () => ({
          createSleep: {
            ...this.sleepPost,
            __typename: 'Sleep'
          }
        }),

        update: (proxy, {data: { createSleep: _sleep }}) => {

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
      }).catch(err => console.log('Error creating sleep', err));
    });
  }

  async updateMyDate(event){
    this.dateValue = event.detail.value

  }

  async presentToast() {
    this.sleepOnSubmit();

    const toast = await this.toastController.create({
      message: 'Your hours slept have been saved.',
      duration: 2000
    });
    toast.present();

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

  // rangeBlurred(event){
  //   this.temp = event;

  // }

  // rangeFocused(event){
  //   this.final = event;
  // }

  hoursSlept(event){
   this.sleepHours = event.detail.value;
  }


}
