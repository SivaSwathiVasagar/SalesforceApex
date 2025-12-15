public class BankDepositDay12 extends BankCalculationDay12 implements IDepositDay12{
    public BankDepositDay12(String accountHolderName, Integer contactNum){
        super(accountHolderName, contactNum);
    }
    
    public void deposit(Integer depositAmount){
        if(depositAmount > 0)
        {
            Bank_Banlance += depositAmount;
            system.debug('Deposited and your Total Balance = ' + Bank_Banlance); 
        }
        else{
            system.debug('Deposit Amount should be Positive');
        }     
    }   
}