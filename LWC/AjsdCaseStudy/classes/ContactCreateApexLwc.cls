public class ContactCreateApexLwc {
    @AuraEnabled
    public static string createContact(String lastName, String phone, String accountId){

        Contact obj = new Contact ();
        obj.LastName = lastName;
        obj.Phone = phone;
        obj.AccountId = accountId;
            insert obj;
            return obj.Id;     
    }
}