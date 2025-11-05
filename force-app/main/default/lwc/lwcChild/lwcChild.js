import { api, LightningElement } from 'lwc';

export default class LwcChild extends LightningElement {
    @api
    message = '';

    handleNameChange(event) {
        this.message = event.target.value;
    }

    handleSubmit() {
        console.log('message event fired');
        console.log(this.message);
        const messageEvent = new CustomEvent('message', {
            detail: {
                value: this.message
            },
        });
        this.dispatchEvent(messageEvent);
    }
}