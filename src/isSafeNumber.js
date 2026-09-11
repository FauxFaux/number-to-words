import MAX_SAFE_INTEGER from './maxSafeInteger.js';

function isSafeNumber(value) {
  return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

export default isSafeNumber;
