import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    // Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  public signUp(username, password, email): Observable<any> {
    return fromPromise(Auth.signUp({
      username,
      password,
      attributes: {
        email,             // optional
        //phone_number,      // optional - E.164 number convention
        // Other custom attributes...
      },
      validationData: [],  // optional
      })
      .then(data => {
        console.log('signup ok', data);
        this.router.navigate(['/confirm']);
      })
      .catch(err => console.log(err)));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** signin */
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** signout */
  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
}

}
