
import { LightningElement } from 'lwc';

export default class LoadingLwc extends LightningElement {
    loading = true;
    constructor() {
        super();
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }

    
}