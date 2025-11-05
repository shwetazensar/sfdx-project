import { LightningElement,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { unregisterAllListeners } from 'c/pubsub';
import { registerListener } from 'c/pubsub';

export default class SelectedHotelRoom extends LightningElement {

    selectedHotelRoom = {
        roomName: 'Deluxe Room',
        roomPrice: 1000,
    };

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback(){
        registerListener('pubsubtileclick', this.handleTileClick, this)
    }

    handleTileClick(evt){
        this.selectedHotelRoom = evt;
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    
}