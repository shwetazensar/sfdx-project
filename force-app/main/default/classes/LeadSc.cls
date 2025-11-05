public class LeadSc implements Schedulable {
    public void execute(SchedulableContext sc){
        date lastDate = system.today().addDays(-7);
        List<Lead> existingRecords = [SELECT Id, status FROM Lead where LastModifiedDate <:lastDate AND Status NOT IN ('Closed - Converted', 'Closed - Not Converted')];
        for(Lead record: existingRecords){
            record.status = 'Follow-Up Needed';
        }
        update existingRecords;
    }
}