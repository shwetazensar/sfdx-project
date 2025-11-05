trigger AccountTrigger1 on Account (after insert) {
    if(trigger.isInsert){
        if(trigger.isAfter){
            list<task> tasks = new list<task>();
            for(Account a:trigger.new)
            {
                task t1 = new Task(whatId= a.Id);
                tasks.add(t1);
            }
            try{
                 insert tasks;
           }
           catch (DmlException e){
                 system.debug('DML Exception caught : '+e.getMessage());
           }
            
        }
    }
}