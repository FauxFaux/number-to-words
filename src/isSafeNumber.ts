function isSafeNumber(value?: unknown): value is number {
  return typeof value === 'number' && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
}

export default isSafeNumber;
