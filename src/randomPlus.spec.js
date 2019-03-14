const randomPlus = require('./randomPlus');
const random = require('./random');

jest.mock('./random');

random.mockReturnValueOnce(3);

describe('randomPlus', function() {
  it ('5 + 3 (random) = 8', function() {
    expect(randomPlus(5)).toBe(8);
    expect(random.mock.calls.length).toBe(1);
    expect(random.mock.calls[0][0]).toBe(1);
  });
  random.mockReturnValueOnce(3);
  it ('1 + 3 (random) = 4', function() {
    expect(randomPlus(1)).toBe(4);
  });
});
