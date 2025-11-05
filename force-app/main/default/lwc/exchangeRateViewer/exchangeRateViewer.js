import { LightningElement, track } from 'lwc';
import getCalloutResponseContents from '@salesforce/apex/HttpCalloutNewCtrl.getCalloutResponseContents';

export default class ExchangeRateViewer extends LightningElement {
    @track targetCurrency = 'INR';
    @track exchangeRate;
    @track date;
    @track error;

    get currencyOptions(){
        return [
            { label: 'INR', value: 'INR' },
            { label: 'EUR', value: 'EUR' },
            { label: 'JPY', value: 'JPY' },
            { label: 'CAD', value: 'CAD' },
            { label: 'AUD', value: 'AUD' },
            { label: 'CHF', value: 'CHF' }
        ]
    }

    handleCurrencyChange(evt){
        this.targetCurrency = evt.detail.value;
    }

    handleClick(){
        const baseUrl = 'https://v6.exchangerate-api.com/v6/b400f9288477d4184d65d3d6/pair/USD/';

        const fullUrl = `${baseUrl}${this.targetCurrency}`;

        getCalloutResponseContents({url:fullUrl})
        .then(response => {
            this.exchangeRate = response.conversion_rate;
            this.date = response.time_last_update_utc;
            this.error = null;
        })
        .catch(error => {
            this.error = error;
            this.exchangeRate = null;
            this.date = null;
        }); 
    }
}