
import { Component, OnInit, Input } from '@angular/core';
import { AppsyncService } from '../appsync.service';
import { v4 as uuid } from 'uuid';
import createWorkout from '../graphql/mutations/createWorkout';
import getWorkouts from '../graphql/queries/getWorkouts';
//import { unshiftMessage, constants } from '../chat-helper';
import Workout from '../types/workout';
import { Analytics } from 'aws-amplify';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import getMe from './../../chat-app/graphql/queries/getMe';
import { Auth } from 'aws-amplify';
import User from '../types/user';
import AWSAppSyncClient from 'aws-appsync';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  //measurementFormGroup: FormGroup;
  workoutFormGroup: FormGroup;
  //titleAlert: string = 'This field is required';
  //measurementPost: any = '';
  workoutPost: any = '';
  username: string;
  session;
  client: AWSAppSyncClient<any>;
  me: User;


  constructor(private fb: FormBuilder, private appsync: AppsyncService) {}

  ngOnInit() {

    Auth.currentSession().then(session => {
      this.register();
    });

    this.createForm();
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
    this.workoutFormGroup = this.fb.group({
      'desc': [''],
      'duration': [''],
      'capture': ['']
    });
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

}


