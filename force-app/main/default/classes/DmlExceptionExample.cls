public class DmlExceptionExample {
    
    public static void createAcc(String FirstName, Boolean Invalid){
        try{
            if(string.isBlank(FirstName)){
                throw new customException('Name Mandatory','Error - 111');
            }
            if(Invalid){
                throw new customException('Account Invalid', 'Error 112');
            }
            
            account acc= new account(name=FirstName);
            insert acc;
            
        }catch(CustomException e){
            system.debug('Custom Exception caught, Message :'+e.getErrorMsg());
            system.debug('Custom Exception caught, ErrorCode :'+e.getErrorCode());
        }
    }

}