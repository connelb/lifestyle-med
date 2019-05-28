// import { Component, ViewEncapsulation } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
//import { AuthService } from './../../providers/auth.service';
import { ToastController } from '@ionic/angular';
import { MustMatch } from './../../providers/must-match.validator';
import Amplify, { Auth } from 'aws-amplify';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  public signinForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;
  authState: any;
  username:any;

  submitted = false;


  constructor(
    public amplifyService: AmplifyService,
    private fb: FormBuilder,
    private router: Router,
    //private auth: AuthService,
    public toastController: ToastController,
  ) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState = authState;
        //console.log('what is the login is state?? constructor', authState.state)
        //this.authState.signedIn = authState.state === 'signedIn';
        // this.events.publish('data:AuthState', this.authState);

        // this.showsignedOut = authState.state === 'signedOut';
        // this.showsignIn = authState.state === 'signedIn';
        // this.showsignUp = authState.state === 'signUp';
        // this.showforgotPassword = authState.state === 'signedIn';
        // this.showrequireNewPassword = authState.state === 'signedIn';
      });

  }

  ngOnInit() {
    //this.successfullySignup = true;
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f1() { return this.signupForm.controls; }
  get f2() { return this.confirmationForm.controls; }
  get f3() { return this.signinForm.controls; }

  initForm() {

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });

    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.confirmationForm = this.fb.group({
      // username: ['', Validators.required],
      // 'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      confirmationCode: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitSignin(value: any) {
    const username = value.username, password = value.password;
  
    Auth.signIn(username, password)
      .then(user => {
        console.log('signin ok: user',  user)
        this.router.navigate(['']);
      })
      .catch(err => console.log(err));
  }

  onSubmitSignup(value: any) {
    this.username = value.username;
    const username = this.username, email = value.email, password = value.password;
    
    Auth.signUp({
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
        //this.router.navigate(['/confirm']);
      })
      .catch(err => console.log(err));
  }

  onSubmitConfirmation(value: any) {
    const username = this.username, confirmationCode = value.confirmationCode;

    Auth.confirmSignUp(username, confirmationCode).then(data => {
      this.presentToast()
      console.log('signup ok: o');

    })
      .catch(err => {
        this.presentToastWithOptions();
        console.log(err);
      }
      );

    // this.Auth.confirmSignUp(username, confirmationCode)
    //   .subscribe(
    //     result => {
    //       this.presentToast()
    //       this.router.navigate(['/signup']);
    //     },
    //     error => {
    //       this.presentToastWithOptions()
    //       console.log(error);
    //     });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Incorrect code, please recheck your email',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
    //this.router.navigate(['/blog']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Access code has been accepted, please proceed to log in',
      position: 'top',
      duration: 2000
    });
    toast.present();

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