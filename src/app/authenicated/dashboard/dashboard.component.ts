import { Component, OnInit } from '@angular/core';

import AWSAppSyncClient from 'aws-appsync';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

//import User from '../types/user';
//import Conversation from '../types/conversation';

import { AppsyncService } from '../appsync.service';
import { SwUpdate } from '@angular/service-worker';
//import getMe from '../graphql/queries/getMe';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';//aws-amplify-angular
import { Storage } from 'aws-amplify';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Amplify from 'aws-amplify';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //username: string;
  session;
  client: AWSAppSyncClient<any>;
  //client: any;
  //me: User;
  //conversation: Conversation;
  update: boolean;

  constructor( public amplify:AmplifyService, private swUpdate: SwUpdate, private appsync: AppsyncService) { }

  
    ngOnInit() {

      this.amplify.storage()
      .list('')
      .then(data => console.log('data from S3: ', data))
      .catch(err => console.log('error'))


      // Amplify.configure({
      //     Storage: {
      //         bucket: 'appsync9835caacff2624d11a241744942132e2f', //REQUIRED -  Amazon S3 bucket
      //         region: 'us-east-1', //REQUIRED -  bucket region,
      //         //AUTH_TYPE:CognitoUserPool
      //     }
      // });

      // this.amplify.storage().configure()

      // this.amplify.storage().list('')
      //   .then(data => console.log('data from S3: ', data))
      //   .catch(err => console.log('error'))


    //   this.amplify.storage().put('test.txt', 'Hello')
    // .then (result => console.log(result))
    // .catch(err => console.log(err));


      Auth.currentSession().then(session => {
        this.logInfoToConsole(session);
        this.session = session;
        //this.register();
        //setImmediate(() => this.createUser());
      });
  
      this.swUpdate.available.subscribe(event => {
        console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
        this.update = true;
      });
    }

    logInfoToConsole(session) {
      console.log(session);
      console.log(`ID Token: <${session.idToken.jwtToken}>`);
      console.log(`Access Token: <${session.accessToken.jwtToken}>`);
      console.log('Decoded ID Token:');
      console.log(JSON.stringify(session.idToken.payload, null, 2));
      console.log('Decoded Acess Token:');
      console.log(JSON.stringify(session.accessToken.payload, null, 2));
    }

    onImagePicked(file){

      let key = `private/${file.name}`;
      
      this.amplify.storage().put( key, file, {
        'level': 'private',
        'contentType': file.type
      })
      .then (result => console.log('uploaded: ', result))
      .catch(err => console.log('upload error: ', err));
  
    }
  
    onImageLoaded(event){
      console.log('event',event)
  
    }
  
    onAlbumImageSelected(event){
      window.open( event, '_blank' );
    }
  

}
