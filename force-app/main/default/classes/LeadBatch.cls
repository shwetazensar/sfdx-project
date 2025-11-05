public class LeadBatch implements Database.Batchable<SObject>{

    /*
     * start method
     * executes only onces
     * return batch scope or records
     * can return up to 50 million records
	*/
    public Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('SELECT Id, LeadSource FROM Lead');
    }
    
    /*
     * execute method
     * executes for each batch/chunk of records
     * must have void return type
     * each execution will get new set of governor limits
	*/
    public void execute(Database.BatchableContext BC, List<Lead> scope){
        for(Lead leadRecord: scope){
            leadRecord.LeadSource = 'Phone Inquiry';
        }
        update scope;
    }
    
    /*
     * finish method
     * executes only onces
     * called after all batches are processed
     * can be used for post processing
	*/
    public void finish(Database.BatchableContext BC){
       System.debug('Batch finished!');
    }
}