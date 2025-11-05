import { LightningElement } from 'lwc';

export default class DynamicGreeting extends LightningElement {
    greeting = 'World';
    color = 'white';

    handleChange(event) {
        this.greeting = event.target.value;
    }
    handleColor(event) {
        this.color = event.target.value;
        const box= this.template.querySelector('[data-id="greetingBox"]');
        if(box){
            box.style.backgroundColor = this.color;
            box.margin = '100px';
        }
      
    }

}