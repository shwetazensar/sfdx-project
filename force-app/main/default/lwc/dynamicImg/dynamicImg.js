import { LightningElement } from 'lwc';
import salesforceImg from '@salesforce/resourceUrl/salesforce';
import trailhead from '@salesforce/resourceUrl/Trailhead';
import einstein from '@salesforce/resourceUrl/Einstein';

export default class DynamicImg extends LightningElement {
    options=[
    {
        label: 'Salesforce',
        value: 'salesforceImg',
    },
    {
        label: 'Trailhead',
        value: 'trailhead',
    },
    {
        label: 'Einstein',
        value: 'einstein',
    }

];

backgroundImg = salesforceImg;

handleImg(event){
    if(event.detail.value == 'salesforceImg'){
       this.backgroundImg = salesforceImg;
    }
    else if(event.detail.value == 'trailhead'){
        this.backgroundImg = trailhead;
    }
    else if(event.detail.value == 'einstein'){
        this.backgroundImg = einstein;
    }

}


}