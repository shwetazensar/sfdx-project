import { LightningElement } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {
    recordId = '001dM0000316ZytQAE';

    successHandler(evt){
        this.recordId = evt.detail.id;
    }
}