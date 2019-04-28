import gql from 'graphql-tag';

export default gql`
query getUserConversationConnectionThroughUser($after: String, $first: Int) {
  me {
    id
    registered
    __typename
    conversations(first: $first, after: $after) {
      __typename
      nextToken
      userConversations {
        __typename
        userId
        conversationId
        associated {
          __typename
          userId
        }
        conversation {
          __typename
          id
          name
        }
      }
    }
  }
}`;


// export type getUserConversationConnectionThroughUserQuery = {
//   // Get my user.
//   me:  {
//     // A user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
//     conversations:  {
//       __typename: "UserConverstationsConnection",
//       nextToken: string | null,
//       userConversations:  Array< {
//         __typename: "UserConversations",
//         conversationId: string,
//         conversation:  {
//           __typename: "Conversation",
//           // A unique identifier for the Conversation.
//           id: string,
//           // The Conversation's name.
//           name: string,
//         } | null,
//       } | null > | null,
//     } | null,
//   } | null,
// };



// query getUserConversationConnectionThroughUser($after: String, $first: Int) {
//   me {
//     id
//     registered
//     __typename
//     conversations(first: $first, after: $after) {
//       __typename
//       nextToken
//       userConversations {
//         __typename
//         userId
//         conversationId
//         associated {
//           __typename
//           userId
//         }
//         conversation {
//           __typename
//           id
//           name
//         }
//       }
//     }
//   }
// }`;



// query getUserConversationConnectionThroughUser($after: String, $first: Int) {
//   me {
//     id
//     registered
//     __typename
//     conversations(first: $first, after: $after) {
//       __typename
//       nextToken
//       userConversations {
//         __typename
//         userId
//         conversationId
//         associated {
//           __typename
//           userId
//         }
//         conversation {
//           __typename
//           id
//           name
//         }
//       }
//     }
//   }
// }`;
