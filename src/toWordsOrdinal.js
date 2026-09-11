import makeOrdinal from './makeOrdinal.js';
import toWords from './toWords.js';

/**
 * Converts a number into ordinal words.
 * @example toWordsOrdinal(12) => 'twelfth'
 * @param {number|string} number
 * @returns {string}
 */
function toWordsOrdinal(number) {
  const words = toWords(number);
  return makeOrdinal(words);
}

export default toWordsOrdinal;
