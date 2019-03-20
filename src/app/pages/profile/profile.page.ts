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
import { Validators, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {APIService} from '../../API.service';
//import {User} from '../../types/user';
import User from '../../classes/user';
// import User from '../../user';
import {Auth} from 'aws-amplify';
// import createUser from '../../graphql/mutations/createUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm : FormGroup;
  userId: string;
  //username: string = "lyg";
  imagePath: string;
  //conversations: string;
  //messages:string;
  showPhoto: boolean;
  userCreated: boolean;
  user;
  username: string;
  goal: string = 'example goal';
  firstname= 'myfirst name';
  lastname = 'my last name';

  constructor(private api: APIService, private router: Router, private formBuilder: FormBuilder) { 
 
  }


  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      // firstName: [''],
      // lastName: [''],
      userId:[''],
      goal: [''],
    });

    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.username = user.username;
      this.userId = user.attributes.sub;
      // context.identity.sub
      this.firstname = "";
      this.lastname = "";
      this. goal = "";
      console.log('what is userId?', user);
      let result = await this.api.Me();
      if (!result) {
        this.userCreated = false;
        this.user = new User('', '', '','', '', false,'','');
        console.log('llkj - no user?????', this.user);
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;
        this.user = new User(
          this.userId,//cognitoId
          //result.conversations,
          result.id,
          //result.messages,
          result.username,
          result.firstname,
          result.lastname,
          result.registered,
          result.bio,
          result.image
        )
        this.user = result;

        this.render();

        console.log('llkl', result)
      }
    }).catch(err => console.log('there is an erroro!', err));
  }

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  render(){
    console.log('????',this.goal, this.userId)
  this.profileForm = this.formBuilder.group({
    firstName: [this.firstname],
    lastName: [this.lastname],
    userId:[this.userId],
    goal: [this.goal],
  });
}

  // type User {
  //   cognitoId: ID!
  //   conversations(after: String, first: Int): UserConverstationsConnection
  //   id: ID!
  //   messages(after: String, first: Int): MessageConnection
  //   username: String!
  //   firstName: String
  //   lastName: String
  //   registered: Boolean
  //   bio: String
  //   image: String
  // }

  // input UpdateUserInput {
  //   cognitoId: ID!
  //   id: ID
  //   username: String
  //   firstName: String
  //   lastName: String
  //   registered: Boolean
  //   bio: String
  //   image: String
  // }
  

  async updateProfile() {
    const user = {
      cognitoId: this.userId,
      id: this.userId,
      username: "a",
      firstName: "b",
      lastName: "c",
      bio: this.goal,
      image: ''
    }
    await this.api[this.getType()](user);
  }

  editPhoto() {
    this.showPhoto = false;
  }

  // (async user => {
  //   this.userId = user.attributes.sub;
  //   this.userName = user.username;
  // })

  async onImageUploaded(e) {
    this.user.image= e.key;
    if (this.userCreated) {
      await this.api.CreateUser(this.user
      //   {
      //   // id: this.userId,
      //   image: this.user.image
      // }
    );
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