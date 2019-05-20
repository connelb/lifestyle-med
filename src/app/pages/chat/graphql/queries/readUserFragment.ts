import gql from 'graphql-tag';

 export default gql`
  fragment user on User {
    username
  }
  `;

  // export default gql`
  // fragment user on User {
  //   id
  //   cognitoId
  //   username
  // }`;

//   import gql from 'graphql-tag';

// const currentUserQuery = gql`
//   fragment permissionFields on User {
//     permissions {
//       role
//     }
//   }
//   query currentUser {
//     ...permissionFields
//   }
// `;
