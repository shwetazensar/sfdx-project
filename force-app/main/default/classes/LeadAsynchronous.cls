public class LeadAsynchronous {

    //@future
    //public static void updateLeadRecords(List<Lead> leads){} // not allowed
        
    @future
    public static void updateLeadRecords(Set<Id> existingRecordIds){
        List<Lead> existingRecords = [SELECT Id, LeadSource FROM Lead WHERE Id IN :existingRecordIds];
        for(Lead record: existingRecords){
            record.LeadSource = 'Web';
        }
        update existingRecords;
        
        // calling another future method = Not allowed
    }
    
    @future
    public static void createLeadRecord(){
        Lead anotherLead = new Lead(LastName='Test Lead Single', Status='Open-Not Contacted', Company='debellate Technologies', Industry='Finance');
        insert anotherLead;
    }
}