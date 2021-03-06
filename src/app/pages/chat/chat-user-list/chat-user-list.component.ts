import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
// import { AppsyncService } from '../../../appsync.service';
import { AppsyncService } from '../../../providers/appsync.service';

// import getAllUsers from '../graphql/queries/getAllUsers';
import getAllMembers from '../graphql/queries/getAllMembers';
import createConversation from '../graphql/mutations/createConversation';
import createUserConversations from '../graphql/mutations/createUserConversations';
import getUserConversationsConnection from '../graphql/queries/getUserConversationsConnection';
// import subscribeToNewUserUsers from '../graphql/subscriptions/subscribeToNewUsers';
import subscribeToNewMembers from '../graphql/subscriptions/subscribeToNewMembers';
import { constants, addConversation, addUser } from '../chat-helper';
import Conversation from '../types/conversation';
import { ListMembersQuery as UsersQuery1 } from '../../../API.service';
import { getAllMembersQuery as UsersQuery } from '../graphql/operation-result-types';
import * as _ from 'lodash';

import { v4 as uuid } from 'uuid';

import { Analytics } from 'aws-amplify';

import User from '../types/user';
import Member from '../types/member';
//import { IonInfiniteScroll } from '@ionic/angular';
import listAllMembers from '../../../graphql/queries/listAllMembers';
import { ModalController, Events } from '@ionic/angular';
import { ChatModal } from './../chat.modal';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.css']
})
export class ChatUserListComponent {
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  _user;
  // users: User[] = [];
  users: Member[] = [];
  order = 'username';
  no_user = false;
  image;
  profile = "profile/profile.png"

  // modal:any;

  @Input()
  set user(user) {
    this._user = user;
    if (this._user) { this.getAllUsers(); }
  }

  @Output() onNewConvo = new EventEmitter<any>();

  constructor(public modalController: ModalController,private appsync: AppsyncService) { }

  // getAllUsers1() {
  //   this.appsync.hc().then(client => {
  //     const observable = client.watchQuery({
  //       query: getAllMembers,
  //       fetchPolicy: 'cache-and-network'
  //     });

  //     observable.subscribe(({ data }) => {
  //       // console.log("???????",data);
  //       if (!data) {
  //         return console.log('getAllUsers - no data');
  //       }
  //       this.users = _(data.allMember).sortBy('username').reject(['id', this._user.id]).value();
  //       //console.log('getAllUsers - Got data', this.users);
  //       this.no_user = (this.users.length === 0);
  //     });
  //   })
  // };

  getAllUsers() {
    console.log(' getAllUsers() fn called');
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: getAllMembers,
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({ data }) => {
        //console.log("getAllMemrbers return anything???????",data);
        if (!data) {
          return console.log('getAllUsers - no data');
        }
        this.users = _(data.allMember).sortBy('username').reject(['id', this._user.id]).value();
        //console.log('getAllUsers - Got data', this.users);
        this.no_user = (this.users.length === 0);
      });

      observable.subscribeToMore({
        document: subscribeToNewMembers,
        // updateQuery: (prev: UsersQuery, {subscriptionData: {data: {subscribeToNewMembers: user }:userConvo}}:any) => {
        updateQuery: (prev: UsersQuery, { subscriptionData: { data: { subscribeToNewUsers: user } } }) => {
          //console.log('updateQuery on convo subscription', user, prev);
          return this._user.id === user.id ? prev : addUser(prev, user);
        }
      });
    });
  }

  // async modify(item, i) {
  //   let props = {
  //     itemList: this.users,
  //     /*
  //       We pass in an item parameter only when the user clicks on an existing item
  //       and therefore populate an editItem value so that our modal knows this is an edit operation.
  //     */
  //     editItem: item || undefined
  //   };

  //   console.log('props', props);

  //   // Create the modal
  //   this.modal = await this.modalController.create({
  //     component: ChatModal,
  //     componentProps: props
  //   });
  //   // Listen for the modal to be closed...
  //   this.modal.onDidDismiss((result) => {
  //     console.log('what is modal result??',result);
  //     // if (result.data.newItem){
  //     //   // ...and add a new item if modal passes back newItem
  //     //   result.data.itemList.items.push(result.data.newItem)
  //     // } else if (result.data.editItem){
  //     //   // ...or splice the items array if the modal passes back editItem
  //     //   result.data.itemList.items[i] = result.data.editItem
  //     // }
  //     //this.save(result.data.itemList);
  //   })
  //   return this.modal.present()
  // }

  createNewConversation(user, event) {
    event.stopPropagation();

    this.appsync.hc().then(client => {

      const options = {
        query: getUserConversationsConnection,
        variables: { first: constants.conversationFirst }
      };

      const userConvos = client.readQuery(options);
      const path = 'me.conversations.userConversations';
      const userConvo = (_.chain(userConvos).get(path) as any).find(c => _.some(c.associated, ['userId', user.id])).value();

      if (userConvo) {
        return this.onNewConvo.emit(userConvo.conversation);
}

      const newConvo: Conversation = {
        id: uuid(),
        name: _.map([this._user, user], 'username').sort().join(' and '),
        createdAt: `${Date.now()}`
      };

      client.mutate({
        mutation: createConversation,
        variables: newConvo
      })
        .then(() => createUserConvo(client, user.id, newConvo.id))
        .then(() => createUserConvo(client, this._user.id, newConvo.id, true))
        .then(() => this.onNewConvo.emit(newConvo))
        .catch(err => console.log('create convo error', err));
      //Analytics.record('New Conversation');
    });
  }
}

function createUserConvo(client, id, convoId, update = false): Promise<any> {
  const options = {
    mutation: createUserConversations,
    variables: { 'userId': id, 'conversationId': convoId },
    ...(!update ? {} : {
      update(proxy, { data: { createUserConversations: userConvo } }) {
        //console.log('createUserConvo - update fn: Brian, this is userConvo', userConvo);

        const _options = {
          query: getUserConversationsConnection,
          variables: { first: constants.conversationFirst }
        };

        const prev = proxy.readQuery(_options);
        //console.log('retrieve ucs:', prev);
        const data = addConversation(prev, userConvo);
        //console.log('inserted uc in data', JSON.stringify(data, null, 2));
        proxy.writeQuery({ ..._options, data });
      }
    })
  };
  return client.mutate(options);
}
