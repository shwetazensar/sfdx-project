public class ContactTableController {
    public List<contact> contacts {get;set;}
    
    public ContactTableController(){
        contacts = [select FirstName, LastName , email, Phone, MailingCity from Contact];
    }

}