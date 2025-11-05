@isTest
public class OpportunityTriggerTest {
	@isTest
    public static void isValid(){
        
        opportunity opp = new opportunity(name='abc', closeDate=Date.newInstance(2025,12,2), stageName = ' ');
        insert opp;
        
        opportunity testopp = [select name,stagename from opportunity where id=:opp.id];
        system.assertEquals(testopp.StageName,'Qualification');
    }
}