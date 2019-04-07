// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.page.html',
//   styleUrls: ['./profile.page.scss'],
// })
// export class ProfilePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { APIService } from '../../API.service';
//import {User} from '../../types/user';
import User from '../../classes/user';
import Member from '../../types/user';
// import User from '../../user';
import { Auth } from 'aws-amplify';
import { ToastController } from '@ionic/angular';
// import createUser from '../../graphql/mutations/createUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  // userId;
  //username: string = "lyg";
  imagePath: string;
  //conversations: string;
  //messages:string;
  showPhoto: boolean;
  userCreated: boolean;
  member: Member;
  public userProfile: Member;
  userName;
  goal;
  firstName;
  lastName;
  id;
  registered;
  image;

  constructor(private api: APIService, private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.showPhoto = false;

    this.profileForm = new FormGroup({
      'userData': new FormGroup({
        firstName: new FormControl(null, []),
        lastName: new FormControl(null, []),
        userName: new FormControl(null, []),
        goal: new FormControl(null, []),
        //         'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        //         'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      })
    });
    
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      let result = await this.api.Me();
      if (!result) {
        console.log('not logged in')
        this.userCreated = false;
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;

        this.profileForm.setValue({
          'userData': {
            'userName': result.username,
            'goal': result.bio,
            'firstName': result.firstname,
            'lastName': result.lastname
          }
        })

        //create member object
        this.userProfile = {
          username: result.username,
          id: result.id,
          firstname: result.firstname,
          lastname: result.lastname,
          registered: result.registered,
          bio: result.bio,
          image: result.image
        }


        this.userName = result.username;
        this.id = result.id;
        //result.memessages,
        // this.user.username = result.username,
        this.firstName = result.firstname;
        this.lastName = result.lastname;
        this.registered = result.registered;
        this.goal = result.bio;
        this.image = result.image;

      }
    }).catch(err => console.log('there is an erroro!', err));
  }

  getType(): string {
    return this.userCreated ? 'UpdateMember' : 'CreateMember';
  }


  async updateProfile() {
    //console.log('this.profileForm.value.goal',this.profileForm.value.userData);
    const user = {
      id: this.id,
      username: this.profileForm.value.userData.userName,
      firstname: this.profileForm.value.userData.firstName,
      lastname: this.profileForm.value.userData.lastName,
      registered: this.registered,
      bio: this.profileForm.value.userData.goal,
      image: this.image
    }

    this.userProfile = user;
    await this.api[this.getType()](user);
    this.presentToast();
  }

  async presentToast() {
    // this.modifiedDate();
    // this.sleepOnSubmit();

    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();

  }

  editPhoto() {
    this.showPhoto = false;
    console.log('edit photo cLLED');
  }

  // (async user => {
  //   this.userId = user.attributes.sub;
  //   this.userName = user.username;
  // })

  async onImageUploaded(e) {
    this.image = e.key;
    //console.log('what is onImageUploaded??', this.member)
    if (this.userCreated) {
   const user = {
        id: this.id,
        username: this.profileForm.value.userData.userName,
        firstname: this.profileForm.value.userData.firstName,
        lastname: this.profileForm.value.userData.lastName,
        registered: this.registered,
        bio: this.profileForm.value.userData.goal,
        image: this.image
      }

      this.userProfile = user;
      console.log('what is updateProfile??', user)
      await this.api[this.getType()](user);
    }
    this.showPhoto = true;
  }

  logOut() {
    Auth.signOut({ global: true })
      .then(data => {
        this.router.navigate(['/auth']);
      })
      .catch(err => console.log(err));
  }

}