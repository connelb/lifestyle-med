import { Component, OnInit } from '@angular/core';
import queryListSleep from '../../graphql/queries/queryListSleep';
import { AppsyncService } from '../../providers/appsync.service';
import getMe from '../../graphql/queries/getMe';
import User from '../../types/user';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'sleep-history',
  templateUrl: './sleep-history.page.html',
  styleUrls: ['./sleep-history.page.scss'],
})
export class SleepHistoryPage implements OnInit {
  me: User;
  public chart: Chart;
  public rawData:any;

  public chartOptions: any;
  public chartType: string = 'bar';
  public chartData: any = [];
  public chartLabels: Array<string>;
  // public lineChartData1: any = [];

  public lineChartData: Array<any> = [{ data: null }];
  public myChartData: any = [];

  constructor(private appsync: AppsyncService) { 

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

  removeItem(item){
    console.log('removed', item)
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

  getAllSleep() {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: queryListSleep,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({ data }) => {
        if (!data) {
          return console.log('getAllUsers - no data');
        }
        this.rawData = data.listSleeps.items;
        const newSleep = _.sortBy(data.listSleeps.items, 'updatedAt');
        this.chartLabels = _.map(newSleep, 'updatedAt');
        this.chartData = _.map(_.map(newSleep, 'hours'), _.ary(parseInt, 1));
        this.lineChartData = [{ data: this.chartData }];
        this.myChartData = newSleep.map(res => ({ x: res.updatedAt, y: res.hours }))
      });
    })
  }

}
