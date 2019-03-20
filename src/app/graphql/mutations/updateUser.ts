import gql from 'graphql-tag';

export default gql`
mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      __typename
      cognitoId
      id
      username
      firstname
      lastname
      bio
      image
    }
  }`;