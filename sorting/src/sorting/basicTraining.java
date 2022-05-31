package sorting;

/**
 * 
 * quick sort class
 * @author Kendrick Pham
 *
 */

public class basicTraining {
	public static <T extends Comparable<? super T>> T[] quickSort(T[] array, int low, int high) {
		if(low < high) {
			int partition = partition(array, low, high);
			quickSort(array, low, partition - 1);
			quickSort(array, partition + 1, high);
		}
		return array;
	}

	private static <T> int partition(T[] array, int low, int high) {
		int pivot = (int) array[high];
		int i = low - 1;
		for(int j = low; j < high; j++) {
			if((int)array[j] < pivot) {
				i++;
				T temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
		T temp = array[i+1];
		array[i+1] = array[high];
		array[high] = temp;
		return i + 1;
	}
	
	public static void main(String[] args) {
		Integer[] array = {5,4,2,1,3};
		int low = 0;
		int high = array.length - 1;
		Integer[] array2 = quickSort(array, low, high);
		for(int i = 0; i < array2.length; i++) {
			System.out.printf("%d ", array2[i]);
		}
	}

}
