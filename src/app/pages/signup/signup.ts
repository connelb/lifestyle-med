// import { Component, ViewEncapsulation } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { ToastController } from '@ionic/angular';
import { MustMatch } from './../../providers/must-match.validator';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;

  submitted = false;
  

  constructor(
    public amplifyService: AmplifyService,
    // public router: Router,
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    //this.successfullySignup = true;
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  initForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
}, {
  validator: MustMatch('password', 'confirmPassword')
});
    this.confirmationForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'confirmationCode': ['', ]
    });
  }

  onSubmitSignup(value: any) {
    const username= value.username, email = value.email, password = value.password;
    this.auth.signUp(username, password, email)
      .subscribe(
        result => {
          this.successfullySignup = true;
          this.router.navigate(['/signup']);
        },
        error => {
          console.log(error);
        });
  }

  onSubmitConfirmation(value: any) {
    const email = value.email, confirmationCode = value.confirmationCode;
    this.auth.confirmSignUp(email, confirmationCode)
      .subscribe(
        result => {
          this.router.navigate(['/login']);
        },
        error => {
          this.presentToastWithOptions()
          console.log(error);
        });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Incorrect code, please recheck your email',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
    this.router.navigate(['/blog']);
  }
}




// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   public signupForm: FormGroup;
//   public confirmationForm: FormGroup;
//   public successfullySignup: boolean;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private auth: AuthService
//   ) { }

//   ngOnInit() {
//     this.initForm();
//   }

//   initForm() {
//     this.signupForm = this.fb.group({
//       'email': ['', Validators.required],
//       'password': ['', Validators.required]
//     });
//     this.confirmationForm = this.fb.group({
//       'email': ['', Validators.required],
//       'confirmationCode': ['', Validators.required]
//     });
//   }

//   onSubmitSignup(value: any) {
//     const email = value.email, password = value.password;
//     this.auth.signUp(email, password)
//       .subscribe(
//         result => {
//           this.successfullySignup = true;
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   onSubmitConfirmation(value: any) {
//     const email = value.email, confirmationCode = value.confirmationCode;
//     this.auth.confirmSignUp(email, confirmationCode)
//       .subscribe(
//         result => {
//           this.router.navigate(['/login']);
//         },
//         error => {
//           console.log(error);
//         });
//   }
// }