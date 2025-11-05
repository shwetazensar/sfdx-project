@isTest
public class ContactHandlerTest {
    
    @isTest
    public static void testCreateContact(){
        
        ContactHandler.createContact('Shweta', 'Yenaji');
        
        contact c = [select id, firstname from contact where Firstname='Shweta'];
        system.assertEquals('Shweta',c.FirstName);
       
    }
    
    @isTest
    public static void testUpdateContactEmail(){
        
        contact c = new contact(lastname = 'TestName');
        insert c;
        
        ContactHandler.updateContactEmail(c.Id, 'abc@gmail.com');
        
        contact testc = [select id, email from contact where id=:c.Id];
        system.assertEquals('abc@gmail.com',testc.email);
        
    }
    

}