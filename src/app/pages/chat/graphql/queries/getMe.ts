import gql from 'graphql-tag';

export default gql`
query getMe {
  me {
    __typename
    id
    username
    registered
  }
}`;

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
