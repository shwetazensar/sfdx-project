import { LightningElement, track } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import systemAlert from '@salesforce/messageChannel/systemAlertChannel__c';
import { wire } from 'lwc';

export default class NotifierLwc extends LightningElement {
    message = '';
    @track
    messages = [];

    @wire(MessageContext)
    messageContext;

    handleChange(event) {
        this.message = event.target.value;
    }

    sendAlert() {

        const payload = {
            message: this.message,
            type: 'alert',
            from: 'NotifierLwc'
        };
        publish(this.messageContext, SYSTEM_ALERT_CHANNEL, payload);
    }
}