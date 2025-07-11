const utils = require('../src/index');

describe('Main module', () => {
  test('should export all utility modules', () => {
    expect(utils).toHaveProperty('math');
    expect(utils).toHaveProperty('string');
    expect(utils).toHaveProperty('array');
  });

  test('should export correct math functions', () => {
    expect(typeof utils.math.add).toBe('function');
    expect(typeof utils.math.subtract).toBe('function');
    expect(typeof utils.math.multiply).toBe('function');
    expect(typeof utils.math.divide).toBe('function');
  });

  test('should export correct string functions', () => {
    expect(typeof utils.string.capitalize).toBe('function');
    expect(typeof utils.string.reverse).toBe('function');
    expect(typeof utils.string.isPalindrome).toBe('function');
  });

  test('should export correct array functions', () => {
    expect(typeof utils.array.removeDuplicates).toBe('function');
    expect(typeof utils.array.chunk).toBe('function');
    expect(typeof utils.array.flatten).toBe('function');
  });

  test('should work with imported functions', () => {
    expect(utils.math.add(2, 3)).toBe(5);
    expect(utils.string.capitalize('hello')).toBe('Hello');
    expect(utils.array.removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  });
});