// import { LightningElement,wire } from 'lwc';
// import { CurrentPageReference } from 'lightning/navigation';
// import { registerListener } from 'c/pubsub';
// import { unregisterAllListeners } from 'c/pubsub';

// export default class EmployeeSearch extends LightningElement {

//     emplist = [];
//     List = [];

//     @wire(CurrentPageReference)
//     pageRef;

//     connectedCallback(){
//         registerListener('pubsubpublish', this.handleTileClick, this)
//     }

//     handleTileClick(evt){
//         console.log('handleTileClick');
//         this.empList = evt;
//     }

//     handleSearchEmployee(evt){
//         console.log('handleSearchEmployee');
//         this.List = this.empList.filter(emp => emp.name.includes(evt.target.value));
//     }

//     disconnectedCallback(){
//         unregisterAllListeners(this);
//     }
// }

import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class EmployeeSearch extends LightningElement {
    empList = [];
    List = [];

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        registerListener('pubsubpublish', this.handleTileClick, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleTileClick(evt) {
        console.log('handleTileClick');
        this.empList = evt;
        this.List = evt; // Show full list initially
    }

    handleSearchEmployee(evt) {
        const searchKey = evt.target.value.toLowerCase();
        console.log('handleSearchEmployee', searchKey);

        if (this.empList && searchKey) {
            this.List = this.empList.filter(emp =>
                emp.name.toLowerCase().includes(searchKey)
            );
        } else {
            this.List = this.empList;
        }
    }

    get noResults() {
        return this.List.length === 0;
    }
}