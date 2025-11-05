public class ContactDepartmentBatch implements Database.Batchable<SObject> {

    // Start method: defines the scope of records to process
    public Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator('SELECT Id, Department FROM Contact');
    }

    // Execute method: processes each batch of records
    public void execute(Database.BatchableContext BC, List<Contact> scope) {
        for (Contact c : scope) {
            c.Department = 'Salesforce Team';
        }
        update scope;
    }

    // Finish method: logs completion status
    public void finish(Database.BatchableContext BC) {
        System.debug('Batch job completed: All Contact departments updated to Salesforce Team.');
    }
}