import { createElement } from '@lwc/engine-dom';
import HotelRooms from 'c/hotelRooms';

describe('c-hotel-rooms', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Count no of hotelRoom components and compare', () => {
        // Arrange
        const element = createElement('c-hotel-rooms', {
            is: HotelRooms
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const allHotelRoomComonents = element.shadowRoot.querySelectorAll('c-hotel-room');
        expect(allHotelRoomComonents.length).toBe(3);
    });

    it('Check the title of the Lightning Card', () => {
        // Arrange
        const element = createElement('c-hotel-rooms', {
            is: HotelRooms
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const lightningCardComp = element.shadowRoot.querySelector('lightning-card');
        expect(lightningCardComp.title).toEqual('Hotel Rooms');
    });

    it('Display default selectedHotelRoom values', () => {
        // Arrange
        const element = createElement('c-hotel-rooms', {
            is: HotelRooms
        });

        // Act
        document.body.appendChild(element);
        debugger;
        // Assert
        const roomName = element.shadowRoot.querySelector('.h1RoomName');
        const roomCapacity = element.shadowRoot.querySelector('h3');

        expect(roomName.textContent).toBe('Room Name: Deluxe Room');
        expect(roomCapacity.textContent).toBe('Room Price: 1000');
    });

    it('Update selectedHotelRoom values on tileclick event', async () => {
        // Arrange
        const element = createElement('c-hotel-rooms', {
            is: HotelRooms
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const mockRoom = {roomName:'Standard Room', roomPrice: 500}
        const event = new CustomEvent('tileclick',{
            detail:mockRoom,
            bubbles:true,
            composed:true
        });

        // Dispatching event on layoutItem inside the shadow DOM
        const layoutItem = element.shadowRoot.querySelector('.layoutItemClass');
        layoutItem.dispatchEvent(event);

        // wait for re-rendering - ensures the DOM updates after the event is handled.
        await Promise.resolve();

        const roomName = element.shadowRoot.querySelector('.h1RoomName');
        const roomCapacity = element.shadowRoot.querySelector('h3');
        debugger;
        expect(roomName.textContent).toBe('Room Name: Standard Room');
        expect(roomCapacity.textContent).toBe('Room Price: 500');
    });
});