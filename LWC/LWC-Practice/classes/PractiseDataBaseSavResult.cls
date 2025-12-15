public class PractiseDataBaseSavResult {
    public static void insertObj(){
        List<Account> al = new List<Account>{
        new Account(Name = 'Siv'), 
            new Account(Name = '')};
        Insert al;
        List<Account> a = [Select Id, Name From Account Where CreatedDate = Today];
        system.debug(a);  
    }
}