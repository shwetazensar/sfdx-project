import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import SYSTEM_ALERT_CHANNEL from '@salesforce/messageChannel/systemAlertChannel__c';

export default class ListenerLwc extends LightningElement {
    alert;
    alertClass;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        subscribe(this.messageContext, SYSTEM_ALERT_CHANNEL, (message) => this.handleMessage(message));
    }

    handleMessage(message) {
        this.alert = message;
        this.alertClass = message.type === 'alert' ? 'alert-style' : 'info-style';

        setTimeout(() => {
            this.alert = null;
        }, 10000); // Auto-expire after 10 seconds
    }
}