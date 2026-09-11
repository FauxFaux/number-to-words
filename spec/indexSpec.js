'use strict';

const index = require('../src');

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
