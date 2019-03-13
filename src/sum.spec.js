const sum = require('./sum');

describe('sum', function() {
  it('2+3=5', function() {
    expect(  sum(2, 3)).toBe(5);
  });
});
