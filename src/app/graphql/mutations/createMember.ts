import gql from 'graphql-tag';

export default gql
`mutation CreateMember(
    $id:ID!,
    $username: String,
    $firstname:String,
    $lastname:String,
    $registered:Boolean,
    $bio:String,
    $image:String
) {
    createMember(input:{
        id:$id,
        username: $username,
        firstname:$firstname,
        lastname:$lastname,
        registered:$registered,
        bio:$bio,
        image:$image
    }) {
      __typename
      id
      username
      firstname
      lastname
      registered
      bio
      image
    }
  }`