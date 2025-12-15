public class PracticeGetSet {
   public  String studentName {private get;  set; }
    public integer maths { get; set; }
    public void display(){
        
        system.debug(maths);
        system.debug(studentName);
        
    }
}

/*
 PracticeGetSet s = new PracticeGetSet();
studentName = 'Swathi';
//stem.debug(s.studentName);
s.maths =80;
s.display();
*/