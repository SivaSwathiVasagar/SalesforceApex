public class OpportunityDescHandler {
    List<Opportunity> triggerNew;
    List<Opportunity> triggerOld;
    Map<Id, Opportunity> triggerNewMap;
    Map<Id, Opportunity> triggerOldMap;

    public OpportunityDescHandler() {
        triggerNew    = (List<Opportunity>) Trigger.New;
        triggerOld    = (List<Opportunity>) Trigger.Old;
        triggerNewMap = (Map<Id, Opportunity>) Trigger.NewMap;
        triggerOldMap = (Map<Id, Opportunity>) Trigger.OldMap;
    }

     public void doActions(){
        Switch on Trigger.OperationType{
            When Before_Insert{
                onBeforeInsert();
            }
        }
    }

    // When Opp amount greater than 100K and Description is null then throw error
    public void onBeforeInsert(){
         for(Opportunity record : triggerNew){
            if(record.Amount > 1000000 && record.Description == null){
                record.addError('Please fill opp description');
            }
            
        }
    }

     // When Opp Account is null then throw error
       public void onBeforeInsert(){
         for(Opportunity record : triggerNew){
            if(record.AccountId == null){
                record.addError('Please Match Account with Opportunity');
            }
            
        }
    }
}