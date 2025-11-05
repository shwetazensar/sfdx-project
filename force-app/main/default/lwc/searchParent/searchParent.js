import { LightningElement } from 'lwc';

export default class SearchParent extends LightningElement {

    searchList = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 
        'Fig', 'Grape', 'Honeydew', 'Jackfruit', 'Kiwi', 
        'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 
        'Quince', 'Raspberry', 'Strawberry', 'Tomato', 'Ugli Fruit']

    display='';

    handleSearch(event){
        const word = event.detail;

        // const searchResult = this.searchList.filter((item)=>{
        //     return item.toLowerCase() === word.toLowerCase();
        // });
       
        // if(searchResult!=''){
        //     this.display = 'Found';
        // }
        // else{
        //     this.display = 'Not Found';
        // }

        if(this.searchList.includes(word)){
            this.display = 'Found';
        }
        else{
            this.display = 'Not Found';
        }
    }
}