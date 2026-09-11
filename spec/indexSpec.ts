import { describe, expect, it } from 'vitest';
import * as index from '../src/index.ts';

describe('index', function () {
  it('should expose a toOrdinal method', function () {
    expect(index.toOrdinal).toEqual(expect.any(Function));
  });
  it('should expose a toWords method', function () {
    expect(index.toWords).toEqual(expect.any(Function));
  });
  it('should expose a toWordsOrdinal method', function () {
    expect(index.toWordsOrdinal).toEqual(expect.any(Function));
  });
});
