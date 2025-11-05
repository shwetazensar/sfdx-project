import { LightningElement } from 'lwc';

export default class HotelRooms extends LightningElement {
    selectedHotelRoom = {roomName: 'Deluxe Room', roomPrice: 1000};
    hotelRooms = [
        {
            roomName: 'Deluxe Room',
            roomPrice: 1000,
        },
        {
            roomName: 'Standard Room',
            roomPrice: 500,
        },
        {
            roomName: 'Budget Room',
            roomPrice: 200,
        },

    ];

    // connectedCallback(){
    //     this.template.addEventListener('tileclick',(evt)=>{
    //         console.log('tileClickHandler!');
    //         console.log(evt.detail);
    //         this.selectedHotelRoom = evt.detail;
    //     });
    // }

    tileClickHandler(evt){
        console.log('tileClickHandler!');
        console.log(evt.detail);
        this.selectedHotelRoom = evt.detail;
    }


}