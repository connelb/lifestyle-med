import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { UserData } from '../../providers/user-data';

// import { UserOptions } from '../../interfaces/user-options';
import { AmplifyService }  from 'aws-amplify-angular';





@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  
  submitted = false;

  constructor(
    public amplifyService: AmplifyService,
    public router: Router
  ) {}
}
