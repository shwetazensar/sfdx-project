public class Logger {
    public static void log( String Message, String context){
        Error_Log__c log = new Error_Log__c(name = Message,context__c = context );
        insert log;
    }

}