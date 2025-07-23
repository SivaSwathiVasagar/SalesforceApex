public class StudentMarks {
    // variable to store 3 sub marks
    integer english = 100;
    integer tamil = 40;
    integer maths = 70;
    public void getStudentResult()
    {
        // use ternary to find pass/fail
        string result = (tamil >= 50)? 'Pass':'Fail';
        system.debug(result);

        // find avg
        // integer totalMarks = english + tamil + maths;
        // integer averageOfSubject = (totalMarks * 100) / 300;
        // to convert integer to decimal
        decimal averageOfSubject = ((decimal)(english + tamil + maths)/300)*100;
        system.debug(averageOfSubject);
        
    }
}
