import gql from 'graphql-tag';

export default gql`
query GetMember($id: ID!) {
    getMember(id: $id) {
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