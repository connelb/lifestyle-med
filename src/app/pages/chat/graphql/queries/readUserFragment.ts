import gql from 'graphql-tag';

export default gql`
  fragment member on Member {
    id
    username
  }`;

  // export default gql`
  // fragment user on User {
  //   id
  //   cognitoId
  //   username
  // }`;
