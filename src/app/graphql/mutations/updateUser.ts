import gql from 'graphql-tag';

export default gql`
mutation UpdateUser(
  $cognitoId: ID!,
  $username: String,
  $firstname:String,
  $lastname:String,
  $registered:Boolean,
  $id:ID,
  $bio:String,
  $image:String
) {
    updateUser(input:{
      cognitoId: $cognitoId,
      username: $username,
      firstname:$firstname,
      lastname:$lastname,
      registered:$registered,
      id:$id,
      bio:$bio,
      image:$image}
    ) {
      __typename
      cognitoId
      id
      username
      firstname
      lastname
      registered
      bio
      image
    }
  }`;