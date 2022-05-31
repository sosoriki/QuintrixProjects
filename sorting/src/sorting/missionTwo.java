package sorting;


/**
 * 
 * constructor with
 * add item to structure
 * and remove smallest
 * item
 * @author Kendrick Pham
 *
 */

public class missionTwo<T extends Comparable<? super T>> {
	private Object[] data;
	private int maxCapacity;
	private int size = 0;
	
	public missionTwo(int maxCapacity) {
		data = new Object[maxCapacity];
		this.maxCapacity = maxCapacity;
	}
	
	public void add(T item) {
		Object[] tempArray = new Object[maxCapacity + 1];
		if(size == 0) {
			data[0] = item;
		}
		else {
			if(size >= maxCapacity) {
				return;
			}
			else {
				int i;
				for(i = size - 1; (i >= 0 && (int)data[i] > (int)item); i--) {
					data[i+1] = data[i];
				}
				data[i+1] = item;
			}
		}
		size++;
	}
	
	public Object remove() {
		Object remove = data[size-1];
		data[size-1] = null;
		size--;
		return remove;
	}
	
	public static void main(String[] args) {
		missionTwo array = new missionTwo(5);
		array.add(2);
		array.add(1);
		array.add(3);
		array.add(5);
		array.add(4);
		System.out.printf("%d ", array.remove());
		System.out.printf("%d ", array.remove());
		System.out.printf("%d ", array.remove());
		System.out.printf("%d ", array.remove());
		System.out.printf("%d ", array.remove());
	}

}
