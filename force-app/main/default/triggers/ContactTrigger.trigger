trigger ContactTrigger on Contact (before insert, before update) {
    
    for (Contact contactRec:Trigger.new)
    {
        if(String.isBlank(contactRec.LeadSource))
        {
            contactRec.LeadSource='web';
        }
    
        if(String.isBlank(contactRec.Department))
        {
            contactRec.addError('Department cannot be blank!!');
        }
    }
    
}