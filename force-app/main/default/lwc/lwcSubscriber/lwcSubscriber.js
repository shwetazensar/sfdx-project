import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class LwcSubscriber extends LightningElement {
    message = '';

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('messageEvent1', this.handleMessage, this);
    }

    disconnectedCallback() {
        unregisterListener('messageEvent1', this.handleMessage, this);
    }

    handleMessage(payload) {
        this.message = payload;
    }
}