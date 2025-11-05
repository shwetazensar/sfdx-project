import { createElement } from '@lwc/engine-dom';
import MeetingRooms from 'c/meetingRooms';

describe('c-meeting-rooms', () => {
    let element;

    beforeEach(() => {
        element = createElement('c-meeting-rooms', {
            is: MeetingRooms
        });
        document.body.appendChild(element);
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders available meeting rooms initially', async () => {
        await Promise.resolve(); 
        const roomCards = element.shadowRoot.querySelectorAll('c-meeting-room');
        expect(roomCards.length).toBe(4); 
    });

    it('shows "No rooms booked" message when no rooms are booked', async () => {
        await Promise.resolve();
        const noRoomsMessage = element.shadowRoot.querySelector('p');
        expect(noRoomsMessage).not.toBeNull();
        expect(noRoomsMessage.textContent).toBe(' No rooms booked!!');
    });

    it('books a meeting room and moves it to booked list', async () => {
    const roomToBook = { name: 'Koshi', capacity: 10 };

    const bookEvent = new CustomEvent('book', {
        detail: roomToBook,
        bubbles: true,
        composed: true
    });

    const roomCard = element.shadowRoot.querySelector('c-meeting-room');
    roomCard.dispatchEvent(bookEvent);

    await Promise.resolve();

    const bookedRooms = element.shadowRoot.querySelectorAll('.booking');
    expect(bookedRooms.length).toBeGreaterThan(0);

    const bookedRoomName = bookedRooms[0].meetingRoom.name;
    expect(bookedRoomName).toBe(roomToBook.name);

});

it('cancels a meeting room and moves it back to meetingroom list', async () => {
    const roomToBook = { name: 'Koshi', capacity: 10 };

    const cancel = new CustomEvent('cancel', {
        detail: roomToBook,
        bubbles: true,
        composed: true
    });

    const roomCard = element.shadowRoot.querySelector('c-meeting-room');
    roomCard.dispatchEvent(cancel);

    await Promise.resolve();

    const bookedRooms = element.shadowRoot.querySelectorAll('c-meeting-room');
    expect(bookedRooms.length).toBeGreaterThan(0);

    const bookedRoomName = bookedRooms[0].meetingRoom.name;
    expect(bookedRoomName).toBe(roomToBook.name);

});
});
