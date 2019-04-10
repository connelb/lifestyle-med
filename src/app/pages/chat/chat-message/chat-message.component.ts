// import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { AppsyncService } from '../../../providers/appsync.service';
// import Message from '../types/message';
// import readUserFragment from '../graphql/queries/readUserFragment';
// import User from '../types/user';

// const USER_ID_PREFIX = 'User:';

// @Component({
//   selector: 'app-chat-message',
//   templateUrl: './chat-message.component.html',
//   styleUrls: ['./chat-message.component.css']
// })
// export class ChatMessageComponent implements AfterViewInit, OnInit, OnChanges {

//   @Input() message: Message;
//   @Input() fromMe: boolean;
//   @Input() isLast = false;
//   @Input() isFirst = false;
//   @Output() added: EventEmitter<Message> = new EventEmitter();

//   user: User;
//   createdAt;

//   constructor(private appsync: AppsyncService) {}

//   ngOnInit() {
//     this.appsync.hc().then(client => {
//       this.user = client.readFragment({
//         id: USER_ID_PREFIX + this.message.sender,
//         fragment: readUserFragment
//       });
//     });
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     for (let propName in changes) {
//       if (propName === 'message') {
//         const chng = changes[propName];
//         this.createdAt = chng.currentValue.createdAt.split('_')[0];
//       }
//     }
//   }

//   ngAfterViewInit() {
//     if (!this.isFirst && !this.isLast) { return; }
//     console.log('message: ngAfterViewChecked: ', this.message.id, this.isFirst, this.isLast);
//     this.added.emit(this.message);
//   }
// }


import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { AppsyncService } from '../appsync.service';
import { AppsyncService } from '../../../providers/appsync.service';
// import Message from '../types/message';
import Message from '../../../types/message';
import readUserFragment from '../graphql/queries/readUserFragment';
// import User from '../types/user';
import User from '../../../types/user';
import Member from '../../../types/member';

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
  user: Member;
  createdAt;

  constructor(private appsync: AppsyncService) {}

  ngOnInit() {
    this.appsync.hc().then(client => {
      this.user = client.readFragment({
        id: USER_ID_PREFIX + this.message.sender,
        fragment: readUserFragment
      });
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
