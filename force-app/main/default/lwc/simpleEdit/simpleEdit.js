import { api, LightningElement } from 'lwc';

export default class SimpleEdit extends LightningElement {

    @api
    recordId = '003dM000018Rb83QAC';

    @api
    objectApiName;

    handleSucess(evt){
        this.recordId = evt.detail.id;
    }
}