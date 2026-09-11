'use strict';

const makeOrdinal = require('./makeOrdinal');
const toWords = require('./toWords');

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

module.exports = toWordsOrdinal;
