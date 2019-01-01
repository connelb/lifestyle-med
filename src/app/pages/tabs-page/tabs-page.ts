import { Component, OnInit } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit{

  loggedIn = false;

  constructor(
    public amplifyService: AmplifyService,
    public userData: UserData,
  ) {}

  ngOnInit(){
    this.userData.isLoggedIn().then(res =>
      {
        console.log('what is res??', res)
        this.loggedIn = res
      }
    )
  }

}
