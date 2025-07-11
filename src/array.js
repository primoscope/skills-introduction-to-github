/**
 * Array utility functions
 */

/**
 * Removes duplicate values from an array
 * @param {Array} arr - Array to remove duplicates from
 * @returns {Array} Array with duplicates removed
 * @throws {Error} If input is not an array
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  return [...new Set(arr)];
}

/**
 * Chunks an array into smaller arrays of specified size
 * @param {Array} arr - Array to chunk
 * @param {number} size - Size of each chunk
 * @returns {Array} Array of chunks
 * @throws {Error} If arr is not an array or size is not a positive integer
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof size !== 'number' || !Number.isInteger(size) || size <= 0) {
    throw new Error('Size must be a positive integer');
  }
  
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Flattens a nested array by one level
 * @param {Array} arr - Array to flatten
 * @returns {Array} Flattened array
 * @throws {Error} If input is not an array
 */
function flatten(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  return arr.flat();
}

/**
 * Finds the intersection of two arrays
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Array containing common elements
 * @throws {Error} If either argument is not an array
 */
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays');
  }
  return arr1.filter(item => arr2.includes(item));
}

/**
 * Finds the difference between two arrays (elements in first array but not in second)
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Array containing elements in arr1 but not in arr2
 * @throws {Error} If either argument is not an array
 */
function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Both arguments must be arrays');
  }
  return arr1.filter(item => !arr2.includes(item));
}

/**
 * Shuffles an array randomly
 * @param {Array} arr - Array to shuffle
 * @returns {Array} New shuffled array
 * @throws {Error} If input is not an array
 */
function shuffle(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Groups array elements by a key function
 * @param {Array} arr - Array to group
 * @param {Function} keyFn - Function that returns the grouping key
 * @returns {Object} Object with grouped elements
 * @throws {Error} If arr is not an array or keyFn is not a function
 */
function groupBy(arr, keyFn) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof keyFn !== 'function') {
    throw new Error('Second argument must be a function');
  }
  
  return arr.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

module.exports = {
  removeDuplicates,
  chunk,
  flatten,
  intersection,
  difference,
  shuffle,
  groupBy
};