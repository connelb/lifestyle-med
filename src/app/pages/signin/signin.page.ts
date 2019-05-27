import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

   ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmitLogin(value: any) {
    const username = value.username, password = value.password;
    this.auth.signIn(username, password)
      .subscribe(
        result => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from './../auth/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   public loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private auth: AuthService
//   ) { }

//   ngOnInit() {
//     this.initForm();
//   }

//   initForm() {
//     this.loginForm = this.fb.group({
//       'email': ['', Validators.required],
//       'password': ['', Validators.required]
//     });
//   }

//   onSubmitLogin(value: any) {
//     const email = value.email, password = value.password;
//     this.auth.signIn(email, password)
//       .subscribe(
//         result => {
//           this.router.navigate(['/']);
//         },
//         error => {
//           console.log(error);
//         });
//   }
// }