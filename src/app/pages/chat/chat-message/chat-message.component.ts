import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { AppsyncService } from '../appsync.service';
import { AppsyncService } from '../../../providers/appsync.service';
import Message from '../types/message';
import readUserFragment from '../graphql/queries/readUserFragment';
import User from '../types/user';
import Member from '../types/member';
import Member1 from '../types/member1';
import gql from 'graphql-tag';
import { APIService } from '../../../API.service';
//import getMember from '../graphql/queries/getMember';
import { Auth } from 'aws-amplify';

import { API, graphqlOperation } from "aws-amplify";

// const listQuestions = `
// query listQuestions($id: ID!) {
//   getDeck(id: $id) {
//     name
//     cards {
//       items {
//         id
//         question
//       }
//     }
//   }
// }
// `;

const getMember = `
query getMember($id: ID!) {
  getMember(id: $id) {
    username
  }
}
`;


const USER_ID_PREFIX = 'User:';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() message: Message;
  @Input() fromMe: boolean;
  @Input() isLast = false;
  @Input() isFirst = false;
  @Output() added: EventEmitter<Message> = new EventEmitter();

  // user: User;
  user: Member1;
  createdAt;

  constructor(private API: APIService, private appsync: AppsyncService) {}

  ngOnInit() {
    this.getMember();
  }

  getMember() {
    const query = API.graphql(graphqlOperation(getMember , { id: this.message.sender })) as Promise<any>;
    
    query.then(res => {
      this.user = res.data.getMember;
    });
    }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'message') {
        const chng = changes[propName];
        this.createdAt = chng.currentValue.createdAt.split('_')[0];
      }
    }
  }

  ngAfterViewInit() {
    if (!this.isFirst && !this.isLast) { return; }
    console.log('message: ngAfterViewChecked: ', this.message.id, this.isFirst, this.isLast);
    this.added.emit(this.message);
  }
}
