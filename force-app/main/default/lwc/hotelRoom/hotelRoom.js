import { api, LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class HotelRoom extends LightningElement {
    @api
    hotelRoom={
        roomName: 'Deluxe Room',
        roomPrice: 1000,
    }

    @api
    showRoom = false;

    @wire(CurrentPageReference)
    pageReference;

    selectTileHandler() {
        console.log('selectTileHandler!');
        // Child to Parent communication happens using custom event
 
        // Creating a custom event
        const tileClickEvent = new CustomEvent('tileclick', {
            detail: this.hotelRoom,
            bubbles: true,
        });
 
        // Dispatching the custom event / raise the event
        this.dispatchEvent(tileClickEvent);

        fireEvent(this.pageReference, 'pubsubtileclick', this.hotelRoom);
    }
}