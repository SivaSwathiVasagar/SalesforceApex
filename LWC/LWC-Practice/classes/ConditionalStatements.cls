public class ConditionalStatements {
    public static Integer english = 100;
    public static Integer tamil = 40;
    public static Integer maths = 70;
    
    public static void getStudentResult() {
        
        // Use ternary to find pass/fail
        string result = (tamil >= 50)? 'Pass':'Fail';
        system.debug('Result :' + result);
        
        // Find average
        // Integer totalMarks = english + tamil + maths;
		// Integer averageOfSubject = (totalMarks / 300) * 100;
        decimal averageOfSubject = ((decimal)(english + tamil + maths)/300)*100; // 300.0
        averageOfSubject = averageOfSubject.setScale(2, RoundingMode.HALF_UP); // To keep decimal upto 2 values
        system.debug('Average : ' + averageOfSubject);
        
        // Highest mark among the three subjects
        if (english > tamil && english > maths) {
            system.debug('Your highest mark is English');
        } 
        else if (tamil > english && tamil > maths) {
            system.debug('Your highest mark is Tamil');
        } 
        else if (maths > english && maths > tamil) {
            system.debug('Your highest mark is Maths');
        } 
        else {
            System.debug('You scored the same marks in all subjects');
        }
        
        // Assign Grade based on Average and Pass condition (all subjects > 50)
        // if (english > 50 && tamil > 50 && maths > 50) {
        // Diff way for above logic
        if (Math.min(english, Math.min(tamil,maths)) >= 50) {
            if (averageOfSubject >= 90) {
                system.debug('Pass & your Grade = S');
            } 
            else if (averageOfSubject >= 80) {
                system.debug('Pass & your Grade = A');
            } 
            else if (averageOfSubject >= 70) {
                system.debug('Pass & your Grade = B');
            } 
            else if (averageOfSubject >= 50) {
                system.debug('Pass & your Grade = C');
            } 
            else {
                system.debug('Fail - No Grade');
            }
        } 
        else {
            system.debug('Fail - One or more subjects below 50');
        }
        
        // Calculator with switch
        String operation = '*';
        Integer a = 10;
        Integer b = 5;
        
        switch on operation {
            when '+' {
                system.debug('Operation Result = ' + (a + b));
            }
            when '-' {
                system.debug('Operation Result = ' + (a - b));
            }
            when '*' {
                system.debug('Operation Result = ' + (a * b));
            }
            when '/' {
                if (b != 0) {
                    system.debug('Operation Result = ' + (a / b));
                } else {
                    system.debug('Operation Result = Infinity');
                }
            }
            when else {
                system.debug('Invalid Operator Used');
            }
        }
    }
}

//ConditionalStatements.getStudentResult();