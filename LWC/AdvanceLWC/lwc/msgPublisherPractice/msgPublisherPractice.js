import { LightningElement, wire } from 'lwc';
import messageChannel from '@salesforce/messageChannel/SimpleMessage__c';
import { APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';

export default class MsgPublisherPractice extends LightningElement {
    @wire(MessageContext)
    context;

    message = '';

    handleChange(event) {
        this.message = event.target.value;
    }
    handleClick() {
        //console.log( 'handleClick triggered');
        //console.log('Message Published');

        const msg = {
            lmsData: {
                value: this.message
            }
        }
        publish(this.context, messageChannel, msg);
    }
}