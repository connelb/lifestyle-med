import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { AppsyncService } from '../appsync.service';
import { AppsyncService } from '../../../providers/appsync.service';
import getUserConversationsConnection from '../graphql/queries/getUserConversationsConnection';
import subscribeToNewUserConversations from '../graphql/subscriptions/subscribeToNewUserConversations';
import { getUserConversationConnectionThroughUserQuery as UserConvosQuery } from '../graphql/operation-result-types';
import { constants, addConversation } from '../chat-helper';
import Conversation from '../types/conversation';
import User from '../types/user';
import * as _ from 'lodash';

import { ObservableQuery } from 'apollo-client';

import {Injectable, Pipe , PipeTransform} from '@angular/core';

@Pipe({ name: 'myfilter' })
export class MyFilterPipe implements PipeTransform {
    transform(conversations: any[], args): any {
        return conversations.filter(convo => convo.name.toLowerCase().includes(args.toLowerCase()) );
    }
}


@Component({
  selector: 'app-chat-convo-list',
  templateUrl: './chat-convo-list.component.html',
  styleUrls: ['./chat-convo-list.component.css']
})
export class ChatConvoListComponent implements OnInit {
  searchString = '';

  nextToken: string;
  conversations: Conversation[] = [];
  _user: User;
  observedQuery: ObservableQuery<UserConvosQuery>;
  subscription: () => void;


  @Input()
  set user(user: User) {
    this._user = user;
    if (this._user) {
      this.getAllConvos();
    }
  }
  @Input() current: Conversation;
  @Output() onConvoClick = new EventEmitter<any>();

  constructor(private appsync: AppsyncService) { }

  ngOnInit() {}

  click(convo) { 
    //console.log('what is convo??', convo)
    this.onConvoClick.emit(convo);
   }

  getAllConvos() {
    this.appsync.hc().then(client => {
      const observable: ObservableQuery<UserConvosQuery> = client.watchQuery({
        query: getUserConversationsConnection,
        variables: { first: constants.conversationFirst},
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({data}) => {
        //console.log('Fetched convos data-getUserConversationsConnection,?????? ', data);
        if (!data || !data.me) { return console.log('getUserConversationsConnection: no data',data); }
        this.conversations = data.me.conversations.userConversations.map(u => u.conversation).filter(c => c);
        this.conversations = _.sortBy(this.conversations, 'name');
        this.nextToken = data.me.conversations.nextToken;
        //console.log('Fetched convos brian', this.conversations);
      });
      
      // : userConvo

      this.subscription = observable.subscribeToMore({
        document: subscribeToNewUserConversations,
        variables: { 'userId': this._user.id },
        updateQuery: (prev: UserConvosQuery, {subscriptionData: {data: {subscribeToNewUCs: userConvo } } }: any) => {
        // updateQuery: (prev: UserConvosQuery, {subscriptionData: {data: subscribeToNewUCs }:userConvo}) => {
          //console.log('updateQuery on convo subscription', userConvo);
          // console.log(JSON.stringify(userConvo, null, 2));
          // console.log(JSON.stringify(prev, null, 2));
          return addConversation(prev, userConvo);
        }
      });
      this.observedQuery = observable;
      return observable;
    });
  }
}
