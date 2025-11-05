import { LightningElement } from 'lwc';

export default class SimpleParent extends LightningElement {

    page = 1;

    // connectedCallback(){
    //     this.template.addEventListener('previous',(event)=>{
    //         console.log(event.detail);
    //         this.page = event.detail;
    //     });
    //     this.template.addEventListener('next',(event)=>{
    //         console.log(event.detail);            
    //         this.page = event.detail;
    //     });
    // }

    handleP(event){
        this.page = event.detail;
    }

    handleN(event){
        this.page = event.detail;
    }

}