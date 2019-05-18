import gql from 'graphql-tag';

export default gql`
mutation createUser(
  $id: ID!,
  $username:String,
  $firstname:String,
  $lastname:String,
  $registered:Boolean,
  $bio:String,
  $image:String
) {
  createMember(id: $id,username: $username,firstname:$firstname,lastname:$lastname,registered:$registered, bio:$bio, image:$image) {
    __typename
    id
    username
    firstname
    lastname
    registered
    bio
    image
  }
}`;

// bio: ""
// firstname: ""
// id: "8812546f-3564-4e7a-88c2-6e37fa9ef07a"
// image: ""
// lastname: ""
// registered: false
// username: "chuck5"

// mutation createUser{
//   createMember(input:{
//  id: "a058b829-6b29-4063-b59b-e7afc81ca483",
//  username: "ff",
//  firstname:"ffd",
//  lastname:"gg",
//  registered:true,
//  bio:"LL",
//  image:"bbbb"
//   }) {
//     __typename
//     username
//     firstname
//     lastname
//     registered
//     id
//     bio
//     image
//   }
// }
