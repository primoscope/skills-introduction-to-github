/**
 * String utility functions
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} String with first letter capitalized
 * @throws {Error} If input is not a string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Reverses a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 * @throws {Error} If input is not a string
 */
function reverse(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - String to check
 * @returns {boolean} True if string is a palindrome, false otherwise
 * @throws {Error} If input is not a string
 */
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Counts the number of words in a string
 * @param {string} str - String to count words in
 * @returns {number} Number of words
 * @throws {Error} If input is not a string
 */
function countWords(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  if (str.trim().length === 0) {
    return 0;
  }
  return str.trim().split(/\s+/).length;
}

/**
 * Truncates a string to a specified length
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add if truncated (default: '...')
 * @returns {string} Truncated string
 * @throws {Error} If str is not a string or length is not a positive number
 */
function truncate(str, length, suffix = '...') {
  if (typeof str !== 'string') {
    throw new Error('First argument must be a string');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new Error('Length must be a non-negative number');
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= suffix.length) {
    return suffix.slice(0, length);
  }
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Converts a string to kebab-case
 * @param {string} str - String to convert
 * @returns {string} String in kebab-case
 * @throws {Error} If input is not a string
 */
function toKebabCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param {string} str - String to convert
 * @returns {string} String in camelCase
 * @throws {Error} If input is not a string
 */
function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  countWords,
  truncate,
  toKebabCase,
  toCamelCase
};