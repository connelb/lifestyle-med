import { Component, OnInit, Input } from '@angular/core';
import { AppsyncService } from '../appsync.service';
import { v4 as uuid } from 'uuid';
import createMeasurement from '../graphql/mutations/createMeasurement';
import getMeasurements from '../graphql/queries/getMeasurements';
//import { unshiftMessage, constants } from '../chat-helper';
import Measurement from '../types/measurement';
import { Analytics } from 'aws-amplify';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {
  //selectFormControl = new FormControl('', Validators.required);

  measurementFormGroup: FormGroup;
  //titleAlert: string = 'This field is required';
  measurementPost: any = '';
  // workoutPost: any = '';

  //@Input() measurement: any;
  //@Input() senderId: string;
  constructor(private fb: FormBuilder, private appsync: AppsyncService) {}

  ngOnInit() {
    this.createForm();
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

  //measurement = '';

  workoutOnSubmit(post) {
    console.log('workout',post);
  }

  measurementOnSubmit(post) {
    this.measurementPost = post;
    this.measurementPost.measurementId = `${uuid()}`;
    this.measurementPost.createdAt = `${new Date().toISOString()}_${uuid()}`;


    //this.measurement = '';
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
      }).catch(err => console.log('Error creating measurement', err));
    });
    Analytics.record('measurements sent');
  }

}

