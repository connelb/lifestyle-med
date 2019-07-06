import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppsyncService } from '../../providers/appsync.service';
import { constants, addConversation, addUser } from './chat-helper';
import subscribeToNewMembers from './graphql/subscriptions/subscribeToNewMembers';
import { getAllMembersQuery as UsersQuery } from './graphql/operation-result-types';
import * as _ from 'lodash';
import Member from '../../types/member';
import getAllMembers from './graphql/queries/getAllMembers';
import getMe from './graphql/queries/getMe';

@Component({
    selector: 'chat-modal',
    templateUrl: 'chat.modal.html',
})
export class ChatModal implements OnInit {

    //   itemList: ToDoList;
    //   editItem: ToDoItem;
    //   user: string;
    //   item: ToDoItem;
    _user;
    no_user = false;
    me: Member;
    users: Member[] = [];
    modal;

    constructor(private modalController: ModalController, private appsync: AppsyncService) { }

    ngOnInit() {

        this.appsync.hc().then(client => {
            client.watchQuery({
              query: getMe,
              fetchPolicy: 'cache-only'
            }).subscribe(({ data }) => {
              //console.log('register user, fetch cache  does this work??', data);
              if (data) {
                this.me = data.me;
                this._user = data.me;
              }
            });
          });

        this.appsync.hc().then(client => {
            const observable = client.watchQuery({
                query: getAllMembers,
                fetchPolicy: 'cache-and-network'
            });

            observable.subscribe(({ data }) => {
                //console.log("getAllUsers()???????",this.me.id, 'users', data);
                if (!data) {
                    return console.log('getAllUsers - no data');
                }
                this.users = _(data.allMember).sortBy('username').reject(['id', this.me.id]).value();
                //console.log('getAllUsers - Got data', this.users);
                this.no_user = (this.users.length === 0);
            });

            observable.subscribeToMore({
                document: subscribeToNewMembers,
                // updateQuery: (prev: UsersQuery, {subscriptionData: {data: {subscribeToNewMembers: user }:userConvo}}:any) => {
                updateQuery: (prev: UsersQuery, { subscriptionData: { data: { subscribeToNewUsers: user } } }) => {
                    console.log('updateQuery on convo subscription', user, prev);
                    return this.me.id === user.id ? prev : addUser(prev, user);
                }
            });
        });


        console.log('users???', this.users)
        // getAllUsers();
        /*
          If you pass in an 'editItem' property, then you create a copy to store changes to the existing item
          so that the original is not modified unless the user saves.
        */
        // this.item = this.editItem ? Object.assign({}, this.editItem) : new ToDoItem({})

        let props = {
            itemList: this.users,
            /*
              We pass in an item parameter only when the user clicks on an existing item
              and therefore populate an editItem value so that our modal knows this is an edit operation.
            */
            //editItem: item || undefined
          };

          console.log('props', props);

          // Create the modal
          this.modal = this.modalController.create({
            component: ChatModal,
            componentProps: props
          });
        //   // Listen for the modal to be closed...
          this.modal.onDidDismiss((result) => {
            console.log('what is modal result??',result);
            // if (result.data.newItem){
            //   // ...and add a new item if modal passes back newItem
            //   result.data.itemList.items.push(result.data.newItem)
            // } else if (result.data.editItem){
            //   // ...or splice the items array if the modal passes back editItem
            //   result.data.itemList.items[i] = result.data.editItem
            // }
            //this.save(result.data.itemList);
          })
          return this.modal.present()
        //}

        //this.modalController.oncancel
        //   save() {
        //     this.modalController.dismiss({
        //     //   itemList: this.itemList,
        //       /*
        //         You pass back either a newItem or editItem value depending on whether an edit operation is taking place
        //         so that the list module can decide whether to insert into the items array or splice into it.
        //       */
        //     //   newItem: !this.editItem ? this.item : null,
        //     //   editItem: this.editItem ? this.item : null
        //     });
        //   };

    
            // this.modalController.oncancel({
            //     console.log('model cancelled');

            // })
         

    }

    async cancel() {
        const result: Date = new Date();
        
        await this.modalController.dismiss(result);
      }

    // cancel(){
    //     console.log('model cancelled');
    //     this.modal.onDidDismiss((result) => {
    //             console.log('what is modal result??',result);
    //     })
    //    }
}