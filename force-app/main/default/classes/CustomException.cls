public class CustomException extends Exception {
	string errorCode;
    string errorMsg;
    
    public CustomException(string message,string code){
        this.errorCode = code;
        this.errorMsg = message;
    }
    
    public string getErrorCode(){
        return this.errorCode;
    }
    
    public string getErrorMsg(){
        return this.errorMsg;
    }
    
}