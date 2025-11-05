//o Search products by name using a text input field. Sort the table by any column.

import { LightningElement, track } from 'lwc';

export default class ProductInventoryUsingDataTable extends LightningElement {

    searchTerm = '';
    
    sortedBy = 'Name';
    sortedDirection = 'desc';

    columns = [
        { label: 'Name', fieldName: 'Name', sortable: true },
        { label: 'Category', fieldName: 'Category' },
        { label: 'Price', fieldName: 'Price__c' },
        { label: 'Stock Status', fieldName: 'StockStatus' }
    ];

    @track
    Products = [
        { Name: 'Chaha', Category: 'Category 1', Price__c: 100, StockStatus: 10 },
        { Name: 'Vadapav', Category: 'Category 2', Price__c: 200, StockStatus: 20 },
        { Name: 'Water', Category: 'Category 3', Price__c: 300, StockStatus: 30 },
        { Name: 'Snacks', Category: 'Category 4', Price__c: 400, StockStatus: 40 },
        { Name: 'Lunch', Category: 'Category 5', Price__c: 500, StockStatus: 50 }, 
    ]

    @track
    ProductsToDisplay = this.Products;

    handleChange(event){
        this.searchTerm = event.target.value.toLowerCase();
    }

    handleSearch() {
        this.ProductsToDisplay = this.Products.filter(product => product.Name.toLowerCase().includes(this.searchTerm));
    }

    handleSort(event){
        const { fieldName: sortedBy, sortDirection } = event.detail;

        const newProducts = [...this.ProductsToDisplay];
 
        newProducts.sort((a, b) => {
            let valueA = a[sortedBy] || '';
            let valueB = b[sortedBy] || '';
 
            if (typeof valueA === 'string') valueA = valueA.toLowerCase();
            if (typeof valueB === 'string') valueB = valueB.toLowerCase();
 
            return sortDirection === 'asc'
                ? valueA > valueB ? 1 : valueA < valueB ? -1 : 0
                : valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        });

        this.ProductsToDisplay = newProducts;
        this.sortedBy = sortedBy;
        this.sortedDirection = sortDirection;
    }


}