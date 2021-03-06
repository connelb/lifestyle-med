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

export type CreateSleepInput = {
  sleepId: string;
  createdAt: string;
  userId?: string | null;
  updatedAt?: string | null;
  hours?: string | null;
};

export type UpdateSleepInput = {
  sleepId: string;
  createdAt: string;
  userId?: string | null;
  updatedAt?: string | null;
  hours?: string | null;
};

export type DeleteSleepInput = {
  sleepId: string;
  createdAt: string;
};

export type CreateNutritionCommentInput = {
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type UpdateNutritionCommentInput = {
  content?: string | null;
  nutritionId?: string | null;
  createdAt: string;
  id: string;
};

export type DeleteNutritionCommentInput = {
  createdAt: string;
  id: string;
};

export type CreateNutritionInput = {
  nutritionId: string;
  createdAt: string;
  mealType?: string | null;
  userId?: string | null;
  updatedAt?: string | null;
  social?: string | null;
};

export type UpdateNutritionInput = {
  nutritionId: string;
  createdAt: string;
  mealType?: string | null;
  userId?: string | null;
  updatedAt?: string | null;
  social?: string | null;
};

export type DeleteNutritionInput = {
  nutritionId: string;
  createdAt: string;
};

export type CreateWaterInput = {
  waterId: string;
  createdAt: string;
  userId?: string | null;
  updatedAt?: string | null;
  intake?: number | null;
};

export type UpdateWaterInput = {
  waterId: string;
  createdAt: string;
  userId?: string | null;
  updatedAt?: string | null;
  intake?: number | null;
};

export type DeleteWaterInput = {
  waterId: string;
  createdAt: string;
};

export type CreateMemberInput = {
  id: string;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  registered?: boolean | null;
  bio?: string | null;
  image?: string | null;
};

export type UpdateMemberInput = {
  id: string;
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  registered?: boolean | null;
  bio?: string | null;
  image?: string | null;
};

export type DeleteMemberInput = {
  id: string;
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

export type TableSleepFilterInput = {
  sleepId?: TableStringFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  userId?: TableStringFilterInput | null;
  updatedAt?: TableStringFilterInput | null;
  hours?: TableStringFilterInput | null;
};

export type TableNutritionCommentFilterInput = {
  content?: TableStringFilterInput | null;
  nutritionId?: TableIDFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  id?: TableIDFilterInput | null;
};

export type TableIDFilterInput = {
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

export type TableNutritionFilterInput = {
  nutritionId?: TableIDFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  mealType?: TableStringFilterInput | null;
  userId?: TableStringFilterInput | null;
  updatedAt?: TableStringFilterInput | null;
  social?: TableStringFilterInput | null;
};

export type TableWaterFilterInput = {
  waterId?: TableIDFilterInput | null;
  createdAt?: TableStringFilterInput | null;
  userId?: TableStringFilterInput | null;
  updatedAt?: TableStringFilterInput | null;
  intake?: TableIntFilterInput | null;
};

export type TableMemberFilterInput = {
  id?: TableIDFilterInput | null;
  username?: TableStringFilterInput | null;
  firstname?: TableStringFilterInput | null;
  lastname?: TableStringFilterInput | null;
  registered?: TableBooleanFilterInput | null;
  bio?: TableStringFilterInput | null;
  image?: TableStringFilterInput | null;
};

export type TableBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateConversationMutation = {
  __typename: string;
  createdAt: string | null;
  id: string;
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
  name: string;
};

export type CreateMessageMutation = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  sender: string | null;
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
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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

export type CreateSleepMutation = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type UpdateSleepMutation = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type DeleteSleepMutation = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type CreateNutritionCommentMutation = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type UpdateNutritionCommentMutation = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type DeleteNutritionCommentMutation = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type CreateNutritionMutation = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type UpdateNutritionMutation = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type DeleteNutritionMutation = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type CreateWaterMutation = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type UpdateWaterMutation = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type DeleteWaterMutation = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type CreateMemberMutation = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type UpdateMemberMutation = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type DeleteMemberMutation = {
  __typename: string;
  id: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
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
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type AllMessageQuery = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  sender: string | null;
};

export type AllMessageConnectionQuery = {
  __typename: string;
  messages: Array<{
    __typename: "Message";
    // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
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
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    sender: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type AllMessageFromQuery = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  sender: string | null;
};

export type AllMemberQuery = {
  __typename: string;
  id: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
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
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type MeQuery = {
  __typename: string;
  id: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
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
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type Me1Query = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
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

export type GetSleepQuery = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type ListSleepsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Sleep";
    sleepId: string;
    createdAt: string;
    userId: string | null;
    updatedAt: string | null;
    hours: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetNutritionCommentQuery = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type ListNutritionCommentsQuery = {
  __typename: string;
  items: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetNutritionQuery = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type ListNutritionsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Nutrition";
    nutritionId: string;
    createdAt: string;
    mealType: string | null;
    userId: string | null;
    user: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    updatedAt: string | null;
    social: string | null;
    comments: Array<{
      __typename: "NutritionComment";
      content: string;
      nutritionId: string;
      createdAt: string;
      id: string;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetWaterQuery = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type ListWatersQuery = {
  __typename: string;
  items: Array<{
    __typename: "Water";
    waterId: string;
    createdAt: string;
    userId: string | null;
    updatedAt: string | null;
    intake: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetMemberQuery = {
  __typename: string;
  id: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
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
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type ListMembersQuery = {
  __typename: string;
  items: Array<{
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: string;
  // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
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
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
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
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  userId: string;
};

export type SubscribeToNewMembersSubscription = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
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

export type OnCreateSleepSubscription = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type OnUpdateSleepSubscription = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type OnDeleteSleepSubscription = {
  __typename: string;
  sleepId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  hours: string | null;
};

export type OnCreateNutritionCommentSubscription = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type OnUpdateNutritionCommentSubscription = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type OnDeleteNutritionCommentSubscription = {
  __typename: string;
  author: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  content: string;
  nutritionId: string;
  createdAt: string;
  id: string;
};

export type OnCreateNutritionSubscription = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type OnUpdateNutritionSubscription = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type OnDeleteNutritionSubscription = {
  __typename: string;
  nutritionId: string;
  createdAt: string;
  mealType: string | null;
  userId: string | null;
  user: {
    __typename: "Member";
    id: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "MessageConnection";
      nextToken: string | null;
    } | null;
    username: string | null;
    firstname: string | null;
    lastname: string | null;
    registered: boolean | null;
    bio: string | null;
    image: string | null;
  } | null;
  updatedAt: string | null;
  social: string | null;
  comments: Array<{
    __typename: "NutritionComment";
    author: {
      __typename: "Member";
      id: string;
      username: string | null;
      firstname: string | null;
      lastname: string | null;
      registered: boolean | null;
      bio: string | null;
      image: string | null;
    } | null;
    content: string;
    nutritionId: string;
    createdAt: string;
    id: string;
  } | null> | null;
};

export type OnCreateWaterSubscription = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type OnUpdateWaterSubscription = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type OnDeleteWaterSubscription = {
  __typename: string;
  waterId: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string | null;
  intake: number | null;
};

export type OnCreateMemberSubscription = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type OnUpdateMemberSubscription = {
  __typename: string;
  id: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
};

export type OnDeleteMemberSubscription = {
  __typename: string;
  id: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      conversationId: string;
      userId: string;
    } | null> | null;
  } | null;
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
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  registered: boolean | null;
  bio: string | null;
  image: string | null;
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
              id
              username
              firstname
              lastname
              registered
              bio
              image
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
  async CreateSleep(input: CreateSleepInput): Promise<CreateSleepMutation> {
    const statement = `mutation CreateSleep($input: CreateSleepInput!) {
        createSleep(input: $input) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSleepMutation>response.data.createSleep;
  }
  async UpdateSleep(input: UpdateSleepInput): Promise<UpdateSleepMutation> {
    const statement = `mutation UpdateSleep($input: UpdateSleepInput!) {
        updateSleep(input: $input) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSleepMutation>response.data.updateSleep;
  }
  async DeleteSleep(input: DeleteSleepInput): Promise<DeleteSleepMutation> {
    const statement = `mutation DeleteSleep($input: DeleteSleepInput!) {
        deleteSleep(input: $input) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSleepMutation>response.data.deleteSleep;
  }
  async CreateNutritionComment(
    input: CreateNutritionCommentInput
  ): Promise<CreateNutritionCommentMutation> {
    const statement = `mutation CreateNutritionComment($input: CreateNutritionCommentInput!) {
        createNutritionComment(input: $input) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNutritionCommentMutation>response.data.createNutritionComment;
  }
  async UpdateNutritionComment(
    input: UpdateNutritionCommentInput
  ): Promise<UpdateNutritionCommentMutation> {
    const statement = `mutation UpdateNutritionComment($input: UpdateNutritionCommentInput!) {
        updateNutritionComment(input: $input) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNutritionCommentMutation>response.data.updateNutritionComment;
  }
  async DeleteNutritionComment(
    input: DeleteNutritionCommentInput
  ): Promise<DeleteNutritionCommentMutation> {
    const statement = `mutation DeleteNutritionComment($input: DeleteNutritionCommentInput!) {
        deleteNutritionComment(input: $input) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNutritionCommentMutation>response.data.deleteNutritionComment;
  }
  async CreateNutrition(
    input: CreateNutritionInput
  ): Promise<CreateNutritionMutation> {
    const statement = `mutation CreateNutrition($input: CreateNutritionInput!) {
        createNutrition(input: $input) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNutritionMutation>response.data.createNutrition;
  }
  async UpdateNutrition(
    input: UpdateNutritionInput
  ): Promise<UpdateNutritionMutation> {
    const statement = `mutation UpdateNutrition($input: UpdateNutritionInput!) {
        updateNutrition(input: $input) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNutritionMutation>response.data.updateNutrition;
  }
  async DeleteNutrition(
    input: DeleteNutritionInput
  ): Promise<DeleteNutritionMutation> {
    const statement = `mutation DeleteNutrition($input: DeleteNutritionInput!) {
        deleteNutrition(input: $input) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNutritionMutation>response.data.deleteNutrition;
  }
  async CreateWater(input: CreateWaterInput): Promise<CreateWaterMutation> {
    const statement = `mutation CreateWater($input: CreateWaterInput!) {
        createWater(input: $input) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWaterMutation>response.data.createWater;
  }
  async UpdateWater(input: UpdateWaterInput): Promise<UpdateWaterMutation> {
    const statement = `mutation UpdateWater($input: UpdateWaterInput!) {
        updateWater(input: $input) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWaterMutation>response.data.updateWater;
  }
  async DeleteWater(input: DeleteWaterInput): Promise<DeleteWaterMutation> {
    const statement = `mutation DeleteWater($input: DeleteWaterInput!) {
        deleteWater(input: $input) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWaterMutation>response.data.deleteWater;
  }
  async CreateMember(input: CreateMemberInput): Promise<CreateMemberMutation> {
    const statement = `mutation CreateMember($input: CreateMemberInput!) {
        createMember(input: $input) {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMemberMutation>response.data.createMember;
  }
  async UpdateMember(input: UpdateMemberInput): Promise<UpdateMemberMutation> {
    const statement = `mutation UpdateMember($input: UpdateMemberInput!) {
        updateMember(input: $input) {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMemberMutation>response.data.updateMember;
  }
  async DeleteMember(input: DeleteMemberInput): Promise<DeleteMemberMutation> {
    const statement = `mutation DeleteMember($input: DeleteMemberInput!) {
        deleteMember(input: $input) {
          __typename
          id
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              conversationId
              userId
            }
          }
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
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMemberMutation>response.data.deleteMember;
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            conversationId
            createdAt
            id
            isSent
            recipient {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
  async AllMember(after?: string, first?: number): Promise<AllMemberQuery> {
    const statement = `query AllMember($after: String, $first: Int) {
        allMember(after: $after, first: $first) {
          __typename
          id
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              conversationId
              userId
            }
          }
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
          firstname
          lastname
          registered
          bio
          image
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
    return <AllMemberQuery>response.data.allMember;
  }
  async Me(): Promise<MeQuery> {
    const statement = `query Me {
        me {
          __typename
          id
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              conversationId
              userId
            }
          }
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
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <MeQuery>response.data.me;
  }
  async Me1(): Promise<Me1Query> {
    const statement = `query Me1 {
        me1 {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Me1Query>response.data.me1;
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
  async GetSleep(sleepId: string, createdAt: string): Promise<GetSleepQuery> {
    const statement = `query GetSleep($sleepId: String!, $createdAt: String!) {
        getSleep(sleepId: $sleepId, createdAt: $createdAt) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`;
    const gqlAPIServiceArguments: any = {
      sleepId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSleepQuery>response.data.getSleep;
  }
  async ListSleeps(
    filter?: TableSleepFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSleepsQuery> {
    const statement = `query ListSleeps($filter: TableSleepFilterInput, $limit: Int, $nextToken: String) {
        listSleeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            sleepId
            createdAt
            userId
            updatedAt
            hours
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
    return <ListSleepsQuery>response.data.listSleeps;
  }
  async GetNutritionComment(
    id: string,
    createdAt: string
  ): Promise<GetNutritionCommentQuery> {
    const statement = `query GetNutritionComment($id: ID!, $createdAt: AWSDate!) {
        getNutritionComment(id: $id, createdAt: $createdAt) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNutritionCommentQuery>response.data.getNutritionComment;
  }
  async ListNutritionComments(
    filter?: TableNutritionCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNutritionCommentsQuery> {
    const statement = `query ListNutritionComments($filter: TableNutritionCommentFilterInput, $limit: Int, $nextToken: String) {
        listNutritionComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
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
    return <ListNutritionCommentsQuery>response.data.listNutritionComments;
  }
  async GetNutrition(
    nutritionId: string,
    createdAt: string
  ): Promise<GetNutritionQuery> {
    const statement = `query GetNutrition($nutritionId: ID!, $createdAt: AWSDate!) {
        getNutrition(nutritionId: $nutritionId, createdAt: $createdAt) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      nutritionId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNutritionQuery>response.data.getNutrition;
  }
  async ListNutritions(
    filter?: TableNutritionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNutritionsQuery> {
    const statement = `query ListNutritions($filter: TableNutritionFilterInput, $limit: Int, $nextToken: String) {
        listNutritions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            nutritionId
            createdAt
            mealType
            userId
            user {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            updatedAt
            social
            comments {
              __typename
              content
              nutritionId
              createdAt
              id
            }
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
    return <ListNutritionsQuery>response.data.listNutritions;
  }
  async GetWater(waterId: string, createdAt: string): Promise<GetWaterQuery> {
    const statement = `query GetWater($waterId: ID!, $createdAt: String!) {
        getWater(waterId: $waterId, createdAt: $createdAt) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`;
    const gqlAPIServiceArguments: any = {
      waterId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWaterQuery>response.data.getWater;
  }
  async ListWaters(
    filter?: TableWaterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWatersQuery> {
    const statement = `query ListWaters($filter: TableWaterFilterInput, $limit: Int, $nextToken: String) {
        listWaters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            waterId
            createdAt
            userId
            updatedAt
            intake
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
    return <ListWatersQuery>response.data.listWaters;
  }
  async GetMember(id: string): Promise<GetMemberQuery> {
    const statement = `query GetMember($id: ID!) {
        getMember(id: $id) {
          __typename
          id
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              conversationId
              userId
            }
          }
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
          firstname
          lastname
          registered
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMemberQuery>response.data.getMember;
  }
  async ListMembers(
    filter?: TableMemberFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMembersQuery> {
    const statement = `query ListMembers($filter: TableMemberFilterInput, $limit: Int, $nextToken: String) {
        listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
    return <ListMembersQuery>response.data.listMembers;
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
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
              id
              username
              firstname
              lastname
              registered
              bio
              image
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
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          userId
        }
      }`
    )
  ) as Observable<SubscribeToNewUCsSubscription>;

  SubscribeToNewMembersListener: Observable<
    SubscribeToNewMembersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewMembers {
        subscribeToNewMembers {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`
    )
  ) as Observable<SubscribeToNewMembersSubscription>;

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

  OnCreateSleepListener: Observable<OnCreateSleepSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSleep($sleepId: String, $createdAt: String, $userId: String, $updatedAt: AWSDate, $hours: String) {
        onCreateSleep(sleepId: $sleepId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, hours: $hours) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`
    )
  ) as Observable<OnCreateSleepSubscription>;

  OnUpdateSleepListener: Observable<OnUpdateSleepSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSleep($sleepId: String, $createdAt: String, $userId: String, $updatedAt: AWSDate, $hours: String) {
        onUpdateSleep(sleepId: $sleepId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, hours: $hours) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`
    )
  ) as Observable<OnUpdateSleepSubscription>;

  OnDeleteSleepListener: Observable<OnDeleteSleepSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSleep($sleepId: String, $createdAt: String, $userId: String, $updatedAt: AWSDate, $hours: String) {
        onDeleteSleep(sleepId: $sleepId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, hours: $hours) {
          __typename
          sleepId
          createdAt
          userId
          updatedAt
          hours
        }
      }`
    )
  ) as Observable<OnDeleteSleepSubscription>;

  OnCreateNutritionCommentListener: Observable<
    OnCreateNutritionCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNutritionComment($content: String, $nutritionId: ID, $createdAt: AWSDate, $id: ID) {
        onCreateNutritionComment(content: $content, nutritionId: $nutritionId, createdAt: $createdAt, id: $id) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`
    )
  ) as Observable<OnCreateNutritionCommentSubscription>;

  OnUpdateNutritionCommentListener: Observable<
    OnUpdateNutritionCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNutritionComment($content: String, $nutritionId: ID, $createdAt: AWSDate, $id: ID) {
        onUpdateNutritionComment(content: $content, nutritionId: $nutritionId, createdAt: $createdAt, id: $id) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`
    )
  ) as Observable<OnUpdateNutritionCommentSubscription>;

  OnDeleteNutritionCommentListener: Observable<
    OnDeleteNutritionCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNutritionComment($content: String, $nutritionId: ID, $createdAt: AWSDate, $id: ID) {
        onDeleteNutritionComment(content: $content, nutritionId: $nutritionId, createdAt: $createdAt, id: $id) {
          __typename
          author {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          content
          nutritionId
          createdAt
          id
        }
      }`
    )
  ) as Observable<OnDeleteNutritionCommentSubscription>;

  OnCreateNutritionListener: Observable<
    OnCreateNutritionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNutrition($nutritionId: ID, $createdAt: AWSDate, $mealType: String, $userId: String, $updatedAt: AWSDate) {
        onCreateNutrition(nutritionId: $nutritionId, createdAt: $createdAt, mealType: $mealType, userId: $userId, updatedAt: $updatedAt) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`
    )
  ) as Observable<OnCreateNutritionSubscription>;

  OnUpdateNutritionListener: Observable<
    OnUpdateNutritionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNutrition($nutritionId: ID, $createdAt: AWSDate, $mealType: String, $userId: String, $updatedAt: AWSDate) {
        onUpdateNutrition(nutritionId: $nutritionId, createdAt: $createdAt, mealType: $mealType, userId: $userId, updatedAt: $updatedAt) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`
    )
  ) as Observable<OnUpdateNutritionSubscription>;

  OnDeleteNutritionListener: Observable<
    OnDeleteNutritionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNutrition($nutritionId: ID, $createdAt: AWSDate, $mealType: String, $userId: String, $updatedAt: AWSDate) {
        onDeleteNutrition(nutritionId: $nutritionId, createdAt: $createdAt, mealType: $mealType, userId: $userId, updatedAt: $updatedAt) {
          __typename
          nutritionId
          createdAt
          mealType
          userId
          user {
            __typename
            id
            conversations {
              __typename
              nextToken
            }
            messages {
              __typename
              nextToken
            }
            username
            firstname
            lastname
            registered
            bio
            image
          }
          updatedAt
          social
          comments {
            __typename
            author {
              __typename
              id
              username
              firstname
              lastname
              registered
              bio
              image
            }
            content
            nutritionId
            createdAt
            id
          }
        }
      }`
    )
  ) as Observable<OnDeleteNutritionSubscription>;

  OnCreateWaterListener: Observable<OnCreateWaterSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateWater($waterId: ID, $createdAt: String, $userId: String, $updatedAt: AWSDate, $intake: Int) {
        onCreateWater(waterId: $waterId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, intake: $intake) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`
    )
  ) as Observable<OnCreateWaterSubscription>;

  OnUpdateWaterListener: Observable<OnUpdateWaterSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWater($waterId: ID, $createdAt: String, $userId: String, $updatedAt: AWSDate, $intake: Int) {
        onUpdateWater(waterId: $waterId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, intake: $intake) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`
    )
  ) as Observable<OnUpdateWaterSubscription>;

  OnDeleteWaterListener: Observable<OnDeleteWaterSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWater($waterId: ID, $createdAt: String, $userId: String, $updatedAt: AWSDate, $intake: Int) {
        onDeleteWater(waterId: $waterId, createdAt: $createdAt, userId: $userId, updatedAt: $updatedAt, intake: $intake) {
          __typename
          waterId
          createdAt
          userId
          updatedAt
          intake
        }
      }`
    )
  ) as Observable<OnDeleteWaterSubscription>;

  OnCreateMemberListener: Observable<OnCreateMemberSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateMember($id: ID, $username: String, $firstname: String, $lastname: String, $registered: Boolean) {
        onCreateMember(id: $id, username: $username, firstname: $firstname, lastname: $lastname, registered: $registered) {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`
    )
  ) as Observable<OnCreateMemberSubscription>;

  OnUpdateMemberListener: Observable<OnUpdateMemberSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMember($id: ID, $username: String, $firstname: String, $lastname: String, $registered: Boolean) {
        onUpdateMember(id: $id, username: $username, firstname: $firstname, lastname: $lastname, registered: $registered) {
          __typename
          id
          username
          firstname
          lastname
          registered
          bio
          image
        }
      }`
    )
  ) as Observable<OnUpdateMemberSubscription>;

  OnDeleteMemberListener: Observable<OnDeleteMemberSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMember($id: ID, $username: String, $firstname: String, $lastname: String, $registered: Boolean) {
        onDeleteMember(id: $id, username: $username, firstname: $firstname, lastname: $lastname, registered: $registered) {
          __typename
          id
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              conversationId
              userId
            }
          }
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
          firstname
          lastname
          registered
          bio
          image
        }
      }`
    )
  ) as Observable<OnDeleteMemberSubscription>;
}
