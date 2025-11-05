import { api, LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class EmployeePublisher extends LightningElement {
    @api
     empList =[
        { id: 1, name: 'John', role:'Developer'},
        { id: 2, name: 'Jane', role:'Manager'},
        { id: 3, name: 'Bob', role:'Manager'},
        { id: 4, name: 'Alice', role:'Hr'},
        { id: 5, name: 'Tom', role:'Developer'}
    ] ; 

    @wire(CurrentPageReference)
    pageRef;

    publishEmployee(){
        console.log('publishEmployee!');
        fireEvent(this.pageRef, 'pubsubpublish', this.empList);
    }
}