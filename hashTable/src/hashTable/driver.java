package hashTable;

public class driver {
	public static void main(String[] args) {
		LinearProbingHashTable entries = new LinearProbingHashTable<>(5);
		System.out.printf("Number of entries: %d\n", entries.numOfEntries());
		entries.put(1,2);
		entries.put(1,3);
		System.out.printf("Number of entries: %d\n", entries.numOfEntries());
		System.out.printf("Key: %s\nValue: %s\n", entries.containsKey(1), entries.containsValue(2));
	}

}
