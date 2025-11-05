public class LeadAsync {
	@future
    public static void logFutureExecution(String message){
        System.debug('Future method executed with message : '+message);
        
        //// Calling one future method from another is not allowed
        //// You cannot call other async operations (Batch, Queueable, Scheduled) within a future method
        // logFutureExecutionII('Hi');
    }
    
    @future
    public static void logFutureExecutionII(String message){
        System.debug('Future method executed with message II : '+message);
    }
}