trigger ContactTrigger1 on Contact (before insert) {
    for (Contact contactRec:Trigger.new)
    {
        if(String.isBlank(contactRec.Title))
        {
            contactRec.Title='Associate';
        }
    }
}