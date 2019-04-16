import gql from 'graphql-tag';

export default gql`
subscription subscribeToNewMembers {
  subscribeToNewMembers {
    __typename
    id
    username
  }
}`;

// export default gql`
// subscription subscribeToNewMembers {
//   subscribeToNewMembers {
//     __typename
//     id
//     username
//   }
// }`;