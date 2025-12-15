public class Password {
    //Map<String, Integer> userName = new  Map<String, Integer> {'Swa'=> 123, 'Siv'=> 234}
    //public List<String> userlogin = new List<String>{'Swa','Siv','Tia','log'};
        public List<String> userlogin = new List<String>();
        public List<Integer> pass = new List<Integer>{12,23,12,25};
        Integer getIndex;
    	Integer getPass;
    public password(List<String> userlogin){
        this.userlogin= userlogin;
    }
    
    public void userMap(String userName, Integer password){
        for(String user: userlogin){
            if(user == userName){
                getIndex = userlogin.indexOf(user); 
                getPass = pass.get(getIndex);
                if(getPass == password){
                    System.debug('You are successfully logged in');
                    return;
                }
                else{
                    System.debug('Password Mismatch');
                    return;
                }         
            }     
        }  
	System.debug('User not found');     
    }
}
/*
Password obj1 = new Password();
obj1.userMap('lo',25);
Password obj2 = new Password();
obj2.userMap('Swa',13);


public List<String> userlogin = new List<String>();
userlogin.add('Swa');
userlogin.add('siv');
Password obj2 = new Password(userlogin);
obj2.userMap('Swa',13
*/