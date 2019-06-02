import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import createWater from '../../graphql/mutations/createWater';
import queryListWater from '../../graphql/queries/queryListWater';
import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
import Member from '../../types/member';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { APIService } from '../../API.service';

@Component({
  selector: 'water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {
  waterPost: any = '';
  value: number = 8;
  me: Member;
  public chart: Chart;
  dateValue = new Date().toISOString().slice(0, 10);
  waterIntake: number = 8;

  public chartOptions: any;
  public chartType: string = 'bar';
  public chartData: any = [];
  public chartLabels: Array<string>;
  // public lineChartData1: any = [];

  public lineChartData: Array<any> = [{ data: null }];
  public myChartData: any = [];
  public myWater: any = [];
  public something:any;

  constructor(private appsync: AppsyncService,
    public toastController: ToastController,
  private api: APIService ) { 

    this.getAllWater();

    this.chartOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Daily water intake',
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
              // millisecond: 'h:mm:ss.SSS a',
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
            labelString: 'Fluid ounces',
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

  //data: _.values(_.groupBy(myWater, 'updatedAt')).map((objs, idx) => _.sumBy(objs, 'intake') )

  ngOnInit() {
    this.api.Me1().then(res => this.me = res);

    this.getAllWater();
    console.log('is myWater sorted??', this.myWater)

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        // labels: this.myChartData.map(res => res.x),
        labels: _.keys(_.groupBy(this.myWater, 'updatedAt')),
        datasets: [
          {
            //data: this.myChartData.map(res => res.y),
            data: _.values(_.groupBy(this.myWater, 'updatedAt')).map((objs, idx) => _.sumBy(objs, 'intake') )
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Fluid intake',
          fontColor: 'black',
        },
        legend: { display: false }
      }
    });


    // To Do: do I really did to do this or use local storage?
    //this.register();
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

  getAllWater() {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: queryListWater,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({ data }) => {
        if (!data) {
          return console.log('getallMembers - no data');
        }

        this.myWater = _.sortBy(data.listWaters.items, 'updatedAt');

        })

      })
    
  }

  async presentToast() {
    this.modifiedDate();
    this.waterOnSubmit();

    const toast = await this.toastController.create({
      message: 'Your water intake has been saved.',
      duration: 2000
    });
    toast.present();

  }

  modifiedDate() {
    this.waterPost = {
      updatedAt: this.dateValue
    };
  }

   //updates slider hours
   hoursSlept(event) {
    this.waterIntake = event.detail.value;
  }

  waterOnSubmit() {
    this.waterPost.intake = this.waterIntake;
    this.waterPost.waterId = `${uuid()}`;
    this.waterPost.createdAt = `${new Date().toISOString()}_${uuid()}`;
    this.waterPost.userId = this.me.id;

    this.appsync.hc().then(client => {
      client.mutate({
        mutation: createWater,
        variables: this.waterPost,

        optimisticResponse: () => ({
          createWater: {
            ...this.waterPost,
            __typename: 'Water'
          }
        }),
        update: (proxy, { data: { createWater: _water } }) => {
          const query = queryListWater;
          const data = proxy.readQuery({ query });
          data.listWaters.items.push(_water)
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
        this.addData(this.chart, data.createWater.updatedAt, data.createWater.intake)
      }).catch(err => console.log('Error creating sleep', err));
    });
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
  
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    console.log('what is chart.data?', chart.data);
    
    chart.update();
}

 //updates date
 async updateMyDate(event) {
  this.dateValue = event.detail.value
}

}
