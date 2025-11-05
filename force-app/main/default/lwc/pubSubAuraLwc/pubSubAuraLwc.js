import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

/*
pubSubAuraLWC is designed as a bridge between Aura Components and the LWC pubsub event system. Aura components cannot directly access CurrentPageReference, which is required by the pubsub utility for event scoping. This wrapper solves those limitations.
 */

// This LWC will act as a wrapper for pubsub as Aura doesn't get CurrentPageReference 

export default class PubSubAuraLwc extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        // dispatching 'ready' as a custom event, so parent can provide event listener for it. 
        this.dispatchEvent(new CustomEvent('ready'));
    }
    @api registerListener(eventName, callback) {
        registerListener(eventName, callback, this);
    }
    @api unregisterListener(eventName, callback) {
        unregisterListener(eventName, callback, this);
    }
    @api unregisterAllListeners() {
        unregisterAllListeners(this);
    }
    @api fireEvent(eventName, data) {
        fireEvent(this.pageRef, eventName, data);
    }
}