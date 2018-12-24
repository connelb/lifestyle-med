/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateConversationMutation = {
  __typename: string;
  // The Conversation's timestamp.
  createdAt: string | null;
  // A unique identifier for the Conversation.
  id: string;
  // The Conversation's messages.
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      // The message content.
      content: string;
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string;
      // The message timestamp. This is also the table sort key.
      createdAt: string | null;
      // Generated id for a message -- read-only
      id: string;
      // Flag denoting if this message has been accepted by the server or not.
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  // The Conversation's name.
  name: string;
};

export type CreateMessageMutation = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  // The message content.
  content: string;
  // The id of the Conversation this message belongs to. This is the table primary key.
  conversationId: string;
  // The message timestamp. This is also the table sort key.
  createdAt: string | null;
  // Generated id for a message -- read-only
  id: string;
  // Flag denoting if this message has been accepted by the server or not.
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type CreateUserMutation = {
  __typename: string;
  // A unique identifier for the user.
  cognitoId: string;
  // A user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  // Generated id for a user. read-only
  id: string;
  // Get a users messages by querying a GSI on the Messages table.
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      // The message content.
      content: string;
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string;
      // The message timestamp. This is also the table sort key.
      createdAt: string | null;
      // Generated id for a message -- read-only
      id: string;
      // Flag denoting if this message has been accepted by the server or not.
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  // The username
  username: string;
  // is the user registered?
  registered: boolean | null;
};

export type CreateUserConversationsMutation = {
  __typename: string;
  associated: Array<{
    __typename: "UserConversations";
    associated: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
    conversation: {
      __typename: "Conversation";
      // The Conversation's timestamp.
      createdAt: string | null;
      // A unique identifier for the Conversation.
      id: string;
      // The Conversation's name.
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      // A unique identifier for the user.
      cognitoId: string;
      // Generated id for a user. read-only
      id: string;
      // The username
      username: string;
      // is the user registered?
      registered: boolean | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    // The Conversation's timestamp.
    createdAt: string | null;
    // A unique identifier for the Conversation.
    id: string;
    // The Conversation's name.
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  userId: string;
};

export type AllMessageQuery = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  // The message content.
  content: string;
  // The id of the Conversation this message belongs to. This is the table primary key.
  conversationId: string;
  // The message timestamp. This is also the table sort key.
  createdAt: string | null;
  // Generated id for a message -- read-only
  id: string;
  // Flag denoting if this message has been accepted by the server or not.
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type AllMessageConnectionQuery = {
  __typename: string;
  messages: Array<{
    __typename: "Message";
    // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
    author: {
      __typename: "User";
      // A unique identifier for the user.
      cognitoId: string;
      // Generated id for a user. read-only
      id: string;
      // The username
      username: string;
      // is the user registered?
      registered: boolean | null;
    } | null;
    // The message content.
    content: string;
    // The id of the Conversation this message belongs to. This is the table primary key.
    conversationId: string;
    // The message timestamp. This is also the table sort key.
    createdAt: string | null;
    // Generated id for a message -- read-only
    id: string;
    // Flag denoting if this message has been accepted by the server or not.
    isSent: boolean | null;
    recipient: {
      __typename: "User";
      // A unique identifier for the user.
      cognitoId: string;
      // Generated id for a user. read-only
      id: string;
      // The username
      username: string;
      // is the user registered?
      registered: boolean | null;
    } | null;
    sender: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type AllMessageFromQuery = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  // The message content.
  content: string;
  // The id of the Conversation this message belongs to. This is the table primary key.
  conversationId: string;
  // The message timestamp. This is also the table sort key.
  createdAt: string | null;
  // Generated id for a message -- read-only
  id: string;
  // Flag denoting if this message has been accepted by the server or not.
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type AllUserQuery = {
  __typename: string;
  // A unique identifier for the user.
  cognitoId: string;
  // A user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  // Generated id for a user. read-only
  id: string;
  // Get a users messages by querying a GSI on the Messages table.
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      // The message content.
      content: string;
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string;
      // The message timestamp. This is also the table sort key.
      createdAt: string | null;
      // Generated id for a message -- read-only
      id: string;
      // Flag denoting if this message has been accepted by the server or not.
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  // The username
  username: string;
  // is the user registered?
  registered: boolean | null;
};

export type MeQuery = {
  __typename: string;
  // A unique identifier for the user.
  cognitoId: string;
  // A user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  // Generated id for a user. read-only
  id: string;
  // Get a users messages by querying a GSI on the Messages table.
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      // The message content.
      content: string;
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string;
      // The message timestamp. This is also the table sort key.
      createdAt: string | null;
      // Generated id for a message -- read-only
      id: string;
      // Flag denoting if this message has been accepted by the server or not.
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  // The username
  username: string;
  // is the user registered?
  registered: boolean | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  // The message content.
  content: string;
  // The id of the Conversation this message belongs to. This is the table primary key.
  conversationId: string;
  // The message timestamp. This is also the table sort key.
  createdAt: string | null;
  // Generated id for a message -- read-only
  id: string;
  // Flag denoting if this message has been accepted by the server or not.
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type SubscribeToNewUCsSubscription = {
  __typename: string;
  associated: Array<{
    __typename: "UserConversations";
    associated: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
    conversation: {
      __typename: "Conversation";
      // The Conversation's timestamp.
      createdAt: string | null;
      // A unique identifier for the Conversation.
      id: string;
      // The Conversation's name.
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      // A unique identifier for the user.
      cognitoId: string;
      // Generated id for a user. read-only
      id: string;
      // The username
      username: string;
      // is the user registered?
      registered: boolean | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    // The Conversation's timestamp.
    createdAt: string | null;
    // A unique identifier for the Conversation.
    id: string;
    // The Conversation's name.
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    // A unique identifier for the user.
    cognitoId: string;
    // Generated id for a user. read-only
    id: string;
    // The username
    username: string;
    // is the user registered?
    registered: boolean | null;
  } | null;
  userId: string;
};

export type SubscribeToNewUsersSubscription = {
  __typename: string;
  // A unique identifier for the user.
  cognitoId: string;
  // A user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  // Generated id for a user. read-only
  id: string;
  // Get a users messages by querying a GSI on the Messages table.
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      // The message content.
      content: string;
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string;
      // The message timestamp. This is also the table sort key.
      createdAt: string | null;
      // Generated id for a message -- read-only
      id: string;
      // Flag denoting if this message has been accepted by the server or not.
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  // The username
  username: string;
  // is the user registered?
  registered: boolean | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateConversation(
    id: string,
    name: string,
    createdAt?: string
  ): Promise<CreateConversationMutation> {
    const statement = `mutation CreateConversation($createdAt: String, $id: ID!, $name: String!) {
        createConversation(createdAt: $createdAt, id: $id, name: $name) {
          __typename
          createdAt
          id
          messages {
            __typename
            messages {
              __typename
              content
              conversationId
              createdAt
              id
              isSent
              sender
            }
            nextToken
          }
          name
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      name
    };
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConversationMutation>response.data.createConversation;
  }
  async CreateMessage(
    conversationId: string,
    createdAt: string,
    id: string,
    content?: string
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($content: String, $conversationId: ID!, $createdAt: String!, $id: ID!) {
        createMessage(content: $content, conversationId: $conversationId, createdAt: $createdAt, id: $id) {
          __typename
          author {
            __typename
            cognitoId
            id
            username
            registered
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            id
            username
            registered
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      createdAt,
      id
    };
    if (content) {
      gqlAPIServiceArguments.content = content;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async CreateUser(username: string): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($username: String!) {
        createUser(username: $username) {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversationId
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
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
          registered
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async CreateUserConversations(
    conversationId: string,
    userId: string
  ): Promise<CreateUserConversationsMutation> {
    const statement = `mutation CreateUserConversations($conversationId: ID!, $userId: ID!) {
        createUserConversations(conversationId: $conversationId, userId: $userId) {
          __typename
          associated {
            __typename
            associated {
              __typename
              conversationId
              userId
            }
            conversation {
              __typename
              createdAt
              id
              name
            }
            conversationId
            user {
              __typename
              cognitoId
              id
              username
              registered
            }
            userId
          }
          conversation {
            __typename
            createdAt
            id
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            id
            username
            registered
          }
          userId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      userId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserConversationsMutation>(
      response.data.createUserConversations
    );
  }
  async AllMessage(
    conversationId: string,
    after?: string,
    first?: number
  ): Promise<AllMessageQuery> {
    const statement = `query AllMessage($after: String, $conversationId: ID!, $first: Int) {
        allMessage(after: $after, conversationId: $conversationId, first: $first) {
          __typename
          author {
            __typename
            cognitoId
            id
            username
            registered
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            id
            username
            registered
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllMessageQuery>response.data.allMessage;
  }
  async AllMessageConnection(
    conversationId: string,
    after?: string,
    first?: number
  ): Promise<AllMessageConnectionQuery> {
    const statement = `query AllMessageConnection($after: String, $conversationId: ID!, $first: Int) {
        allMessageConnection(after: $after, conversationId: $conversationId, first: $first) {
          __typename
          messages {
            __typename
            author {
              __typename
              cognitoId
              id
              username
              registered
            }
            content
            conversationId
            createdAt
            id
            isSent
            recipient {
              __typename
              cognitoId
              id
              username
              registered
            }
            sender
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllMessageConnectionQuery>response.data.allMessageConnection;
  }
  async AllMessageFrom(
    conversationId: string,
    sender: string,
    after?: string,
    first?: number
  ): Promise<AllMessageFromQuery> {
    const statement = `query AllMessageFrom($after: String, $conversationId: ID!, $first: Int, $sender: String!) {
        allMessageFrom(after: $after, conversationId: $conversationId, first: $first, sender: $sender) {
          __typename
          author {
            __typename
            cognitoId
            id
            username
            registered
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            id
            username
            registered
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      sender
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllMessageFromQuery>response.data.allMessageFrom;
  }
  async AllUser(after?: string, first?: number): Promise<AllUserQuery> {
    const statement = `query AllUser($after: String, $first: Int) {
        allUser(after: $after, first: $first) {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversationId
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
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
          registered
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllUserQuery>response.data.allUser;
  }
  async Me(): Promise<MeQuery> {
    const statement = `query Me {
        me {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversationId
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
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
          registered
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <MeQuery>response.data.me;
  }
  SubscribeToNewMessageListener: Observable<
    SubscribeToNewMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewMessage($conversationId: ID!) {
        subscribeToNewMessage(conversationId: $conversationId) {
          __typename
          author {
            __typename
            cognitoId
            id
            username
            registered
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            id
            username
            registered
          }
          sender
        }
      }`
    )
  ) as Observable<SubscribeToNewMessageSubscription>;

  SubscribeToNewUCsListener: Observable<
    SubscribeToNewUCsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewUCs($userId: ID!) {
        subscribeToNewUCs(userId: $userId) {
          __typename
          associated {
            __typename
            associated {
              __typename
              conversationId
              userId
            }
            conversation {
              __typename
              createdAt
              id
              name
            }
            conversationId
            user {
              __typename
              cognitoId
              id
              username
              registered
            }
            userId
          }
          conversation {
            __typename
            createdAt
            id
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            id
            username
            registered
          }
          userId
        }
      }`
    )
  ) as Observable<SubscribeToNewUCsSubscription>;

  SubscribeToNewUsersListener: Observable<
    SubscribeToNewUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewUsers {
        subscribeToNewUsers {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversationId
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
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
          registered
        }
      }`
    )
  ) as Observable<SubscribeToNewUsersSubscription>;
}
