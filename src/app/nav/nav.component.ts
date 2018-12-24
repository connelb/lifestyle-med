import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent {
  isLoggedIn = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver,private amplifyService: AmplifyService, public router: Router) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
      if (this.isLoggedIn && !isLoggedIn) {
        router.navigate(['']);
      } else if (!this.isLoggedIn && isLoggedIn) {
        //router.navigate(['/chat']);
        router.navigate(['/dashboard']);
      }
      this.isLoggedIn = isLoggedIn;
    });
  }

  public signOut() {
    this.amplifyService.auth().signOut();
  }
}
