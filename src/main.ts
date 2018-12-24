import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

// import PubSub from '@aws-amplify/pubsub';
// import API from '@aws-amplify/api';
// import awsConfig from './aws-exports';

// PubSub.configure(awsConfig);
// API.configure(awsConfig);


if (environment.production) {
  enableProdMode();
}

import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
