import { api, LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    @api
    pageNumber = 1;
    handlePrevious(){
        console.log('handlePrevious!');
        this.pageNumber--;
        console.log(this.pageNumber);

        const previousEvent = new CustomEvent('previous',{
            detail:this.pageNumber,
            bubbles:true,
        });
        this.dispatchEvent(previousEvent);
    }

    handleNext(){
        console.log('handleNext!');
        this.pageNumber++;
        console.log(this.pageNumber);

        const nextEvent = new CustomEvent('next',{
            detail: this.pageNumber,
            bubbles:true,
        });
        this.dispatchEvent(nextEvent);
    }


}