public class ContactTitleUpdater {
    
    @future
    public static void updateContactTitles(List<Id> contactIds) {
        List<Contact> contactsToUpdate = [SELECT Id, Title FROM Contact WHERE Id IN :contactIds];

        for (Contact c : contactsToUpdate) {
            c.Title = 'Customer Success Manager';
        }
        update contactsToUpdate;
        
    }
}