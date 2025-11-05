trigger LeadTrigger on Lead (before insert, before update, before delete,after insert, after update, after delete, after undelete) {
    if(trigger.isExecuting)
    {
        system.debug('Trigger is executing');
    }
    
    system.debug(Trigger.operationType);
    
    if(trigger.isInsert){
        system.debug('Insert Operation Detected');
        if(trigger.isBefore)
        {
            for(Lead l:trigger.new)
            {
                l.LeadSource = 'web';
                System.debug('Name Before Insertion'+ l.LastName);
            }
        }
        else{
            system.debug('After Insert Operation Detected');
            for(Lead l:trigger.new)
            {
                System.debug('Name Before Insertion'+ l.Id);
            }
        }
       
    }
    
     if (Trigger.isUpdate) {
        System.debug('Update operation detected.');
        if (Trigger.isBefore) {
            for (Lead l : Trigger.new) {
                Lead oldL = Trigger.oldMap.get(l.Id);
                if (l.Status != oldL.Status) {
                    l.Title = 'Status changed from ' + oldL.Status;
                }
            }
        } else if (Trigger.isAfter) {
            for (Id id : Trigger.newMap.keySet()) {
                Lead newL = Trigger.newMap.get(id);
                Lead oldL = Trigger.oldMap.get(id);
                System.debug('AFTER UPDATE: ' + oldL.LastName + ' → ' + newL.LastName);
            }
        }
    }
    
}