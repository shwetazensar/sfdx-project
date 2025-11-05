@isTest
public class AccountHandlerTest {
	
    @isTest
    public static void createAccountTest(){
        
        Test.startTest();// resets governor limits before executing the logic under test. 
        AccountHandler.createAccount('Test Account');
        Test.stopTest();// ends the test logic block, assertions should follow this.
        
        // Before trying out for AccountTrigger
        //Account acc = [SELECT Name FROM Account WHERE Name = 'Test Account' LIMIT 1];
		//System.assertEquals('Test Account', acc.Name);
        
        // Post Trigger creation try below asserts
        Account acc = [SELECT Name FROM Account WHERE Name = 'Test Account-Verified' LIMIT 1];
		System.assertEquals('Test Account-Verified', acc.Name);
    }
    
    @isTest
    public static void updateAccountIndustryTest(){
        //Account acc = new Account(Name = 'TestCo', Industry = 'Finance');
        //insert acc;
        
        // Post Test Data Factory creation try below
        // Use Test Data Factory
        Account acc = TestDataFactory.createAccount('TestCo','Finance');
        
        // call method under test
        Test.startTest();// resets governor limits before executing the logic under test. 
        AccountHandler.updateAccountIndustry(acc.Id,'Technology');
        Test.stopTest();// ends the test logic block, assertions should follow this.
        
        // Validate the result
        Account upadateAcc = [SELECT Industry FROM Account WHERE Id = :acc.Id ];
		System.assertEquals('Technology', upadateAcc.Industry,'Industry should be update to Technology');
    }
}