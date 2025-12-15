public class LoopStatements {
    public static Integer n;
    public static Integer oddSum = 0;
    public static Integer evenSum = 0;
    public static Integer total;
    //public static Integer remainder = n % 2;
    public static void loopingLogic() 
    {
        
        // Find odd and even number between 1 - 20
        for(integer n = 1; n <= 20; n++)
        {
            if( Math.mod(n , 2) != 0)   // we can't use " % " in Apex
            {
                system.debug(n + ' is Odd');
                oddSum += n;            
            }
            else
            {
                evenSum += n;
                system.debug(n + ' is Even');
            }
        }
        integer total = oddSum + evenSum;
        system.debug('oddSum is ' + oddSum + ', evenSum is ' + evenSum + ', Total = ' + total);       
        
        // Print 5 Tables
        integer i = 1;
        Integer j = 5;
        integer output;
        while ( i <= 10){
            output = i * j;
            system.debug(i+ ' * ' + j + ' = ' + output );
            i++;
        }
        
        // Find the logic behind the number series 1y + 2y + ......+ xy
        integer x = 5;
        integer y = 5;
        for (integer z = 1; z <= 30; z++){
            integer multiplyOutcome = z * y;
            system.debug('z is ' + z);
            system.debug('multiplyOutcome ' + multiplyOutcome);    
            if (multiplyOutcome == (x * y)){
                break;
            }
        }
    } 
}