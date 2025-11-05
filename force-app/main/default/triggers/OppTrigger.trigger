trigger OppTrigger on Opportunity (before insert) {
    if(trigger.isInsert){
        if(trigger.isBefore){
            for(opportunity opp:trigger.new){
                try{
                    if(opp.amount<0){
                        throw new CustomException('Amount should be greater than 0', 'Error-111');
                    }
                }catch(CustomException e){
                    system.debug('Custom Exception caught. Message : '+e.getErrorMsg()+' Error Code: '+e.getErrorCode());
                    
                }
            }
        }
    }

}