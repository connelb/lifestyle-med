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
  myData:any;

  public chartOptions: any;
  public chartType: string = 'line';
  public chartLabels: string[] = ['Jul 14', 'Jul 15', 'Jul 16', 'Jul 17'];
  public chartData: any =
  [
    {
      data: [44000, 37000, 35000, 42000],
      label: 'Repeat Count',
      borderWidth: 1
    },
    {
      data: [5000, 5000, 5000, 6000],
      label: 'New Count',
      borderWidth: 1
    },
  ];

 

  dateValue = new Date().toISOString().slice(0,10);

//   data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'My First dataset',
//             backgroundColor: '#42A5F5',
//             borderColor: '#1E88E5',
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: 'My Second dataset',
//             backgroundColor: '#9CCC65',
//             borderColor: '#7CB342',
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// }
chart = [];

  constructor(
    private el: ElementRef,
    public toastController: ToastController,
    private appsync: AppsyncService) {

      this.chartOptions = {
        responsive: true,
        title: {
          display: true,
          text: 'My Chart Title',
          fontColor: 'black',
        },
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              fontColor: 'black',
            },
            gridLines: {
              color: '#dbd9d9'
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
              labelString: 'Scale Label',
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


  // @ViewChild('myCanvas')
  // public canvas: ElementRef;

  // public context: CanvasRenderingContext2D;
  // public chartType: string = 'line';
  // //public chartData: any[];
  // public chartLabels: any[];
  // public chartColors: any[];
  // public chartOptions: any;
  // public barChartOptions: any;

  // public chartData: any =
  // [
  //   {
  //     data: [44000, 37000, 35000, 42000],
  //     label: 'Repeat Count',
  //     borderWidth: 1
  //   },
  //   {
  //     data: [5000, 5000, 5000, 6000],
  //     label: 'New Count',
  //     borderWidth: 1
  //   },
  // ];




  


  ngOnInit() {
    this.createForm();
    this.register();
    this.getAllSleep();

    // this.barChartOptions = {
    //   responsive: true,
    //   title: {
    //     display: true,
    //     text: 'My Chart Title',
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
    //         labelString: 'Scale Label',
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






    // this.chartData = [{
    //   data: [3, 1, 4, 2, 5],
    //   label: 'Anthracnose',
    //   fill: false
    // }];
    // this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    // this.chartColors = [{
    //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //      borderColor: 'rgba(0, 0, 0, 1)'
    // }];

    // this.chartOptions = {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true,
    //         stepSize: 1
    //       }
    //     }]
    //   }
    // }

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

  getAllSleep() {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: queryListSleep,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({data}) => {
        if (!data) {
          return console.log('getAllUsers - no data');
        }
        console.log('queryListSleep',data.listSleeps.items)
        this.myData = data.listSleeps.items;
        // this.users = _(data.allUser).sortBy('username').reject(['id', this._user.id]).value();
        // console.log('getAllUsers - Got data', this.users);
        // this.no_user = (this.users.length === 0);
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
