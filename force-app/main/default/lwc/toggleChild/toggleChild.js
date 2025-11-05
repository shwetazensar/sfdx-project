import { api, LightningElement } from 'lwc';

export default class ToggleChild extends LightningElement {
    message='';
    toggle = false;

    @api
    setToggle() {
        this.toggle = !this.toggle;
    }

    @api
    displayMessage(message){
        this.message = message;
    }
}