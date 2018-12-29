/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateMeasurementInput = {
  measurementId: string;
  createdAt: string;
  chest?: number | null;
  hips?: number | null;
  leftArm?: number | null;
  leftThigh?: number | null;
  rightArm?: number | null;
  rightThigh?: number | null;
  waist?: number | null;
  weight?: number | null;
};

export type UpdateMeasurementInput = {
  measurementId: string;
  createdAt: string;
  chest?: number | null;
  hips?: number | null;
  leftArm?: number | null;
  leftThigh?: number | null;
  rightArm?: number | null;
  rightThigh?: number | null;
  waist?: number | null;
  weight?: number | null;
};

export type DeleteMeasurementInput = {
  measurementId: string;
  createdAt: string;
};

export type CreateWorkoutInput = {
  workoutId: string;
  createdAt: string;
  userId?: string | null;
  desc?: string | null;
  duration?: string | null;
  capture?: string | null;
};

export type UpdateWorkoutInput = {
  workoutId: string;
  createdAt: string;
  userId?: string | null;
  desc?: string | null;
  duration?: string | null;
  capture?: string | null;
};

export type DeleteWorkoutInput = {
  workoutId: string;
  createdAt: string;
};

export type TableMeasurementFilterInput = {
  measurementId?: TableStringFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  chest?: TableIntFilterInput | null;
  hips?: TableIntFilterInput | null;
  leftArm?: TableIntFilterInput | null;
  leftThigh?: TableIntFilterInput | null;
  rightArm?: TableIntFilterInput | null;
  rightThigh?: TableIntFilterInput | null;
  waist?: TableIntFilterInput | null;
  weight?: TableIntFilterInput | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type TableWorkoutFilterInput = {
  workoutId?: TableStringFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  userId?: TableStringFilterInput | null;
  desc?: TableStringFilterInput | null;
  duration?: TableStringFilterInput | null;
  capture?: TableStringFilterInput | null;
};

export type CreateConversationMutation = {
  __typename: string;
  createdAt: string | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
};

export type CreateMessageMutation = {
  __typename: string;
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type CreateUserMutation = {
  __typename: string;
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
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
      createdAt: string | null;
      id: string;
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      cognitoId: string;
      id: string;
      username: string;
      registered: boolean | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    createdAt: string | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  userId: string;
};

export type CreateMeasurementMutation = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type UpdateMeasurementMutation = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type DeleteMeasurementMutation = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type CreateWorkoutMutation = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type UpdateWorkoutMutation = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type DeleteWorkoutMutation = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type AllMessageQuery = {
  __typename: string;
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type AllMessageConnectionQuery = {
  __typename: string;
  messages: Array<{
    __typename: "Message";
    author: {
      __typename: "User";
      cognitoId: string;
      id: string;
      username: string;
      registered: boolean | null;
    } | null;
    content: string;
    conversationId: string;
    createdAt: string | null;
    id: string;
    isSent: boolean | null;
    recipient: {
      __typename: "User";
      cognitoId: string;
      id: string;
      username: string;
      registered: boolean | null;
    } | null;
    sender: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type AllMessageFromQuery = {
  __typename: string;
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  sender: string | null;
};

export type AllUserQuery = {
  __typename: string;
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
};

export type MeQuery = {
  __typename: string;
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
};

export type GetMeasurementQuery = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type ListMeasurementsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Measurement";
    measurementId: string;
    createdAt: string;
    chest: number | null;
    hips: number | null;
    leftArm: number | null;
    leftThigh: number | null;
    rightArm: number | null;
    rightThigh: number | null;
    waist: number | null;
    weight: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetWorkoutQuery = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type ListWorkoutsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Workout";
    workoutId: string;
    createdAt: string;
    userId: string | null;
    desc: string | null;
    duration: string | null;
    capture: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: string;
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
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
      createdAt: string | null;
      id: string;
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      cognitoId: string;
      id: string;
      username: string;
      registered: boolean | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    createdAt: string | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
  } | null;
  userId: string;
};

export type SubscribeToNewUsersSubscription = {
  __typename: string;
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
};

export type OnCreateMeasurementSubscription = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type OnUpdateMeasurementSubscription = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type OnDeleteMeasurementSubscription = {
  __typename: string;
  measurementId: string;
  createdAt: string;
  chest: number | null;
  hips: number | null;
  leftArm: number | null;
  leftThigh: number | null;
  rightArm: number | null;
  rightThigh: number | null;
  waist: number | null;
  weight: number | null;
};

export type OnCreateWorkoutSubscription = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type OnUpdateWorkoutSubscription = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
};

export type OnDeleteWorkoutSubscription = {
  __typename: string;
  workoutId: string;
  createdAt: string;
  userId: string | null;
  desc: string | null;
  duration: string | null;
  capture: string | null;
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            messages {
              __typename
              nextToken
            }
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
  async CreateMeasurement(
    input: CreateMeasurementInput
  ): Promise<CreateMeasurementMutation> {
    const statement = `mutation CreateMeasurement($input: CreateMeasurementInput!) {
        createMeasurement(input: $input) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMeasurementMutation>response.data.createMeasurement;
  }
  async UpdateMeasurement(
    input: UpdateMeasurementInput
  ): Promise<UpdateMeasurementMutation> {
    const statement = `mutation UpdateMeasurement($input: UpdateMeasurementInput!) {
        updateMeasurement(input: $input) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMeasurementMutation>response.data.updateMeasurement;
  }
  async DeleteMeasurement(
    input: DeleteMeasurementInput
  ): Promise<DeleteMeasurementMutation> {
    const statement = `mutation DeleteMeasurement($input: DeleteMeasurementInput!) {
        deleteMeasurement(input: $input) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMeasurementMutation>response.data.deleteMeasurement;
  }
  async CreateWorkout(
    input: CreateWorkoutInput
  ): Promise<CreateWorkoutMutation> {
    const statement = `mutation CreateWorkout($input: CreateWorkoutInput!) {
        createWorkout(input: $input) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkoutMutation>response.data.createWorkout;
  }
  async UpdateWorkout(
    input: UpdateWorkoutInput
  ): Promise<UpdateWorkoutMutation> {
    const statement = `mutation UpdateWorkout($input: UpdateWorkoutInput!) {
        updateWorkout(input: $input) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkoutMutation>response.data.updateWorkout;
  }
  async DeleteWorkout(
    input: DeleteWorkoutInput
  ): Promise<DeleteWorkoutMutation> {
    const statement = `mutation DeleteWorkout($input: DeleteWorkoutInput!) {
        deleteWorkout(input: $input) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkoutMutation>response.data.deleteWorkout;
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
  async GetMeasurement(
    measurementId: string,
    createdAt: string
  ): Promise<GetMeasurementQuery> {
    const statement = `query GetMeasurement($measurementId: String!, $createdAt: String!) {
        getMeasurement(measurementId: $measurementId, createdAt: $createdAt) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`;
    const gqlAPIServiceArguments: any = {
      measurementId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMeasurementQuery>response.data.getMeasurement;
  }
  async ListMeasurements(
    filter?: TableMeasurementFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMeasurementsQuery> {
    const statement = `query ListMeasurements($filter: TableMeasurementFilterInput, $limit: Int, $nextToken: String) {
        listMeasurements(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            measurementId
            createdAt
            chest
            hips
            leftArm
            leftThigh
            rightArm
            rightThigh
            waist
            weight
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMeasurementsQuery>response.data.listMeasurements;
  }
  async GetWorkout(
    workoutId: string,
    createdAt: string
  ): Promise<GetWorkoutQuery> {
    const statement = `query GetWorkout($workoutId: String!, $createdAt: String!) {
        getWorkout(workoutId: $workoutId, createdAt: $createdAt) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`;
    const gqlAPIServiceArguments: any = {
      workoutId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWorkoutQuery>response.data.getWorkout;
  }
  async ListWorkouts(
    filter?: TableWorkoutFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkoutsQuery> {
    const statement = `query ListWorkouts($filter: TableWorkoutFilterInput, $limit: Int, $nextToken: String) {
        listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            workoutId
            createdAt
            userId
            desc
            duration
            capture
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkoutsQuery>response.data.listWorkouts;
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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
            messages {
              __typename
              nextToken
            }
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
            }
            id
            messages {
              __typename
              nextToken
            }
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

  OnCreateMeasurementListener: Observable<
    OnCreateMeasurementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMeasurement($measurementId: String, $createdAt: String, $chest: Int, $hips: Int, $leftArm: Int) {
        onCreateMeasurement(measurementId: $measurementId, createdAt: $createdAt, chest: $chest, hips: $hips, leftArm: $leftArm) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`
    )
  ) as Observable<OnCreateMeasurementSubscription>;

  OnUpdateMeasurementListener: Observable<
    OnUpdateMeasurementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMeasurement($measurementId: String, $createdAt: String, $chest: Int, $hips: Int, $leftArm: Int) {
        onUpdateMeasurement(measurementId: $measurementId, createdAt: $createdAt, chest: $chest, hips: $hips, leftArm: $leftArm) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`
    )
  ) as Observable<OnUpdateMeasurementSubscription>;

  OnDeleteMeasurementListener: Observable<
    OnDeleteMeasurementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMeasurement($measurementId: String, $createdAt: String, $chest: Int, $hips: Int, $leftArm: Int) {
        onDeleteMeasurement(measurementId: $measurementId, createdAt: $createdAt, chest: $chest, hips: $hips, leftArm: $leftArm) {
          __typename
          measurementId
          createdAt
          chest
          hips
          leftArm
          leftThigh
          rightArm
          rightThigh
          waist
          weight
        }
      }`
    )
  ) as Observable<OnDeleteMeasurementSubscription>;

  OnCreateWorkoutListener: Observable<
    OnCreateWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWorkout($workoutId: String, $createdAt: String, $userId: String, $desc: String, $duration: String) {
        onCreateWorkout(workoutId: $workoutId, createdAt: $createdAt, userId: $userId, desc: $desc, duration: $duration) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`
    )
  ) as Observable<OnCreateWorkoutSubscription>;

  OnUpdateWorkoutListener: Observable<
    OnUpdateWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWorkout($workoutId: String, $createdAt: String, $userId: String, $desc: String, $duration: String) {
        onUpdateWorkout(workoutId: $workoutId, createdAt: $createdAt, userId: $userId, desc: $desc, duration: $duration) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`
    )
  ) as Observable<OnUpdateWorkoutSubscription>;

  OnDeleteWorkoutListener: Observable<
    OnDeleteWorkoutSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWorkout($workoutId: String, $createdAt: String, $userId: String, $desc: String, $duration: String) {
        onDeleteWorkout(workoutId: $workoutId, createdAt: $createdAt, userId: $userId, desc: $desc, duration: $duration) {
          __typename
          workoutId
          createdAt
          userId
          desc
          duration
          capture
        }
      }`
    )
  ) as Observable<OnDeleteWorkoutSubscription>;
}
