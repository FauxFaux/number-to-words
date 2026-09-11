import makeOrdinal from './makeOrdinal.ts';
import toWords from './toWords.ts';

/**
 * Converts a number into ordinal words.
 * @example toWordsOrdinal(12) => 'twelfth'
 * @param {number|string} number
 * @returns {string}
 */
function toWordsOrdinal(number: number | string): string {
  const words = toWords(number);
  return makeOrdinal(words);
}

export default toWordsOrdinal;
