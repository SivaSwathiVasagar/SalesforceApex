public class PractiseApexShare {
    public static void accountShare(Id recordId, Id userId){
        AccountShare a = new AccountShare();
        a.AccountAccessLevel = 'Edit';
        //a.RowCause = 'Manual';
        a.AccountId = recordId;
        a.UserOrGroupId = userId;
        a.OpportunityAccessLevel = 'None';
        a.CaseAccessLevel = 'None';
       // a.ContactAccessLevel = 'Read'; 
        
        Database.SaveResult sr =  Database.Insert(a, false);
        if(sr.isSuccess()){
            system.debug('Successfully Inserted  :: ' + sr.getId());
            system.debug(sr);
        }
        else{
            Database.Error er = sr.getErrors()[0];
            system.debug('Error messsage :: ' + er);
        }
    }
}