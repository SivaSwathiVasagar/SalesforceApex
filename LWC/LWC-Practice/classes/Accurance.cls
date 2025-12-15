public class Accurance {
    List<Integer> repeatedNum = new List<Integer>{1,2,3,4,4};
        //Integer find;
    	Integer count = 0;
        public void displayAccurance(Integer find){
            for(Integer num:repeatedNum ){
                if(num == find){
                    count += 1;
                }
            }
            system.debug('Count of '+ find + ' is : ' + count);
        }
    
}