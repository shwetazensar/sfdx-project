import { LightningElement } from 'lwc';

export default class ToggleParent extends LightningElement {
    message='';

    handleChange(event) {
        this.message = event.target.value;
    }

    handleClick() {
        const comp = this.template.querySelector('c-toggle-child');
        //comp.setToggle = true;
        comp.setToggle();
        comp.displayMessage(this.message);
    }
}