import { LightningElement } from 'lwc';

export default class SearchBox extends LightningElement {

    keyword = '';
    handleKeyword(event){
        this.keyword = event.target.value;
    }

    handleSearch(){
        const searchEvent = new CustomEvent('search',{
            detail:this.keyword,
            bubbles:true,
        });
        this.dispatchEvent(searchEvent);
        }
}