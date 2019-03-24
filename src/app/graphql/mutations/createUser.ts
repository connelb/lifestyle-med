import gql from 'graphql-tag';

export default gql`
mutation createUser(
 $cognitoId: ID!,
 $username: String,
 $firstname:String,
 $lastname:String,
 $registered:Boolean,
 $id:ID,
 $bio:String,
 $image:String
) {
  createUser(input:{
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
    username
    firstname
    lastname
    registered
    id
    bio
    image
  }
}`;