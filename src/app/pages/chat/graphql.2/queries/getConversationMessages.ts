import gql from 'graphql-tag';

export default gql`
query getConversationMessages($conversationId: ID!, $after: String, $first: Int) {
  allMessageConnection(conversationId: $conversationId, after: $after, first: $first) {
    __typename
    nextToken,
    messages {
      __typename
      id
      conversationId
      content
      createdAt
      sender
      isSent
    }
  }
}`;


// query getConversationMessages($conversationId: ID!, $after: String, $first: Int) {
//   allMessageConnection(conversationId: $conversationId, after: $after, first: $first) {
//     __typename
//     nextToken,
//     messages {
//       __typename
//       id
//       conversationId
//       content
//       createdAt
//       sender
//       isSent
//     }
//   }
// }

// export default gql`
// query getConversationMessages($after: String, $conversationId: ID!, $first: Int) {
//   allMessageConnection(
//     after: $after
//     conversationId: $conversationId
//     first: $first
//   ) {
//     messages {
//       author {
//         id
//         username
//         firstname
//         lastname
//         registered
//         bio
//         image
//       }
//       content
//       conversationId
//       createdAt
//       id
//       isSent
//       recipient {
//         id
//         username
//         firstname
//         lastname
//         registered
//         bio
//         image
//       }
//       sender
//     }
//     nextToken
//   }
// }`;