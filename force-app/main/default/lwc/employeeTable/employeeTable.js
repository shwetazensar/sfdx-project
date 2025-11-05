import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';
import { unregisterAllListeners } from 'c/pubsub';

export default class EmployeeTable extends LightningElement {
    empList =[
        { id: 1, name: 'John', role:'Developer'},
    ]

    columns = [
        { label: 'ID', fieldName: 'id'},
        { label: 'Name', fieldName: 'name' },
        { label: 'Role', fieldName: 'role' },
    ];
    
        @wire(CurrentPageReference)
        pageRef;

        connectedCallback(){
            registerListener('pubsubpublish', this.handleTileClick, this)
        }

        handleTileClick(evt){
            console.log('handleTileClick');
            this.empList = evt;
        }

        disconnectedCallback(){
            unregisterAllListeners(this);
        }
}