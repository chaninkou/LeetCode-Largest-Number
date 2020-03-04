package largest;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] nums = {3,99,34,58,6,9};
		
		System.out.println("Input: " + Arrays.toString(nums));
		
		FindLargestStringNumberFunction solution = new FindLargestStringNumberFunction();
		
		System.out.println("Solution: " + solution.largestNumber(nums));
		 
	}
}
