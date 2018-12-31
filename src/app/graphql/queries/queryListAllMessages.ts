import gql from 'graphql-tag';

export default gql`
query ListAllMessages {
    allMessageConnection(conversationId: "myNewId") {
      messages {
        content
        createdAt
      }
    }
  }`;


