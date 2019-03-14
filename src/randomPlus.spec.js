const randomPlus = require('./randomPlus');
const random = require('./random');

jest.mock('./random');
randomPlus.mockReturnValueOnce(10);

describe('Mock function random test', () => {
expect(randomPlus.mock.results[10].value).toBe(10);

});