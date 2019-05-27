// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';
import { ToastController } from '@ionic/angular';
import { MustMatch } from './../../providers/must-match.validator';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  public signupForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;
  
  constructor(
      //public amplifyService: AmplifyService,
    public router: Router,
    private fb: FormBuilder,
    //private router: Router,
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
    this.confirmationForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'confirmationCode': ['', ]
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
    this.router.navigate(['/confirm']);
  }

}

