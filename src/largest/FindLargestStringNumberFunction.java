package largest;

import java.util.Arrays;

public class FindLargestStringNumberFunction {
    public String largestNumber(int[] nums) {
        if(nums.length == 0 || nums == null){
            return "";
        }
        
        String[] holder = new String[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            holder[i] = String.valueOf(nums[i]);
        }
        
        Arrays.sort(holder, (s1,s2) -> (s2 + s1).compareTo(s1 + s2));
        
        if(holder[0].charAt(0) == '0')
            return "0";
        
        StringBuilder sb = new StringBuilder();
        
        for(String word : holder){
            sb.append(word);
        }
        
        return sb.toString();
    }
}
