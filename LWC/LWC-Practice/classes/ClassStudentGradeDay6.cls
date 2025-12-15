public class ClassStudentGradeDay6 {
    integer maths;
    integer physics;
    integer tamil;
    string studentName;
    decimal average;
  
    // Constructor without using this. and with diff parameter name
    public ClassStudentGradeDay6(string name, integer mark1,integer mark2,integer mark3)
    { 
        studentName = name;
        maths = mark1;
        physics = mark2;
        tamil = mark3;       
    }
    
    //Method for Average Calculation
    public void averageCalculation()
    {
        integer subjectTotal = maths + physics + tamil;
        average = subjectTotal/3;
        system.debug('Average = ' + average);
    }
    
    //Method for Grade Calculation with return statement
    public string gradeCalculation()
    {	
        averageCalculation();  
        string grade;
        string result;
        if (maths >= 50 && physics >= 50 && tamil >= 50) {
            grade = (average >= 90) ? 'S': (average >= 80) ? 'A': (average >= 70) ? 'B' : 'C';
            result = studentName + 's Result : '+' - Hurray! You have Passed with Grade '+ grade;
        }
        else
        {
            result = studentName + 's Result : '+' - Oops! You have Fail with No Grade';
        }  
        return result;
    }   
}

/*
ClassStudentGradeDay6 student = new ClassStudentGradeDay6('Arun', 70, 80, 50);
string result = student.gradeCalculation();
System.debug(result);
*/