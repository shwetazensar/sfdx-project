import { LightningElement } from 'lwc';

export default class DisplayCity extends LightningElement {

    displayDiv=false;
    cities= ['Jaipur','Delhi','Mumbai','Bangalore'];

    handleClick(event){
        this.displayDiv = event.target.checked;
}
}