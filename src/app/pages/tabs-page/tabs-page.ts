import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
//import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  // loggedIn = false;
  isLoggedIn = false;

  constructor(
    public amplifyService: AmplifyService,
    //public userData: UserData,
  ) {

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.isLoggedIn = authState.state === 'signedIn';
      })
  }

}
