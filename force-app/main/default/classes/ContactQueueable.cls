public class ContactQueueable implements Queueable{

     public void execute(QueueableContext context){
        // You are dealing with sObjects
        List<Contact> contacts = [SELECT Id, Title FROM Contact];
        for(Contact c: contacts){
            c.Title = 'Customer Success Manager';
        }
        update contacts;
        System.debug('ContactQueueable job completed!');
    }
}