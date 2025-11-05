public class contactHandlerClass {
	public static void beforeInsert(list<contact> newRecords)
    {
        for(contact c: newRecords)
        {
            try{
                if(string.isBlank(c.email)){
                    throw new missingEmailException(' Email Mandatory', 'abc');
                }
            }catch (missingEmailException e){
                system.debug('Custom exception caught with message'+e.errorMsg());
                Logger.log(e.errorMsg(),'From Class');
                
            }
        }
    }
}