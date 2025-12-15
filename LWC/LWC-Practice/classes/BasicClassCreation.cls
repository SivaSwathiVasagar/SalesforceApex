public class BasicClassCreation {
    
    // Variable declaration for Calculation
    integer firstvariable;
    integer secondvariable;
    string operator;
    
    // Varibale declaration for Student subject marks, result & grade calculation
    integer maths;
    integer physics;
    integer tamil;
    string studentName;
    
    // Constructor
    public BasicClassCreation(Integer firstvariable, Integer secondvariable, String operator)
    { 
        // Constructor for Calculation
        this.firstvariable = firstvariable;
        this.secondvariable = secondvariable;
        this.operator = operator;
    }
        
        // Constructor for Student subject marks, result & grade calculation
    public BasicClassCreation(string name, integer mark1,integer mark2,integer mark3)
    {
        maths = mark1;
        physics = mark2;
        tamil = mark3;
        studentName = name;   
    }   
    
    // Method for Calculator
    public void performCalculation()
    {
        switch on this.operator{
            when '+'{integer finalResult = firstvariable + secondvariable;
                     system.debug(finalResult);}
            
            when '-'{integer finalResult = firstvariable - secondvariable;
                     system.debug(finalResult);}
            
            when '/'{integer finalResult = firstvariable / secondvariable;
                     system.debug(finalResult);}
            
            when '*'{integer finalResult = firstvariable * secondvariable;
                     system.debug(finalResult);} 
            when else{
                system.debug('Invalid Operator');
            }
        }        
    }
    
    //Method for Student
        public void gradeCalculation(){
            Integer subjectTotal = maths + physics + tamil;
            decimal average = subjectTotal/3.0;
            string grade;
            if (maths >= 50 && physics >= 50 && tamil >= 50) {
                
                grade = (average >= 90) ? 'S': (average >= 80) ? 'A': (average >= 70) ? 'B' : 'C';
                system.debug(studentName + 's Result: '+' - Hurray! You have Passed with Grade '+ grade);
                    }
            else{
                system.debug( studentName + 's Result: '+' - Oops! You have Fail with No Grade');
            }
               
        }   
}

/*
BasicClassCreation calc = new BasicClassCreation(8,5,'*');
calc.performCalculation();

BasicClassCreation calc2 = new BasicClassCreation(8,5,'+');
calc2.performCalculation();

BasicClassCreation student = new BasicClassCreation('Swathi',80,80,80);
student.gradeCalculation();
*/