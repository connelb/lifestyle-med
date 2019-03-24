import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import createSleep from '../../graphql/mutations/createSleep';
import { AppsyncService } from '../../providers/appsync.service';
import { v4 as uuid } from 'uuid';
import getMe from '../../graphql/queries/getMe';
import User from '../../types/user';
import queryListSleepRecent from '../../graphql/queries/queryListSleepRecent';
import GetSleep from '../../graphql/queries/getSleep';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

import * as moment from 'moment';
import * as _ from 'lodash';
import { timestamp, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'apollo-link';



@Component({
  selector: 'sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //public mbarChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public mbarChartLabels: string[] = [];

  public barChartData: any[] = [];

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;


  me: User;
  // sleepFormGroup: FormGroup;
  sleepPost: any = '';

  value: number = 8;
  sleepHours: number = 8;
  myData: any;
  myData1: any;

  public chartOptions: any;
  public chartType: string = 'bar';
  public chartData: any = [];
  public chartLabels: Array<string>;
  public lineChartData1: any = [];

  public lineChartData: Array<any> = [{ data: null }];
  public myChartData: any = [];
  dateValue = new Date().toISOString().slice(0, 10);
  //public chart = [];
  public chart: Chart;

  //public barChartData:any[] = [{data: [55, 60, 75, 82, 56, 62, 100]}];

  constructor(
    private el: ElementRef,
    public toastController: ToastController,
    private appsync: AppsyncService) {
    console.log('constructor')

    this.getAllSleep();

    this.chartOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Hours Slept',
        fontColor: 'black',
      },
      scales: {
        xAxes: [{
          offset: true,
          type: 'time',
          categoryPercentage: 0.9,
          time: {
            unit: 'day',
            displayFormats: {
              millisecond: 'h:mm:ss.SSS a',
              second: 'D MMM',
              minute: 'D MMM',
              hour: 'hA',
              day: 'MMM D',
              week: 'll',
              month: 'MMM YYYY',
              quarter: '[Q]Q - YYYY',
              year: 'YYYY'
            },
          }
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

  }


  ngOnInit() {
    this.getAllSleep();

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.myChartData.map(res => res.x),
        datasets: [
          {
            data: this.myChartData.map(res => res.y),
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Hours Slept',
          fontColor: 'black',
        },
        legend: { display: false }
      }
    });


    // To Do: do I really did to do this or use local storage?
    this.register();
  }

  register() {
    this.appsync.hc().then(client => {
      client.watchQuery({
        query: getMe,
        fetchPolicy: 'cache-only'
      }).subscribe(({ data }) => {
        //console.log('register user, fetch cache', data);
        if (data) { this.me = data.me; }
      });
    });
  }

  modifiedDate() {
    this.sleepPost = {
      updatedAt: this.dateValue
    };
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

  getAllSleep() {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: queryListSleepRecent,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({ data }) => {
        if (!data) {
          return console.log('getallMembers - no data');
        }
        const newSleep = _.sortBy(data.listSleeps.items, 'updatedAt');
        this.chartLabels = _.map(newSleep, 'updatedAt');
        this.chartData = _.map(_.map(newSleep, 'hours'), _.ary(parseInt, 1));
        this.lineChartData = [{ data: this.chartData }];
        this.myChartData = newSleep.map(res => ({ x: res.updatedAt, y: res.hours }))
        //this.render();
        // if(this.chart){
        //   this.chart.update();
        // }
      });


      // observable.subscribeToMore({
      //   document: subscribeToNewUserUsers,
      //   updateQuery: (prev: UsersQuery, {subscriptionData: {data: {subscribeToNewUsers: user }}}) => {
      //     console.log('updateQuery on convo subscription', user, prev);
      //     return this._user.id === user.id ? prev : addUser(prev, user);
      //   }
      // });

    });
   
    

  }



  sleepOnSubmit() {
    this.sleepPost.hours = this.sleepHours;
    this.sleepPost.sleepId = `${uuid()}`;
    this.sleepPost.createdAt = `${new Date().toISOString()}_${uuid()}`;
    this.sleepPost.userId = this.me.id;

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
          const query = queryListSleepRecent;
          const data = proxy.readQuery({ query });
          data.listSleeps.items.push(_sleep)
          proxy.writeQuery({ query, data });

          //const newSleep = _.sortBy(data.listSleeps.items, 'updatedAt');
          //this.myChartData = newSleep.map(res => ({ x: res.updatedAt, y: res.hours }))

          // const data1 = proxy.readQuery({ query });
          // console.log('what is proxy revised data1??',data1)

          // this.chart.config.data = {
          //   labels: this.myChartData.map(res => res.x),
          //   datasets: [
          //     {
          //       data: this.myChartData.map(res => res.y),
          //     }
          //   ]
          // }
          // this.chart.update();

        }
      }).then(({ data }) => {
        console.log('mutation complete', data);
        this.addData(this.chart, data.createSleep.updatedAt, data.createSleep.hours)
        //if(this.chart){
          //this.chart.update()
        //}
   

      }).catch(err => console.log('Error creating sleep', err));
    });
  }


  async presentToast() {
    this.modifiedDate();
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

  //updates slider hours
  hoursSlept(event) {
    this.sleepHours = event.detail.value;
  }

  //updates date
  async updateMyDate(event) {
    this.dateValue = event.detail.value
  }


}
 // rangeBlurred(event){
  //   this.temp = event;

  // }

  // rangeFocused(event){
  //   this.final = event;
  // }
