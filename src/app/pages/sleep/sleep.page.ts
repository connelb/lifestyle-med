import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import createSleep from '../../graphql/mutations/createSleep';
import { AppsyncService } from '../../providers/appsync.service';
import { v4 as uuid } from 'uuid';
import getMe from '../../graphql/queries/getMe';
import User from '../../types/user';
import queryListSleep from '../../graphql/queries/queryListSleep';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import * as moment from 'moment';
import * as _ from 'lodash';
import { timestamp } from 'rxjs/operators';



@Component({
  selector: 'sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  me: User;
  // sleepFormGroup: FormGroup;
  sleepPost: any = '';

  value: number = 8;
  sleepHours: number;
  myData: any;
  myData1: any;

  public chartOptions:any;
  public chartType: string = 'bar';
  // public chartLabels: string[] = ['Jul 14', 'Jul 15', 'Jul 16', 'Jul 17'];
  //public chartData: string[] =[''];
  public chartData:any = [];
  public chartLabels:Array<string> = [];


  public lineChartData:Array<any> = [
    {data: this.chartData}
  ];

  dateValue = new Date().toISOString().slice(0, 10);

  chart = [];

  constructor(
    private el: ElementRef,
    public toastController: ToastController,
    private appsync: AppsyncService) {

      this.chartOptions = {
        responsive: true,
        title: {
          display: true,
          text: 'Hours Slept',
          fontColor: 'black',
        },
        // scales: {
        //   xAxes: [{
        //     stacked: true,
        //     ticks: {
        //       fontColor: 'black',
        //     },
        //     gridLines: {
        //       color: '#dbd9d9'
        //     }
        //   }],

          scales: {
            xAxes: [{
              ticks: {
                fontColor: 'black',
              },
              gridLines: {
                color: '#dbd9d9',
                offsetGridLines: false
              },
              type: 'time',
              distribution: 'series',
              time: {
                unit: 'day',
                displayFormats: {
                  'day': 'MMM D'
                }
            }
              // time: {
              //   displayFormats: {
              //     //  'millisecond': 'MMM DD',
              //     //  'second': 'MMM DD',
              //     //  'minute': 'MMM DD',
              //     //  'hour': 'MMM DD',
              //      'day': 'MMM D',
              //      //'week': 'YYY',
              //     //  'month': 'MMM DD',
              //     //  'quarter': 'MMM DD',
              //     //  'year': 'MMM DD',
              //   }}
            }],
          yAxes: [{
            stacked: true,
            ticks: {
              fontColor: 'black',
              min: 0,
              beginAtZero: true,
  
            },
            gridLines: {
              color: '#dbd9d9'
            },
            scaleLabel: {
              display: true,
              labelString: 'Hours Slept',
              fontColor: 'black',
            }
          }]
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'black'
          }
        },
      };

      this.getAllSleep();

      // this.chartLabels.forEach(item => {
      //   return moment(item).format("MM-DD");
      //   //return moment(item).format("HH:mm");
      // });
    }

  ngOnInit() {
    
    // this.chartData['data'] =[];
    this.createForm();
    this.register();
    
  }

  register() {
    this.appsync.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        console.log('register user, fetch cache', data);
        if (data) { this.me = data.me; }
      });
    });
  }

  createForm() {
    this.sleepPost = {
      updatedAt: this.dateValue
    };
  }

  // formatDate(data){
  //   data.forEach(item => {
  //       return moment(item).format("MM-DD");
  //       //return moment(item).format("HH:mm");
  //     });
  // }

  getAllSleep() {
    let temp;

    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: queryListSleep,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({data}) => {
        if (!data) {
          return console.log('getAllUsers - no data');
        }

        

       
        //this.users = _(data.allUser).sortBy('username').reject(['id', this._user.id]).value();
        _.sortBy(data.listSleeps.items, 'updatedAt');
        this.chartLabels = _.map(data.listSleeps.items,'updatedAt');

        //console.log('need to sort', _.sortBy(data.listSleeps.items, 'updatedAt'), data.listSleeps.items);
        //
        
        // .map(item => {
        //         return moment(item).format("MM-DD");
        // });
        // this.formatDate(data);
        //this.chartLabels.forEach(d=>moment(d).format('MM'));

        // this.chartLabels.forEach(item => {
        //   return moment(item).format("MM-DD");
        //   //return moment(item).format("HH:mm");
        // });
      
        this.chartData = _.map(_.map(data.listSleeps.items,'hours'),_.ary(parseInt,1));
        this.lineChartData = [{data: this.chartData}];//, label: 'A',borderWidth: 1

        //to do convert to a number
        //temp = _.map(this.chartData, );

        console.log('chartData, chartLabels',this.lineChartData, this.chartData, this.chartLabels);

        // {listSleeps: {…}}
        // listSleeps:
        // items: Array(3)
        // 0: {hours: "3", userId:


        //this.no_user = (this.users.length === 0);
});

      // observable.subscribe({ data } => {
      //   if (!data) {
      //     return console.log('getAllUsers - no data');
      //   }

      //  data => {
      //     if (!data) {
      //         return console.log('getAllUsers - no data');
      //       }
            //_.sortBy(data.listSleeps.items, 'createdAt');

            //console.log('kkk', data.listSleeps.items['createdAt']);
            // this.chartLabels = _.reduce(data.listSleeps.items,data.listSleeps.items['createdAt']);
            // this.chartData = _.reduce(data.listSleeps.items,data.listSleeps.items['hours']);
        //}
        // error: {err => console.error('something wrong occurred: ' + err)},
        // complete: () => console.log('done')

        
        // temp = _.sortBy(data.listSleeps.items, 'createdAt')
        // temp=( {
        //   temp1 : temp['updatedAt'],
        //   temp2 : temp['hours']

        // })
       
        // console.log('temp?', temp);
        // for (let i = 0; i < data.listSleeps.items.length; i++) {
        //   //console.log('ll',data.listSleeps.items[i])
        //   temp1.push(data.listSleeps.items[i]['updatedAt']);
        //   temp2.push(+data.listSleeps.items[i]['hours']);
        //   console.log(temp1,temp2);
        // }

        //this.renderChart();
        
      //});
      // this.renderChart(temp)

      // observable.subscribeToMore({
      //   document: subscribeToNewUserUsers,
      //   updateQuery: (prev: UsersQuery, {subscriptionData: {data: {subscribeToNewUsers: user }}}) => {
      //     console.log('updateQuery on convo subscription', user, prev);
      //     return this._user.id === user.id ? prev : addUser(prev, user);
      //   }
      // });
      
    });
    
  }

  renderChart(data){
    this.chartLabels.map(item => {
      return moment(item).format("MM-DD");
      //return moment(item).format("HH:mm");
    });
    
    // this.chartLabels= data['createdAt'];
    // this.chartData=data['hours'];
    // console.log('data is', data, this.chartLabels,this.chartData )
    

    // this.chartOptions = {
    //   responsive: true,
    //   title: {
    //     display: true,
    //     text: 'Hours Slept',
    //     fontColor: 'black',
    //   },
    //   scales: {
    //     xAxes: [{
    //       stacked: true,
    //       ticks: {
    //         fontColor: 'black',
    //       },
    //       gridLines: {
    //         color: '#dbd9d9'
    //       }
    //     }],
    //     yAxes: [{
    //       stacked: true,
    //       ticks: {
    //         fontColor: 'black',
    //         min: 0,
    //         beginAtZero: true,

    //       },
    //       gridLines: {
    //         color: '#dbd9d9'
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Hours Slept',
    //         fontColor: 'black',
    //       }
    //     }]
    //   },
    //   legend: {
    //     display: false,
    //     labels: {
    //       fontColor: 'black'
    //     }
    //   },
    // };


  }

  sleepOnSubmit() {

    //this.sleepPost = post;
    this.sleepPost.hours = this.sleepHours;
    this.sleepPost.sleepId = `${uuid()}`;
    this.sleepPost.createdAt = `${new Date().toISOString()}_${uuid()}`;
    this.sleepPost.userId = this.me.id;

    console.log('sleep', this.sleepPost);
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

        update: (proxy, { data: { createSleep: _sleep } }) => {

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
      }).then(({ data }) => {
        console.log('mutation complete', data);
      }).catch(err => console.log('Error creating sleep', err));
    });
  }

  async updateMyDate(event) {
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

  hoursSlept(event) {
    this.sleepHours = event.detail.value;
  }


}
