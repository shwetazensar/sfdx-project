import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    meetingRooms = [{
        name: 'Koshi',
        capacity: 10,
    },
    {
        name: 'Brahmaputra',
        capacity: 20,
    },
    {
        name: 'Sutlej',
        capacity: 30,
    },
    {
        name: 'Indus',
        capacity: 40,
    },
   ]

    bookedMeetingRooms = [];

    connectedCallback(){
        this.template.addEventListener('book', this.handleBook.bind(this));
        this.template.addEventListener('cancel', this.handleCancel.bind(this));
    }

    handleBook(event){
        console.log('In handleBook')
        console.log('Booked Meeting Room: ', event.detail);
        const meetingRoom = event.detail;
        this.bookedMeetingRooms.push(meetingRoom);
        this.meetingRooms = this.meetingRooms.filter(room => room.name !== meetingRoom.name);
    }

    handleCancel(event){
        console.log('In handleCancel')
        console.log('Cancelled Meeting Room: ', event.detail);
        const meetingRoom = event.detail;
        this.bookedMeetingRooms = this.bookedMeetingRooms.filter(room => room.name !== meetingRoom.name);
        this.meetingRooms.push(meetingRoom);
    }
}