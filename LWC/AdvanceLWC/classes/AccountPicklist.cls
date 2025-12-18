public  class AccountPicklist {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountPickList( ) {
        try {
            return [
                SELECT Id, Name, Rating
                FROM Account
                LIMIT 7
            ];
        } catch (Exception e) {
            System.debug('Exception caught by Apex: ' + e.getMessage());
            return new List<Account>();
        }
    }
}