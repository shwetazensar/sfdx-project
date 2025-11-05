public class OpportunityQueueable implements Queueable {
    
    public void execute(QueueableContext context){
        date lastDate = system.today().adddays(-30);
        List<opportunity> opps = [SELECT id, stageName, createdDate from opportunity where stagename='Prospecting' AND createdDate <:lastDate];
        for(opportunity opp:opps){
            opp.stageName='Qualification';
        }
        update opps;  
    }
}