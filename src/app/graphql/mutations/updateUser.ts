import gql from 'graphql-tag';

export default gql`mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      __typename
      id
      username
      firstName
      lastName
      bio
      image
    }
  }`;