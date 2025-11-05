import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @api
    value = 'red';
    options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label:  'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Other', value: 'other'}

    ]
    // @api
    // selectCheckBox(colorValue){
    //     const selectedBox = this.options.find(option=>{
    //         return option.value === colorValue;
    //     })
    //     if(selectedBox){
    //         this.value = selectedBox.value;
    //     }
    //     else{
    //         this.value = 'other';
    //     }
    // }
    @api
    setValue(value){
        this.value = value;
        
    }


    // handleChange(event){
    //     console.log('Handle Change Called');

    //     const selectedBox = this.options.find(option=>{
    //         return option.value === event.target.value;
    //     })
    //     if(selectedBox){
    //         this.value = selectedBox.value;
    //     }
    //     else{
    //         this.value = 'other';
    //     }
    // }

}