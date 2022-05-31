package sorting;

/**
 * 
 * in-place sort class
 * @author Kendrick Pham
 *
 */

public class missionOne {
	public static <T extends Comparable<? super T>> T[] inplaceSort(T[] array) {
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j < i; j++) {
				if((int)array[j] > (int)array[i]) {
					T temp = array[j];
					array[j] = array[i];
					array[i] = temp;
				}
			}
		}
		return array;
	}
	
	public static void main(String[] args) {
		Integer[] array = {5,6,3,4,2,1};
		Integer[] array2 = inplaceSort(array);
		for (int i = 0; i < array.length; i++) {
			System.out.printf("%d ", array2[i]);
		}
	}

}
