import { LightningElement, wire, api } from 'lwc';
import { getRecord, createRecord, deleteRecord, updateRecord } from 'lightning/uiRecordApi';

const fieldArr = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountManagerLDS extends LightningElement {

    // For Create Record
    accountName;
    accountPhone;
    accountWebsite;

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handlePhoneChange(event) {
        this.accountPhone = event.target.value;
    }

    handleUrlChange(event) {
        this.accountWebsite = event.target.value;
    }

    // Button click
    createAccount(){
        const fields = {'Name':this.accountName, 'Phone':this.accountPhone,
             'Website':this.accountWebsite};
        const recordInput = {apiName:'Account', fields};

        // Asynchronous call to the server
        createRecord(recordInput)
        .then(response => {
            console.log('Account created with Id:- ' + response.id);
            this.recordId = response.id;
        })
        .catch(error =>{
            console.error('Error in creating account! ' + error.message);
        });
    }

    //for delete record
    deleteAccount(){
        
        deleteRecord(this.recordId)
            .then(() => {
                console.log('Account deleted successfully.');
                this.recordId = null; // Clear the recordId after deletion
            })
            .catch(error => {
                console.error('Error in deleting account! ' + error.message);
            });

    }

    updateAccount(){

        const fields = {'Name':this.accountName, 'Phone':this.accountPhone,
             'Website':this.accountWebsite};
        const recordInput = {recordId:this.recordId, fields};

        // Asynchronous call to the server
        updateRecord(recordInput)
        .then(response => {
            console.log('Account updated with Id:- ' + response.id);
        })
        .catch(error =>{
            console.error('Error in updating account! ' + error.message);
        });
    }

    // For View Record
    @api
    recordId; // public reactive record Id

    // private reactive accont record.
    @wire(getRecord, { recordId: '$recordId', fields: fieldArr })
    accountRecord;

    get retAccountName() {
        if (this.accountRecord.data) {
            console.log('Company:- ' + this.accountRecord.data.fields.Name.value);
            return 'Company:- ' + this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }
    get retAccountPhone() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }
    get retAccountWebsite() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }

}