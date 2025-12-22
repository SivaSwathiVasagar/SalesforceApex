public without sharing class ContactEmailHandler {

    List<Contact> triggerNew;
    List<Contact> triggerOld;
    Map<Id, Contact> triggerNewMap;
    Map<Id, Contact> triggerOldMap;

    public ContactEmailHandler() {
        triggerNew    = (List<Contact>) Trigger.New;
        triggerOld    = (List<Contact>) Trigger.Old;
        triggerNewMap = (Map<Id, Contact>) Trigger.NewMap;
        triggerOldMap = (Map<Id, Contact>) Trigger.OldMap;
    }

     public void doActions(){
        Switch on Trigger.OperationType{
            When Before_Insert{
                onBeforeInsert();
            }
        }
    }

    public void onBeforeInsert(){
         for(Contact record : triggerNew){
            if(record.Email == null){
                record.Email.addError('Please fill Contact Email');
            }
            
        }
    }
}