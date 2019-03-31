import gql from 'graphql-tag';

export default gql
`mutation UpdateMember( $id:ID!,
    $username: String,
    $firstname:String,
    $lastname:String,
    $registered:Boolean,
    $bio:String,
    $image:String
) {
    updateMember(input:{
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