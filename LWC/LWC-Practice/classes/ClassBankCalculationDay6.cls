public class ClassBankCalculationDay6 {
    integer depositAmount;
    integer withdrawAmount;
    integer bankBalance = 1000; // default value
    
    // Method for Deposit and using METHOD OVERLOADING
    public void deposit(integer depositAmount,integer bankBalance){
        if(depositAmount > 0)
        {
            bankBalance += depositAmount;
            system.debug('Total Balance = ' + bankBalance); 
        }
        else{
            system.debug('Deposit Amount should be Positive');
        }     
    }
    // Method for Deposit   
    public void deposit(integer depositAmount){
        if(depositAmount > 0)
        {
            bankBalance += depositAmount;
            system.debug('Total Balance = ' + bankBalance); 
        }
        else{
            system.debug('Deposit Amount should be Positive');
        }     
    }
    
    // Method for Withdraw
    public void withdraw(integer withdrawAmount){
        if((bankBalance >= withdrawAmount) && (withdrawAmount > 0))
        {
            bankBalance -= withdrawAmount;
            system.debug('Total Balance = ' + bankBalance);    
        }
        else
        {
            system.debug('Withdrawal= '+ withdrawAmount + ' , ' + 'Bank Balance= '+ bankBalance);
            system.debug('Either your withdraw amount is "Invalid" or "Insufficient Balance"');
        }       
    }
}

/*
ClassBankCalculationDay6 bank = new ClassBankCalculationDay6();
//Calling Deposit with user balance
bank.deposit(1000, 500);
//Calling Deposit with default balance
bank.deposit(1000);
//Calling Withdraw
bank.withdraw(200);
bank.withdraw(-900);
*/