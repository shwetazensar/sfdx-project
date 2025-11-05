import { LightningElement } from 'lwc';

export default class LifecycleDemoChild extends LightningElement {

    text;

    constructor(){
        super();
        this.text = 'Default';
        console.log('Child Constructor called!')
    }

    handleChange(evt){
        this.text = evt.target.value;
    }

    connectedCallback(){
        console.log('Child connected callback!!')
    }

    renderedCallback(){
        console.log('child rendered callback!!')
    }

    errorCallback(){
        console.log('Child error callback called');
    }

    disconnectedCallback(){
        console.log('child disconnected callback called!')
    }


}