import gql from 'graphql-tag';

export default gql`
query getMe {
  me {
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



// username: result.username,
//           id: result.id,
//           firstname: result.firstname,
//           lastname: result.lastname,
//           registered: result.registered,
//           bio: result.bio,
//           image: result.image

// export default gql`
// query getMe {
//   me {
//     __typename
//     id
//     cognitoId
//     username
//     registered
//   }
// }`;
