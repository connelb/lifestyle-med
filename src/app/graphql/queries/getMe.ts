import gql from 'graphql-tag';

export default gql`
query Me {
  me {
    id
    conversations {
      nextToken
      userConversations {
        conversationId
        userId
      }
    }
    messages {
      messages {
        content
        conversationId
        createdAt
        id
        isSent
        sender
      }
      nextToken
    }
    username
    firstname
    lastname
    registered
    bio
    image
  }
}`;


// import gql from 'graphql-tag';

// export default gql`
// query getMe {
//   me {
//     __typename
//     id
//     cognitoId
//     username
//     registered
//   }
// }`;

// query Me {
//   me {
//     id
//     conversations {
//       nextToken
//       userConversations {
//         conversationId
//         userId
//       }
//     }
//     messages {
//       messages {
//         content
//         conversationId
//         createdAt
//         id
//         isSent
//         sender
//       }
//       nextToken
//     }
//     username
//     firstname
//     lastname
//     registered
//     bio
//     image
//   }
// }