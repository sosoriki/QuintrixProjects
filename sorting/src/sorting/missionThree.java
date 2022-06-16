package sorting;

/**
 * 
 * merges two sorted
 * arrays and computes the
 * difference in scores
 * @author Kendrick Pham
 *
 */

public class missionThree {
	public static <T extends Comparable<? super T>> int merge(T[] person1, T[] person2, T[] array) {
		int count1 = 0;
		int count2 = 0;
		int difference = 0;
		int i = 0;
		int j = 0;
		int k = 0;
		while(i < person1.length && j < person2.length) {
			if((int)person1[i] < (int)person2[j]) {
				array[k] = person1[i];
				count1 = count1 + (int)person1[i];
				k++;
				i++;
			}
			else {
				array[k] = person2[j];
				count2 = count2 + (int)person2[j];
				k++;
				j++;
			}
		}
		while(i < person1.length) {
			array[k] = person1[i];
			count1 = count1 + (int)person1[i];
			k++;
			i++;
		}
		while(j < person2.length) {
			array[k] = person2[j];
			count2 = count2 + (int)person2[j];
			k++;
			j++;
		}
		difference = Math.abs(count1 - count2);
		return difference;
	}
	
	public static void main(String[] args) {
		Integer[] array1 = {1,3,5,7};
		Integer[] array2 = {2,4,6};
		Integer[] arrayMergeSorted = new Integer[array1.length + array2.length];
		int difference = merge(array1, array2, arrayMergeSorted);
		for(int i = 0; i < arrayMergeSorted.length; i++) {
			System.out.printf("%d, ", arrayMergeSorted[i]);
		}
		System.out.printf("\nDifference of score is %d", difference);
	}

}
