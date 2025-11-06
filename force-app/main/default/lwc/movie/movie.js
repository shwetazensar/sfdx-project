import { api, LightningElement } from 'lwc';

export default class Movie extends LightningElement {
    @api
    movie = {
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        Genre: 'Drama'
    };

    handleClick() {
        const movieSelectedEvent = new CustomEvent('movieSelected', {
            detail: this.movie,
            bubbles: true
        });
        this.dispatchEvent(movieSelectedEvent);
    }
}