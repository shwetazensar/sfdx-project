import { api, LightningElement } from 'lwc';

export default class customLDSRecordForm extends LightningElement {
    @api
    recordId = '006dM00000Eb1WfQAJ';

    @api
    objectApiName;

    handleSucess(evt){
        this.recordId = evt.detail.id;
    }
}