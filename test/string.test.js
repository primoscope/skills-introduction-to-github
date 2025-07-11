const string = require('../src/string');

describe('String utilities', () => {
  describe('capitalize', () => {
    test('should capitalize first letter of lowercase string', () => {
      expect(string.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized string', () => {
      expect(string.capitalize('Hello')).toBe('Hello');
    });

    test('should handle uppercase string', () => {
      expect(string.capitalize('HELLO')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(string.capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(string.capitalize('a')).toBe('A');
      expect(string.capitalize('A')).toBe('A');
    });

    test('should handle string with spaces', () => {
      expect(string.capitalize('hello world')).toBe('Hello world');
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.capitalize(123)).toThrow('Argument must be a string');
      expect(() => string.capitalize(null)).toThrow('Argument must be a string');
      expect(() => string.capitalize(undefined)).toThrow('Argument must be a string');
    });
  });

  describe('reverse', () => {
    test('should reverse a simple string', () => {
      expect(string.reverse('hello')).toBe('olleh');
    });

    test('should reverse empty string', () => {
      expect(string.reverse('')).toBe('');
    });

    test('should reverse single character', () => {
      expect(string.reverse('a')).toBe('a');
    });

    test('should reverse string with spaces', () => {
      expect(string.reverse('hello world')).toBe('dlrow olleh');
    });

    test('should reverse string with special characters', () => {
      expect(string.reverse('hello!')).toBe('!olleh');
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.reverse(123)).toThrow('Argument must be a string');
    });
  });

  describe('isPalindrome', () => {
    test('should identify simple palindromes', () => {
      expect(string.isPalindrome('racecar')).toBe(true);
      expect(string.isPalindrome('level')).toBe(true);
    });

    test('should identify non-palindromes', () => {
      expect(string.isPalindrome('hello')).toBe(false);
      expect(string.isPalindrome('world')).toBe(false);
    });

    test('should handle case insensitive palindromes', () => {
      expect(string.isPalindrome('Racecar')).toBe(true);
      expect(string.isPalindrome('RaceCar')).toBe(true);
    });

    test('should handle palindromes with spaces and punctuation', () => {
      expect(string.isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(string.isPalindrome('race a car')).toBe(false);
    });

    test('should handle empty string', () => {
      expect(string.isPalindrome('')).toBe(true);
    });

    test('should handle single character', () => {
      expect(string.isPalindrome('a')).toBe(true);
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.isPalindrome(123)).toThrow('Argument must be a string');
    });
  });

  describe('countWords', () => {
    test('should count words in simple sentence', () => {
      expect(string.countWords('hello world')).toBe(2);
      expect(string.countWords('the quick brown fox')).toBe(4);
    });

    test('should handle single word', () => {
      expect(string.countWords('hello')).toBe(1);
    });

    test('should handle empty string', () => {
      expect(string.countWords('')).toBe(0);
      expect(string.countWords('   ')).toBe(0);
    });

    test('should handle multiple spaces', () => {
      expect(string.countWords('hello    world')).toBe(2);
      expect(string.countWords('  hello   world  ')).toBe(2);
    });

    test('should handle newlines and tabs', () => {
      expect(string.countWords('hello\nworld')).toBe(2);
      expect(string.countWords('hello\tworld')).toBe(2);
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.countWords(123)).toThrow('Argument must be a string');
    });
  });

  describe('truncate', () => {
    test('should truncate long strings', () => {
      expect(string.truncate('hello world', 8)).toBe('hello...');
      expect(string.truncate('this is a long sentence', 10)).toBe('this is...');
    });

    test('should not truncate short strings', () => {
      expect(string.truncate('hello', 10)).toBe('hello');
      expect(string.truncate('short', 10)).toBe('short');
    });

    test('should handle custom suffix', () => {
      expect(string.truncate('hello world', 8, '***')).toBe('hello***');
    });

    test('should handle empty string', () => {
      expect(string.truncate('', 5)).toBe('');
    });

    test('should handle length of zero', () => {
      expect(string.truncate('hello', 0)).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => string.truncate(123, 5)).toThrow('First argument must be a string');
    });

    test('should throw error for invalid length', () => {
      expect(() => string.truncate('hello', 'invalid')).toThrow('Length must be a non-negative number');
      expect(() => string.truncate('hello', -1)).toThrow('Length must be a non-negative number');
    });
  });

  describe('toKebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(string.toKebabCase('helloWorld')).toBe('hello-world');
      expect(string.toKebabCase('firstName')).toBe('first-name');
    });

    test('should convert spaces to hyphens', () => {
      expect(string.toKebabCase('hello world')).toBe('hello-world');
      expect(string.toKebabCase('the quick brown fox')).toBe('the-quick-brown-fox');
    });

    test('should convert underscores to hyphens', () => {
      expect(string.toKebabCase('hello_world')).toBe('hello-world');
    });

    test('should handle mixed cases', () => {
      expect(string.toKebabCase('helloWorld test_case')).toBe('hello-world-test-case');
    });

    test('should handle already kebab-case strings', () => {
      expect(string.toKebabCase('hello-world')).toBe('hello-world');
    });

    test('should handle empty string', () => {
      expect(string.toKebabCase('')).toBe('');
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.toKebabCase(123)).toThrow('Argument must be a string');
    });
  });

  describe('toCamelCase', () => {
    test('should convert kebab-case to camelCase', () => {
      expect(string.toCamelCase('hello-world')).toBe('helloWorld');
      expect(string.toCamelCase('first-name')).toBe('firstName');
    });

    test('should convert spaces to camelCase', () => {
      expect(string.toCamelCase('hello world')).toBe('helloWorld');
      expect(string.toCamelCase('the quick brown fox')).toBe('theQuickBrownFox');
    });

    test('should convert underscores to camelCase', () => {
      expect(string.toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should handle mixed separators', () => {
      expect(string.toCamelCase('hello-world_test case')).toBe('helloWorldTestCase');
    });

    test('should handle already camelCase strings', () => {
      expect(string.toCamelCase('helloWorld')).toBe('helloworld');
    });

    test('should handle empty string', () => {
      expect(string.toCamelCase('')).toBe('');
    });

    test('should handle trailing separators', () => {
      expect(string.toCamelCase('hello-world-')).toBe('helloWorld');
      expect(string.toCamelCase('hello_world_')).toBe('helloWorld');
    });

    test('should throw error for non-string inputs', () => {
      expect(() => string.toCamelCase(123)).toThrow('Argument must be a string');
    });
  });
});