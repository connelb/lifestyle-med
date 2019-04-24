import * as update from 'immutability-helper';
import {
  getConversationMessagesQuery as MessagesQuery,
  getUserConversationConnectionThroughUserQuery as ConvosQuery,
  getallMembersQuery as UsersQuery
 } from './graphql/operation-result-types';
import Message from './types/message';
import UserConversation from './types/userConversation';
//import User from './types/user';
import Member from './../../types/member';

import * as _ from 'lodash';

export const constants = {
  conversationFirst: 10,
  messageFirst: 10
};

export function unshiftMessage(data: MessagesQuery, message: Message): MessagesQuery {
  if (!data || !_.has(data, 'allMessageConnection.messages')) {
    return {
      allMessageConnection: {
        nextToken: null,
        __typename: 'MessageConnection',
        messages: []
      }
    };
  }

  if (data.allMessageConnection.messages.some(m => m.id === message.id)) {
    return data;
  }

  return update(data, {
    allMessageConnection: {
      messages: {$unshift: [message]}
    }
  });
}

export function pushMessages(data: MessagesQuery, messages: Message[], nextToken: string): MessagesQuery {
  if (!data || !_.has(data, 'allMessageConnection.messages')) {
    return {
      allMessageConnection: {
        nextToken: null,
        __typename: 'MessageConnection',
        messages: []
      }
    };
  }

  return update(data, {
    allMessageConnection: {
      messages: {$push: messages},
      nextToken: {$set: nextToken}
    }
  });
}


// export function addConversation(data: ConvosQuery, uc: UserConversation): ConvosQuery {
//   if (!data || !_.has(data, 'me.conversations.userConversations')) {
//     console.log('attemtong to add conversation to data??, what is data and uc?',data, uc)
//     return {
//       me: {
//         conversations: {
//           nextToken: null,
//           __typename: 'UserConverstationsConnection',
//           userConversations: []
//         }
//       }
//     };
//   }

//   if (data.me.conversations.userConversations.some(_uc => uc.conversationId === _uc.conversationId)) {
//     // console.log('attemtong to add conversation to data??')
//     return data;
//   }
//   // console.log('attemtong to add conversation to data??', data, uc)

//   return update(data, {
//     me: { conversations: { userConversations: {$push: [uc]}} }
//   });
// }


export function addConversation(data: ConvosQuery, uc: UserConversation): ConvosQuery {
  if (!data || !_.has(data, 'me.conversations.userConversations')) {
    return {
      me: {
        conversations: {
          nextToken: null,
          __typename: 'UserConverstationsConnection',
          userConversations: []
        }
      }
    };
  }

  if (data.me.conversations.userConversations.some(_uc => uc.conversationId === _uc.conversationId)) {
    return data;
  }

  return update(data, {
    me: { conversations: { userConversations: {$push: [uc]}} }
  });
}


export function addUser(data: UsersQuery, user: Member): UsersQuery {
  // console.log('what is data??? in addUser', data);
  if (!data || !data.allMember) {
    return { allMember: [] };
  }

  if (data.allMember.some(_user => _user.id === user.id)) {
    return data;
  }

  return update(data, {allMember: {$push: [user]}});
}
// export function addUser(data: UsersQuery, user: User): UsersQuery {
//   if (!data || !data.allUser) {
//     return { allUser: [] };
//   }

//   if (data.allUser.some(_user => _user.id === user.id)) {
//     return data;
//   }

//   return update(data, {allUser: {$push: [user]}});
// }


//******** */

// import * as update from 'immutability-helper';
// import {
//   getConversationMessagesQuery as MessagesQuery,
//   getUserConversationConnectionThroughUserQuery as ConvosQuery,
//   getAllUsersQuery as UsersQuery
//  } from './graphql/operation-result-types';
// import Message from './types/message';
// import UserConversation from './types/userConversation';
// import User from './types/user';

// import * as _ from 'lodash';

// export const constants = {
//   conversationFirst: 10,
//   messageFirst: 10
// };

// export function unshiftMessage(data: MessagesQuery, message: Message): MessagesQuery {
//   if (!data || !_.has(data, 'allMessageConnection.messages')) {
//     return {
//       allMessageConnection: {
//         nextToken: null,
//         __typename: 'MessageConnection',
//         messages: []
//       }
//     };
//   }

//   if (data.allMessageConnection.messages.some(m => m.id === message.id)) {
//     return data;
//   }

//   return update(data, {
//     allMessageConnection: {
//       messages: {$unshift: [message]}
//     }
//   });
// }

// export function pushMessages(data: MessagesQuery, messages: Message[], nextToken: string): MessagesQuery {
//   if (!data || !_.has(data, 'allMessageConnection.messages')) {
//     return {
//       allMessageConnection: {
//         nextToken: null,
//         __typename: 'MessageConnection',
//         messages: []
//       }
//     };
//   }

//   return update(data, {
//     allMessageConnection: {
//       messages: {$push: messages},
//       nextToken: {$set: nextToken}
//     }
//   });
// }


// export function addConversation(data: ConvosQuery, uc: UserConversation): ConvosQuery {
//   if (!data || !_.has(data, 'me.conversations.userConversations')) {
//     return {
//       me: {
//         conversations: {
//           nextToken: null,
//           __typename: 'UserConverstationsConnection',
//           userConversations: []
//         }
//       }
//     };
//   }

//   if (data.me.conversations.userConversations.some(_uc => uc.conversationId === _uc.conversationId)) {
//     return data;
//   }

//   return update(data, {
//     me: { conversations: { userConversations: {$push: [uc]}} }
//   });
// }
