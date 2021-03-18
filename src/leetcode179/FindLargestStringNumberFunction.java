package leetcode179;

import java.util.Arrays;
import java.util.Comparator;

public class FindLargestStringNumberFunction {
    public String largestNumber(int[] nums) {
        if(nums.length == 0 || nums == null){
            return "";
        }
        
        // Make it into a string array first
        String[] holder = new String[nums.length];
        
        // This is the not Lambda version of (s1,s2) -> (s2 + s1).compareTo(s1 + s2))
        Comparator<String> comp = new Comparator<String>(){
			@Override
			public int compare(String o1, String o2) {
				String first = o1 + o2;
				String second = o2 + o1;
				return second.compareTo(first);
			}
        };
        
        // store the integer as string
        for(int i = 0; i < nums.length; i++){
            holder[i] = String.valueOf(nums[i]);
        }
        
        System.out.println(Arrays.toString(holder));
        
        // Sort by comparing them
        Arrays.sort(holder, (s1,s2) -> (s2 + s1).compareTo(s1 + s2));
        
        System.out.println(Arrays.toString(holder));
        
        // if {0,0} should return 0 only, not "00"
        if(holder[0].charAt(0) == '0'){
        	return "0";
        }
        
        StringBuilder sb = new StringBuilder();
        
        for(String word : holder){
            sb.append(word);
        }
        
        return sb.toString();
    }
}
