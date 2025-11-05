public class ContactHandler {
    public static void createContact(string FirstName, string LastName){
        contact c = new contact(firstname=FirstName, lastname=Lastname);
        insert c;
    }
    
    public static void updateContactEmail(id contactId, string Email){
        contact c = [select id, email from contact where id =:contactId];
        c.email = Email;
        update c;
    }
}