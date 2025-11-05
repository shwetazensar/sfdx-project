import { LightningElement, track } from 'lwc';
import getRecordStats from '@salesforce/apex/RecordStatsController.getRecordStats';

export default class showStats extends LightningElement {
    @track selectedObject = 'Case';
    @track totalRecords = 0;
    @track statusBreakdown = [];
    @track statsAvailable = false;

    objectOptions = [
        { label: 'Case', value: 'Case' },
        { label: 'Lead', value: 'Lead' },
        { label: 'Opportunity', value: 'Opportunity' }
    ];

    connectedCallback() {
        this.fetchStats();
    }

    handleObjectChange(event) {
        this.selectedObject = event.detail.value;
        this.fetchStats();
    }

    handleRefresh() {
        this.fetchStats();
    }

    fetchStats() {
        getRecordStats({ objectName: this.selectedObject })
            .then(result => {
                this.totalRecords = result.total;
                this.statusBreakdown = result.statusCounts;
                this.statsAvailable = true;
            })
            .catch(error => {
                console.error('Error fetching stats:', error);
                this.statsAvailable = false;
            });
    }
}