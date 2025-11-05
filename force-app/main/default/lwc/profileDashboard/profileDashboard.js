import { LightningElement } from 'lwc';

export default class ProfileDashboard extends LightningElement {
    handleView() {
        console.log('View Profile clicked');
    }

    handleMessage() {
        console.log('Message clicked');
    }
}