import gql from 'graphql-tag';

export default gql`
query getallMembers {
  allMember {
    __typename
    id
    username
  }
}`;
