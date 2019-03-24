import gql from 'graphql-tag';

export default gql`
query getallUsers {
  allUser {
    __typename
    id
    username
  }
}`;
