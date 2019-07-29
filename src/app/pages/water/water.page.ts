import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import createWater from '../../graphql/mutations/createWater';
import queryListWater from '../../graphql/queries/queryListWater';
import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
import Member from '../../types/member';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import * as _ from 'lodash';
import * as d3Collection from 'd3-collection';
import * as d3Array from 'd3-array';
import { v4 as uuid } from 'uuid';
import { APIService } from '../../API.service';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { __rest } from 'tslib';

@Component({
  selector: 'water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit, AfterContentInit {
  myLabels = [];
  myDataset = [];

  waterPost: any = '';
  value: number = 8;
  me: Member;
  userId: any;
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
  public something: any;

  constructor(private appsync: AppsyncService,
    public toastController: ToastController,
    private api: APIService) {

    //this.getAllWater();

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

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called from water')
  }

  async ngOnInit() {
    await this.api.Me1().then(res => this.userId = res.id);

    this.getAllWater();

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        // labels: this.myChartData.map(res => res.x),
        labels: _.keys(_.groupBy(this.myWater, 'updatedAt')),
        datasets: [
          {
            //data: this.myChartData.map(res => res.y),
            data: _.values(_.groupBy(this.myWater, 'updatedAt')).map((objs, idx) => _.sumBy(objs, 'intake'))
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

  // async register() {
  //   console.log('registered??')



  //   this.appsync.hc().then(client => {
  //     client.watchQuery({
  //       query: getMe,
  //       fetchPolicy: 'cache-only'
  //     }).subscribe(({ data }) => {
  //       console.log('register user, fetch cache', data);
  //       if (data) { this.me = data.me; }
  //     });
  //   });
  // }

  async getAllWater() {

    //this.appsync.hc().then(client => {
    //     client.mutate({
    //       mutation: createWater,
    //       variables: this.waterPost,

    //   optimisticResponse: () => ({
    //     createWater: {
    //       ...this.waterPost,
    //       __typename: 'Water'
    //     }
    //   }),
    //   update: (proxy, { data: { createWater: _water } }) => {
    //     const query = queryListWater;
    //     const data = proxy.readQuery({ query });
    //     data.listWaters.items.push(_water)
    //     proxy.writeQuery({ query, data });
    //   }
    // )



    // const me = API.graphql(graphqlOperation(getMe)) as Promise<any>;

    //  me.then(res => res);


    this.appsync.hc().then(client => {

      const observable = client.watchQuery({
        query: queryListWater,
        variables: { userId: this.userId },
        fetchPolicy: 'cache-and-network'
      }).subscribe(({ data }) => {
        if (data) {
          let myLabels = [];
          let myDataset = [];

          var nest = d3Collection.nest()
            .key(function (d) { return d['updatedAt']; })
            .sortKeys(d3Array.ascending)
            .rollup(function (values) { return d3Array.sum(values, function (d) { return +d['intake']; }) })
            .entries(data.listWaters.items);

          nest.forEach(d => {
            myLabels.push(d.key),
              myDataset.push(d.value)
          }
          );

          this.chart.config.data = {
            labels: myLabels,
            datasets: [
              {
                data: myDataset
              }
            ]
          }
          this.chart.update();
        }
      });
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
    this.waterPost.userId = this.userId;
    
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
          //variables: { userId: this.userId },
          const data = proxy.readQuery({ query,variables:{userId: this.userId}});
          data.listWaters.items.push(_water)
          proxy.writeQuery({ query, data });
        }
      }).then(({ data }) => {
        console.log('mutation complete', data);
        this.getAllWater()
        // let myLabels = [];
        // let myDataset = [];

        // if (data) {
        //   var nest = d3Collection.nest()
        //     .key(function (d) { return d['updatedAt']; })
        //     .sortKeys(d3Array.ascending)
        //     .rollup(function (values) { return d3Array.sum(values, function (d) { return +d['intake']; }) })
        //     .entries(data.listWaters.items);

        //   nest.forEach(d => {
        //     myLabels.push(d.key),
        //       myDataset.push(d.value)
        //   })

        //   this.chart.config.data = {
        //     labels: myLabels,
        //     datasets: [
        //       {
        //         data: myDataset,
        //       }
        //     ]
        //   }

          //this.chart.update()
        //})


      }).catch(err => console.log('Error creating sleep', err));
    });
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });

    // console.log('dfgfgf:',chart);

    // console.log('what is chart.data?', chart.data);
    this.heck(chart);

    chart.update();
  }

  async heck(chart) {
    console.log('what is data', chart)

    //  chart.config.data = {
    //           labels: this.myChartData.map(res => res.x),
    //           datasets: [
    //             {
    //               data: this.myChartData.map(res => res.y),
    //             }
    //           ]
    //         }


    //         this.chart.update();

    // data: {
    //   // labels: this.myChartData.map(res => res.x),
    //   labels: _.keys(_.groupBy(this.myWater, 'updatedAt')),
    //   datasets: [
    //     {
    //       //data: this.myChartData.map(res => res.y),
    //       data: _.values(_.groupBy(this.myWater, 'updatedAt')).map((objs, idx) => _.sumBy(objs, 'intake') )
    //     }
    //   ]
    // }

  }

  //updates date
  async updateMyDate(event) {
    this.dateValue = event.detail.value
  }

}
