import gql from 'graphql-tag';

export default gql`
mutation createUser($cognitoId: ID!) {
  createUser(input:{
    cognitoId: $cognitoId
  }) {
    __typename
    cognitoId
    username
    registered
    id
    bio
    image
  }
}`;