import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AmplifyService } from 'aws-amplify-angular';
import { UserData } from '../providers/user-data';
import { Events } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class CheckUser implements CanLoad, CanActivate {
  signedIn = false;

  constructor(
    private storage: Storage,
    private router: Router,
    private user: UserData,
    public events: Events
  ) {
    this.events.subscribe('data:AuthState', async (data) => {
      this.signedIn = data.signedIn;
    })
  }

  canLoad() {
    return this.user.isLoggedIn().then(res => {
      if (res) {
        this.router.navigate(['/blog']);
        return true;
      } else {
        this.router.navigate(['/blog']);
        return false;
      }
    });
  }

  canActivate() {
    if (!this.signedIn) {
      //this.router.navigate(['/blog']);
      return false;
      //this.router.navigateByUrl('/app/tabs/blog');
    }
    return this.signedIn;
  }
}

