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



import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APIService} from '../../API.service';
//import {User} from '../../types/user';
import User from '../../classes/user';
// import User from '../../user';
import {Auth} from 'aws-amplify';
import createUser from '../../graphql/mutations/createUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: string;
  userName: string;
  imagePath: string;
  showPhoto: boolean;
  userCreated: boolean;
  user = new User('', '', '', '', '', false,'','');
  username: string;
  goal: string = 'example goal'

  constructor(private api: APIService, private router: Router) { }

  ngOnInit() {
    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userName = user.username;
      this.userId = user.attributes.sub;
      let result = await this.api.CreateUser(this.userId);
      if (!result) {
        this.userCreated = false;
        this.user = new User('', '', '', '', '', false,'','');
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;
        this.user = new User(
          this.userId,//cognitoId
          result.id,
          result.username,
          result.firstName,
          result.lastName,
          result.registered,
          result.bio,
          result.image
        )
      }
    })
      .catch(err => console.log(err));
  }

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async updateProfile() {
    const user = {
      id: this.userId,
      username: this.user.firstName + '_' + this.user.lastName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      bio: this.user.bio,
      image: this.user.image
    }
    await this.api[this.getType()](user);
  }

  editPhoto() {
    this.showPhoto = false;
  }

  async onImageUploaded(e) {
    this.user.image= e.key;
    if (this.userCreated) {
      await this.api.CreateUser({
        id: this.userId,
        // image: this.user.image
      });
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