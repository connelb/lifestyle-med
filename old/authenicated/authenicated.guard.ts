import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenicatedGuard implements CanActivate {

  constructor(private amplifyService: AmplifyService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.amplifyService.auth().currentAuthenticatedUser()
    .then(user => true)
    .catch(err => {
      this.router.navigate(['']);
      return false;
  });
  }
}
