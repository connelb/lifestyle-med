import gql from 'graphql-tag';

export default gql`
subscription subscribeToNewUCs($userId: ID!) {
  subscribeToNewUCs(userId: $userId) {
    __typename
    userId
    conversationId
    conversation {
      __typename
      id
      name
    }
    associated {
      __typename
      userId
    }
  }
}`;


// import gql from 'graphql-tag';

// export default gql`
// subscription subscribeToNewUCs($userId: ID!) {
//   subscribeToNewUCs(userId: $userId) {
//     __typename
//     userId
//     conversationId
//     conversation {
//       __typename
//       id
//       name
//     }
//     associated {
//       __typename
//       userId
//     }
//   }
// }`;



// export default gql`
// subscription SubscribeToNewUCs($userId: ID!) {
//   subscribeToNewUCs(userId: $userId) {
//     associated {
//       associated {
//         conversationId
//         userId
//       }
//       conversation {
//         createdAt
//         id
//         name
//       }
//       conversationId
//       user {
//         id
//         username
//         firstname
//         lastname
//         registered
//         bio
//         image
//       }
//       userId
//     }
//     conversation {
//       createdAt
//       id
//       messages {
//         nextToken
//       }
//       name
//     }
//     conversationId
//     user {
//       id
//       conversations {
//         nextToken
//       }
//       messages {
//         nextToken
//       }
//       username
//       firstname
//       lastname
//       registered
//       bio
//       image
//     }
//     userId
//   }
// }`;