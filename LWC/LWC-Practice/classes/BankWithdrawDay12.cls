public class BankWithdrawDay12 extends BankCalculationDay12 implements IWithdrawDay12{
    public BankWithdrawDay12(String accountHolderName, Integer contactNum){
        super(accountHolderName, contactNum);
    }
    public void withdraw(integer withdrawAmount){
        if((Bank_Banlance >= withdrawAmount) && (withdrawAmount > 0))
        {
            Bank_Banlance -= withdrawAmount;
            system.debug('Withdrawal Successfull and your Total Balance = ' + Bank_Banlance);    
        }
        else
        {
            system.debug('Withdrawal= '+ withdrawAmount + ' , ' + 'Bank Balance= '+ Bank_Banlance);
            system.debug('Either your withdraw amount is "Invalid" or "Insufficient Balance"');
        }       
    }
}