import gql from 'graphql-tag';

export default gql`
query getAllMembers($after: String, $first: Int) {
  AllMember(after: $after, first: $first){ 
    id
    username
    firstname
    lastname
    registered
    bio
    image
  }
}`;




// export default gql`
// query getallMembers {
//   allMember {
//     __typename
//     id
//     username
//   }
// }`;