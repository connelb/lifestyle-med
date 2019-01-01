import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AmplifyService }  from 'aws-amplify-angular';
import { UserData } from '../providers/user-data';

@Injectable({
  providedIn: 'root'
})
export class CheckUser implements CanLoad {
  constructor(private storage: Storage, private router: Router, private user:UserData) {}

  canLoad() {
    return this.user.isLoggedIn().then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'blog']);
        return true;
      } else {
        this.router.navigate(['/app', 'tabs', 'blog']);
        return false;
      }
    });
  }
}