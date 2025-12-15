public class AccountApexLwc {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(String Rating) {
        if (Rating == null) {
            return new List<Account>();
        }
        try {
            return [
                SELECT Id, Name, AnnualRevenue, Rating
                FROM Account
                WHERE Rating = :Rating
                LIMIT 7
            ];
        } catch (Exception e) {
            System.debug('Exception caught by Apex: ' + e.getMessage());
            return new List<Account>();
        }
    }

    @AuraEnabled
    public static void updateAccountList(String recId, Integer revenue) {
        Account obj = new Account(Id = recId, AnnualRevenue = revenue);
        update obj;
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountAddress(String recId) {
        system.debug('from Apex :' + recId);
        try {
            if (String.isNotBlank(recId)) {
                return [
                    SELECT BillingStreet, BillingCity, BillingState,
                           BillingPostalCode, BillingCountry
                    FROM Account
                    WHERE Id = :recId
                ];
            }
        } catch (Exception e) {
            System.debug('Exception caught by Apex: ' + e.getMessage());
        }
        return new List<Account>();
    }
}
