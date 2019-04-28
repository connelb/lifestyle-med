import gql from 'graphql-tag';


export default gql`
query getAllMembers {
  allMember {
    __typename
    id
    username
  }
}`;
