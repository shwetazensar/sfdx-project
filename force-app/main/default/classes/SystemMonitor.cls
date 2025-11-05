public class SystemMonitor implements ILogger, IAuditor {
    public void log(String msg) {
        System.debug('Logging from SystemMonitor: ' + msg);
    }
}