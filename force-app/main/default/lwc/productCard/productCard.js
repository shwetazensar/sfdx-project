import { LightningElement, api } from 'lwc';

export default class ProductCard extends LightningElement {
    _productInfo;

    @api
    get productInfo() {
        return this._productInfo;
    }
  
    set productInfo(value) {
        this._productInfo = { ...value }; 
    }

    handlePriceChange(event) {      
        this._productInfo.productPrice = parseFloat(event.target.value);      
        this.productInfo = { ...this._productInfo };
    }
}