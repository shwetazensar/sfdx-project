import { LightningElement } from 'lwc';
import backgroundurl from '@salesforce/resourceUrl/sachin';

export default class HelloWorld extends LightningElement {

    greeting = 'World';
    salesforceImg= backgroundurl;

    handleChange(event) {
        this.greeting = event.target.value;
    }
}