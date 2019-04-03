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
// import createUser from '../../graphql/mutations/createUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  userId;
  //username: string = "lyg";
  imagePath: string;
  //conversations: string;
  //messages:string;
  showPhoto: boolean;
  userCreated: boolean;
  user: Member
  username: string;
  goal;
  firstname = 'myfirst name';
  lastname = 'my last name';

  constructor(private api: APIService, private router: Router, private formBuilder: FormBuilder) {


  }

  // ngOnInit(){
  //   this.SignupForm = new FormGroup({
  //     'userData': new FormGroup({
  //         'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
  //         'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
  //     }),
  //     'gender':new FormControl('female'),
  //     'hobbies':new FormArray([])
  //   });

  //   this.SignupForm.setValue({
  //     'userData':{
  //       'username':'geetha',
  //       'email':'geetha@gmail.com'
  //     },
  //     'gender':'female',
  //     'hobbies':[]
  //   })
  // }


  ngOnInit() {
    this.profileForm = new FormGroup({
      'userData': new FormGroup({
        firstName: new FormControl(null, []),
        lastName: new FormControl(null, []),
        userId: new FormControl(null, []),
        goal: new FormControl(null, []),
        //         'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        //         'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      })

    });

    //     this.user = {
    //       id:
    //       firstname: 'New',
    //       lastname: 'User',
    // };

    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      // this.username = user.username;
      // this.userId = user.attributes.sub;
      // // context.identity.sub
      // this.firstname = "";
      // this.lastname = "";
      // this.goal = "";
      //console.log('what is userId?', user);
      let result = await this.api.Me();
      if (!result) {
        console.log('not logged in')
        // this.userCreated = false;
        // this.user = new User('', '','', '', false,'','');
        //console.log('llkj - no user?????', this.user);
      } else {

        //console.log('what is result??? api.me???', result)
        this.userCreated = true;
        this.showPhoto = !!result.image;
        // this.user:{
        //this.userId,//cognitoId
        //result.conversations,

        this.profileForm.setValue({
              'userData':{
                'userId':result.id,
                'goal':result.bio,
                'firstName':result.bio,
                'lastName':result.bio
              }
            })
        this.userId = result.id;
        //result.messages,
        // this.user.username = result.username,
        this.firstname = result.firstname,
          this.lastname = result.lastname,
          // result.registered,
          this.goal = result.bio;
        // result.image
        // }
        //this.user = result;




        // this.render();

        //console.log('llkl', result)
      }
    }).catch(err => console.log('there is an erroro!', err));
  }

  getType(): string {
    return this.userCreated ? 'UpdateMember' : 'CreateMember';
  }

  render() {
    //console.log('????',this.goal, this.userId)
    this.profileForm = this.formBuilder.group({
      // firstName: [this.firstname],
      // lastName: [this.lastname],
      // userId:[this.user.id],
      // goal: [this.user.goal],
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
    //console.log('this.profileForm.value.goal',this.profileForm.value.goal);
    const user = {
      id: this.userId,
      username: "a",
      firstname: "b",
      lastname: "c",
      bio: this.profileForm.value.goal,
      image: 'd'
    }
    console.log('what is updateProfile??', this.user)
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
    this.user.image = e.key;
    console.log('what is onImageUploaded??', this.user)
    if (this.userCreated) {
      await this.api.UpdateMember(this.user
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