// src/capitalize.spec.js
const capitalize = require('./capitalize');

describe('sum', () => {
  it('triin => Triin', () => {
    expect(capitalize('triin')).toBe('Triin');
  });
  it('error - bad input', () => {
    expect(() => {
      capitalize({ 'word': 'cat' });
    }).toThrow(/bad input/);
  });
});