import { LightningElement, track } from 'lwc';

export default class ProductList extends LightningElement {
    @track products = [
        { id: 1, productName: 'Laptop', productPrice: 1200 },
        { id: 2, productName: 'Mouse', productPrice: 25 },
        { id: 3, productName: 'Keyboard', productPrice: 75 },
    ];
}