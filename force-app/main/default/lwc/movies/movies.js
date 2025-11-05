

import { LightningElement } from 'lwc';

export default class Movies extends LightningElement {
    showMovieList = false;
    selectedMovie = "";
    selectedReleaseYear = "";
    selectedGenre = "";

    
    movies = [
        {name: 'The Shawshank Redemption', Releaseyear: 1994, Genre: 'Drama'},
        {name: 'The Godfather', Releaseyear: 1972, Genre: 'Crime'},
        {name: 'The Godfather: Part II', Releaseyear: 1974, Genre: 'Crime'},
        {name: 'The Dark Knight', Releaseyear: 2008, Genre: 'Action'},
        {name: '12 Angry Men', Releaseyear: 1957, Genre: 'Drama'},
        {name: 'Schindler\'s List', Releaseyear: 1993, Genre: 'Drama'},
        {name: 'The Lord of the Rings: The Return of the King', Releaseyear: 2003, Genre: 'Adventure'},
        {name: 'Pulp Fiction', Releaseyear: 1994, Genre: 'Crime'},
    ]

    handleCheckboxChange(event) {
        this.showMovieList = event.target.checked;
    }

    connectedCallback(){
        this.template.addEventListener('movieSelected', this.handleMovieSelected.bind(this));
    }

    handleMovieSelected(event){
        this.selectedMovie = event.detail.name;
        this.selectedReleaseYear = event.detail.releaseYear;
        this.selectedGenre = event.detail.genre;
    }
}