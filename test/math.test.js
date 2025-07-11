const math = require('../src/math');

describe('Math utilities', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(math.add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(math.add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(math.add(-2, -3)).toBe(-5);
    });

    test('should add zero', () => {
      expect(math.add(5, 0)).toBe(5);
      expect(math.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(math.add(1.5, 2.5)).toBe(4);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => math.add(2, '3')).toThrow('Both arguments must be numbers');
      expect(() => math.add(null, 3)).toThrow('Both arguments must be numbers');
      expect(() => math.add(2, undefined)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(math.subtract(5, 3)).toBe(2);
    });

    test('should subtract negative numbers', () => {
      expect(math.subtract(5, -3)).toBe(8);
      expect(math.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero', () => {
      expect(math.subtract(5, 0)).toBe(5);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.subtract('5', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(math.multiply(3, 4)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(math.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(math.multiply(-3, 4)).toBe(-12);
      expect(math.multiply(-3, -4)).toBe(12);
    });

    test('should multiply decimal numbers', () => {
      expect(math.multiply(2.5, 4)).toBe(10);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.multiply('3', 4)).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(math.divide(12, 3)).toBe(4);
    });

    test('should divide negative numbers', () => {
      expect(math.divide(-12, 3)).toBe(-4);
      expect(math.divide(-12, -3)).toBe(4);
    });

    test('should divide decimal numbers', () => {
      expect(math.divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => math.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.divide('12', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('power', () => {
    test('should calculate power of positive numbers', () => {
      expect(math.power(2, 3)).toBe(8);
      expect(math.power(5, 2)).toBe(25);
    });

    test('should handle power of zero', () => {
      expect(math.power(5, 0)).toBe(1);
      expect(math.power(0, 5)).toBe(0);
    });

    test('should handle negative exponents', () => {
      expect(math.power(2, -2)).toBe(0.25);
    });

    test('should handle decimal numbers', () => {
      expect(math.power(4, 0.5)).toBe(2);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.power('2', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('sqrt', () => {
    test('should calculate square root of positive numbers', () => {
      expect(math.sqrt(4)).toBe(2);
      expect(math.sqrt(9)).toBe(3);
      expect(math.sqrt(16)).toBe(4);
    });

    test('should handle square root of zero', () => {
      expect(math.sqrt(0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(math.sqrt(2.25)).toBe(1.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => math.sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.sqrt('4')).toThrow('Argument must be a number');
    });
  });

  describe('factorial', () => {
    test('should calculate factorial of positive integers', () => {
      expect(math.factorial(0)).toBe(1);
      expect(math.factorial(1)).toBe(1);
      expect(math.factorial(3)).toBe(6);
      expect(math.factorial(4)).toBe(24);
      expect(math.factorial(5)).toBe(120);
    });

    test('should throw error for negative numbers', () => {
      expect(() => math.factorial(-1)).toThrow('Argument must be a non-negative integer');
    });

    test('should throw error for non-integers', () => {
      expect(() => math.factorial(3.5)).toThrow('Argument must be a non-negative integer');
    });

    test('should throw error for non-number inputs', () => {
      expect(() => math.factorial('5')).toThrow('Argument must be a non-negative integer');
    });
  });
});