public class LeadSchedulable implements Schedulable {
    public void execute(SchedulableContext sc){
        List<Lead> existingRecords = [SELECT Id, LeadSource FROM Lead];
        for(Lead record: existingRecords){
            record.LeadSource = 'Purchased List';
        }
        update existingRecords;
    }
}