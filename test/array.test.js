const array = require('../src/array');

describe('Array utilities', () => {
  describe('removeDuplicates', () => {
    test('should remove duplicate numbers', () => {
      expect(array.removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test('should remove duplicate strings', () => {
      expect(array.removeDuplicates(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should handle empty array', () => {
      expect(array.removeDuplicates([])).toEqual([]);
    });

    test('should handle array with no duplicates', () => {
      expect(array.removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle array with all same elements', () => {
      expect(array.removeDuplicates([1, 1, 1])).toEqual([1]);
    });

    test('should throw error for non-array inputs', () => {
      expect(() => array.removeDuplicates('not an array')).toThrow('Argument must be an array');
      expect(() => array.removeDuplicates(123)).toThrow('Argument must be an array');
      expect(() => array.removeDuplicates(null)).toThrow('Argument must be an array');
    });
  });

  describe('chunk', () => {
    test('should chunk array into specified sizes', () => {
      expect(array.chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
      expect(array.chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });

    test('should handle chunk size larger than array', () => {
      expect(array.chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('should handle empty array', () => {
      expect(array.chunk([], 2)).toEqual([]);
    });

    test('should handle chunk size of 1', () => {
      expect(array.chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('should throw error for non-array input', () => {
      expect(() => array.chunk('not an array', 2)).toThrow('First argument must be an array');
    });

    test('should throw error for invalid chunk size', () => {
      expect(() => array.chunk([1, 2, 3], 0)).toThrow('Size must be a positive integer');
      expect(() => array.chunk([1, 2, 3], -1)).toThrow('Size must be a positive integer');
      expect(() => array.chunk([1, 2, 3], 2.5)).toThrow('Size must be a positive integer');
      expect(() => array.chunk([1, 2, 3], 'invalid')).toThrow('Size must be a positive integer');
    });
  });

  describe('flatten', () => {
    test('should flatten nested arrays', () => {
      expect(array.flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
      expect(array.flatten([['a', 'b'], ['c', 'd']])).toEqual(['a', 'b', 'c', 'd']);
    });

    test('should handle empty nested arrays', () => {
      expect(array.flatten([[], [1, 2], []])).toEqual([1, 2]);
    });

    test('should handle already flat array', () => {
      expect(array.flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle empty array', () => {
      expect(array.flatten([])).toEqual([]);
    });

    test('should only flatten one level', () => {
      expect(array.flatten([[1, [2, 3]], [4]])).toEqual([1, [2, 3], 4]);
    });

    test('should throw error for non-array input', () => {
      expect(() => array.flatten('not an array')).toThrow('Argument must be an array');
    });
  });

  describe('intersection', () => {
    test('should find common elements', () => {
      expect(array.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(array.intersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c']);
    });

    test('should handle no common elements', () => {
      expect(array.intersection([1, 2], [3, 4])).toEqual([]);
    });

    test('should handle empty arrays', () => {
      expect(array.intersection([], [1, 2])).toEqual([]);
      expect(array.intersection([1, 2], [])).toEqual([]);
      expect(array.intersection([], [])).toEqual([]);
    });

    test('should handle identical arrays', () => {
      expect(array.intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should throw error for non-array inputs', () => {
      expect(() => array.intersection('not array', [1, 2])).toThrow('Both arguments must be arrays');
      expect(() => array.intersection([1, 2], 'not array')).toThrow('Both arguments must be arrays');
    });
  });

  describe('difference', () => {
    test('should find elements in first array but not second', () => {
      expect(array.difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
      expect(array.difference(['a', 'b', 'c'], ['b', 'd'])).toEqual(['a', 'c']);
    });

    test('should handle no differences', () => {
      expect(array.difference([1, 2], [1, 2, 3])).toEqual([]);
    });

    test('should handle empty arrays', () => {
      expect(array.difference([], [1, 2])).toEqual([]);
      expect(array.difference([1, 2], [])).toEqual([1, 2]);
    });

    test('should handle completely different arrays', () => {
      expect(array.difference([1, 2], [3, 4])).toEqual([1, 2]);
    });

    test('should throw error for non-array inputs', () => {
      expect(() => array.difference('not array', [1, 2])).toThrow('Both arguments must be arrays');
      expect(() => array.difference([1, 2], 'not array')).toThrow('Both arguments must be arrays');
    });
  });

  describe('shuffle', () => {
    test('should return array with same elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = array.shuffle(original);
      
      expect(shuffled).toHaveLength(original.length);
      expect(shuffled.sort()).toEqual(original.sort());
    });

    test('should not modify original array', () => {
      const original = [1, 2, 3];
      const shuffled = array.shuffle(original);
      
      expect(original).toEqual([1, 2, 3]);
      expect(shuffled).not.toBe(original);
    });

    test('should handle empty array', () => {
      expect(array.shuffle([])).toEqual([]);
    });

    test('should handle single element array', () => {
      expect(array.shuffle([1])).toEqual([1]);
    });

    test('should throw error for non-array input', () => {
      expect(() => array.shuffle('not an array')).toThrow('Argument must be an array');
    });
  });

  describe('groupBy', () => {
    test('should group by string property', () => {
      const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 }
      ];
      
      const grouped = array.groupBy(people, person => person.age);
      expect(grouped).toEqual({
        25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
        30: [{ name: 'Bob', age: 30 }]
      });
    });

    test('should group by function result', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const grouped = array.groupBy(numbers, n => n % 2 === 0 ? 'even' : 'odd');
      
      expect(grouped).toEqual({
        odd: [1, 3, 5],
        even: [2, 4, 6]
      });
    });

    test('should handle empty array', () => {
      expect(array.groupBy([], x => x)).toEqual({});
    });

    test('should handle single group', () => {
      const items = ['a', 'b', 'c'];
      const grouped = array.groupBy(items, () => 'same');
      
      expect(grouped).toEqual({
        same: ['a', 'b', 'c']
      });
    });

    test('should throw error for non-array input', () => {
      expect(() => array.groupBy('not array', x => x)).toThrow('First argument must be an array');
    });

    test('should throw error for non-function keyFn', () => {
      expect(() => array.groupBy([1, 2, 3], 'not function')).toThrow('Second argument must be a function');
    });
  });
});