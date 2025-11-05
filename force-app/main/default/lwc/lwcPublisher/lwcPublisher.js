import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class LwcPublisher extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    handleClick() {
        const message = 'Hello from LWC';
        fireEvent(this.pageRef, 'messageEvent', message);
    }
}