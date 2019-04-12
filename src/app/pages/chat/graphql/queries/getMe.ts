import gql from 'graphql-tag';

export default gql`
query Me {
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
