import { LightningElement, track } from 'lwc';
import getDashboardData from '@salesforce/apex/dashboardController.getDashboardData';
 
export default class Dashboard extends LightningElement {
    @track totalAccounts = 0;
    @track totalContacts = 0;
    @track openOpportunities = 0;
    @track accounts = [];
    @track visibleAccounts = [];
    @track page = 1;
    pageSize = 10;
 
    columns = [
        { label: 'Name', fieldName: 'Name', sortable: true },
        { label: 'Industry', fieldName: 'Industry', sortable:true },
        { label: 'Phone', fieldName: 'Phone' }
    ]
 
    sortedBy = 'Name';
    sortedDirection = 'desc';
 
    connectedCallback() {
        getDashboardData().then(
            result => {
                this.totalAccounts = result.totalAccounts;
                this.totalContacts = result.totalContacts;
                this.openOpportunities = result.openOpportunities;
                this.accounts = result.accounts;
                this.updateVisibleAccounts();
            }
        ).catch(error => {
            console.log('Error loading dashboard ' + error);
        });
    }
 
    updateVisibleAccounts() {
        const start = (this.page - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.visibleAccounts = this.accounts.slice(start, end);
    }
 
    handlePrevious() {
        if (this.page > 1) {
            this.page--;
            this.updateVisibleAccounts();
        }
    }
 
    handleNext() {
        if (this.page < this.totalPages) {
            this.page++;
            this.updateVisibleAccounts();
        }
    }
 
    handleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
 
        const cloneAccounts = [...this.accounts];
 
        cloneAccounts.sort((a, b) => {
            let valueA = a[sortedBy] || '';
            let valueB = b[sortedBy] || '';
 
            // Normalize for string comparison
            if (typeof valueA === 'string') valueA = valueA.toLowerCase();
            if (typeof valueB === 'string') valueB = valueB.toLowerCase();
 
            return sortDirection === 'asc'
                ? valueA > valueB ? 1 : valueA < valueB ? -1 : 0
                : valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        });
 
        this.accounts = cloneAccounts;
        this.sortedBy = sortedBy;
        this.sortedDirection = sortDirection;
        this.updateVisibleAccounts();
    }
 
 
    get totalPages() {
        return Math.ceil(this.accounts.length / this.pageSize);
    }
 
    get isFirstPage() {
        return this.page === 1;
    }
 
    get isLastPage() {
        return this.page === this.totalPages;
    }
}