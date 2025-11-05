import { LightningElement } from 'lwc';

export default class LifecycleDemoParent extends LightningElement {
    showText;

    constructor(){
        super();
        this.showText=false;
        console.log('Parent Constructor called!')
    }

    handleChange(evt){
        this.showText=evt.detail.checked;
    }

    connectedCallback(){
        console.log('Parent connected callback!!')
    }

    renderedCallback(){
        console.log('Parent rendered callback!!')
    }

    errorCallback(error,stack){
        console.log('Parent error callback called');
        console.log('Parent Stack Value '+stack);
        console.log('Parent Error Value '+error);
    }

    disconnectedCallback(){
        console.log('Parent disconnected callback called!')
    }
}