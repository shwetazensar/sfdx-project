trigger contactTrigger12 on Contact (before insert) {
    
    if(trigger.isinsert)
    {
        if(trigger.isBefore){
            contactHandlerClass.beforeInsert(trigger.new);           
        }
                
    }
}