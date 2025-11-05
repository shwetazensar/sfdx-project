public class LeadQueueable implements Queueable{

    public void execute(QueueableContext context){
        // You are dealing with sObjects
        List<Lead> existingRecords = [SELECT Id, LeadSource FROM Lead];
        for(Lead record: existingRecords){
            record.LeadSource = 'Web';
        }
        update existingRecords;
        
        // you can call another queueable class as well
        System.enqueueJob(new ContactQueueable());

        System.debug('LeadQueueable job completed!');
    }
 }