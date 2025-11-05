import { LightningElement, track} from 'lwc';

export default class HighlightCities extends LightningElement {
    @track
    cities = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'];

    get cityList() {
        return this.cities.map((city, index, arr) => {
            let className = 'normal-city';
            if (index === 0) {
                className = 'first-city';
            } else if (index === arr.length - 1) {
                className = 'last-city';
            }
            return { name: city, className };
        });
    }

    get FirstCity() {
        return this.cities[0];
    }

    set FirstCity(value) {
        this.cities[0] = value;
    }

    handleChange(event) {
        this.FirstCity = event.target.value;
    }
}