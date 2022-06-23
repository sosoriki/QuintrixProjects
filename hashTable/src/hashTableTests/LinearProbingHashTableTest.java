package hashTableTests;

import org.junit.jupiter.api.Test;
import java.util.*;
import static org.junit.jupiter.api.Assertions.*;

import hashTable.HashTableEntry;
import hashTable.LinearProbingHashTable;

public class LinearProbingHashTableTest {
	LinearProbingHashTable array = new LinearProbingHashTable<>(3);
	
	@Test
	void containsKey() {
		array.put(1,2);
		array.put(2,2);
		array.put(2,3);
		assertTrue(array.containsKey(1));
		assertTrue(array.containsKey(2));
		assertFalse(array.containsKey(3));
	}
	
	@Test
	void containsValue() {
		array.put(1,2);
		array.put(2,5);
		array.put(2,3);
		assertTrue(array.containsValue(2));
		assertTrue(array.containsValue(5));
		assertFalse(array.containsValue(4));
	}
	
	@Test
	void put() {
		array.put(1,2);
		array.put(2,3);
		assertEquals(2, array.get(1));
		assertEquals(3, array.get(2));
	}
	
	@Test
	void putAll() {
		Map<Integer, Integer> map = new HashMap<>();
		map.put(1, 2);
		map.put(2, 3);
		array.putAll(map);
		assertEquals(2, array.get(1));
		assertEquals(3, array.get(2));
	}
	
	@Test
	void remove() {
		array.put(1,2);
		array.put(2,3);
		assertTrue(array.containsKey(1));
		assertTrue(array.containsKey(2));
		array.remove(1);
		assertFalse(array.containsKey(1));
		assertTrue(array.containsKey(2));
	}
	
	@Test
	void values() {
		array.put(1,2);
        array.put(2,3);
        Collection<Integer> collection = new ArrayList<>();
        collection = array.values();
        for(Object value : collection){
            assertTrue(array.containsValue(value));
        }
	}
	
	@Test
	void keySet() {
		array.put(1,2);
		array.put(2,3);
		Set<Map.Entry<Integer, Integer>> set = array.keySet();
		for(Object key: set) {
			assertTrue(array.containsKey(key));
		}
	}
	
	@Test
	void entryset() {
		array.put(1,2);
		array.put(2,3);
		Set<Map.Entry<Integer, Integer>> set = array.entrySet();
		int j = 0;
		for(int i = 0; i < set.size(); i++) {
			if(array.getArray()[i] != null) {
				assertEquals(set.toArray()[i].hashCode(),array.getArray()[i].hashCode());
				j++;
			}
		}
	}
	
	@Test
	void setArray() {
		HashTableEntry<Integer, Integer>[] array2 = new HashTableEntry[3];
		array2[0] = new HashTableEntry<>(1,2);
		array2[1] = new HashTableEntry<>(2,3);
		array.setArray(array2);
		assertTrue(array.containsKey(1));
		assertTrue(array.containsKey(2));
		assertTrue(array.containsValue(2));
		assertTrue(array.containsValue(3));
	}
	
	@Test
	void isEmpty() {
		LinearProbingHashTable array = new LinearProbingHashTable<>(0);
		assertTrue(array.isEmpty());
	}
	
	@Test
	void size() {
		assertTrue(array.size() == 3);
	}
	
	@Test
	void setSize() {
		array.setSize(5);
		assertTrue(array.size() == 5);
	}
	
	@Test
	void clear() {
		array.put(1,2);
        array.put(2,3);
        assertTrue(array.containsValue(2));
		assertTrue(array.containsValue(3));
		assertFalse(array.isEmpty());
		array.clear();
		assertTrue(array.isEmpty());
	}
	

}
