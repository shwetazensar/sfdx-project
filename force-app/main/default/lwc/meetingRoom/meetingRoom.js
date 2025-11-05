import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoom;
    @api isBooked = false;

    get buttonLabel() {
        return this.isBooked ? 'Cancel' : 'Book';
    }

    get buttonVariant() {
        return this.isBooked ? 'destructive' : 'brand';
    }

    handleClick() {
        const eventName = this.isBooked ? 'cancel' : 'book';
        this.dispatchEvent(new CustomEvent(eventName, {
            detail: this.meetingRoom,
            bubbles: true,
        }));
    }
}