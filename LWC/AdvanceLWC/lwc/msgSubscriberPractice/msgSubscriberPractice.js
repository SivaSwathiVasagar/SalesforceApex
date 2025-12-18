import { LightningElement, wire } from 'lwc';
import messageChannel from '@salesforce/messageChannel/SimpleMessage__c';
import { APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';

export default class MsgSubscriberPractice extends LightningElement {
    messageReceived;

       @wire(MessageContext)
        context;

        connectedCallback() {
            this.subscribeMessage();
        }
        subscribeMessage(){
            // direct way of specifying 
            // subscribe(this.context, messageChannel, (message) => {
            //     this.message = message.lmsData;
            // }, {scope: APPLICATION_SCOPE})

            // Code readability
            subscribe(this.context, messageChannel, (message) => {
                this.handleMessage(message)}, {scope: APPLICATION_SCOPE})
        }
         handleMessage(message){
                 //console.log('Message Received');
                 this.messageReceived = message.lmsData.value? message.lmsData.value : 'No msg Received';
            }
}