import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value = 'red';

    handleChange(event){
        this.value = event.target.value;
    }

    sendValue(){
        console.log('Send value Called');
         const child = this.template.querySelector('c-public-method-child');
         child.setValue(this.value.toLowerCase());
         
    //     child.selectCheckBox(this.value.toLowerCase())
    }

}