public class MissingEmailException extends Exception {
    string msg;
    
    public missingEmailException(string msg,String s){
        this.msg = msg;
    }
    
    public string errorMsg(){
        return this.msg;
    }
}