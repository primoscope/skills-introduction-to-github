/**
 * Mathematical utility functions
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @throws {Error} If inputs are not numbers
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - Number to subtract from
 * @param {number} b - Number to subtract
 * @returns {number} Difference of a and b
 * @throws {Error} If inputs are not numbers
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 * @throws {Error} If inputs are not numbers
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If inputs are not numbers or if dividing by zero
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculates the power of a number
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Base raised to the power of exponent
 * @throws {Error} If inputs are not numbers
 */
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} num - Number to calculate square root of
 * @returns {number} Square root of the number
 * @throws {Error} If input is not a number or is negative
 */
function sqrt(num) {
  if (typeof num !== 'number') {
    throw new Error('Argument must be a number');
  }
  if (num < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(num);
}

/**
 * Calculates the factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial of n
 * @throws {Error} If input is not a non-negative integer
 */
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('Argument must be a non-negative integer');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  sqrt,
  factorial
};