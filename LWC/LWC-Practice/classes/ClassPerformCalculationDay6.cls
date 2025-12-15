public class ClassPerformCalculationDay6 {
    // Variable declaration for Calculation
    integer firstvariable;
    integer secondvariable;
        
    // Constructor using this. and with same parameter name
    public ClassPerformCalculationDay6(integer firstvariable, Integer secondvariable)
    { 
        this.firstvariable = firstvariable;
        this.secondvariable = secondvariable;        
    }
    
    // Method for Calculator
    public void add(){
        integer finalResult = firstvariable + secondvariable;
        system.debug(finalResult);
    }
    public void sub(){
        integer finalResult = firstvariable - secondvariable;
        system.debug(finalResult);
    }
    public void mutliply(){
        integer finalResult = firstvariable * secondvariable;
        system.debug(finalResult);
    }
    public void divide(){
        integer finalResult = firstvariable / secondvariable;
        system.debug(finalResult);
    }  
}


/* ClassObjectCreationDay6 obj = new ClassObjectCreationDay6(5,6);
obj.add();
obj.sub(); */