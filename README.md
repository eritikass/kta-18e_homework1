 getting started

1. fork git repository
1. git clone your fork
1. install npm packages `npm install`
1. testing:
   - unit ([jest](https://jestjs.io/)): `npm run test`
   - lint ([eslint](https://eslint.org/)): `npm run lint`
1. create merge/pull request from your fork

# tasks

> * **NB:** make each task as a separate commit!
> * Check [examples.js](./examples.js) for code usage examples

 * `lint`: if there is any linting errors then fix them and do not make new errors in future ✓
 * `unit`: use snapshot testing to test `src/user.js` (use ids 1, 56 and 1345)
 * `unit`: use string as input(id) for `src/user.js` - test that exception is given
 * `unit`: write implementation (`capitalize.js`) for this test (you can use npm packages in `capitalize.js`) ✓
```js
// src/capitalize.spec.js
const capitalize = require('./capitalize');

describe('sum', () => {
  it('triin => Triin', () => {
    expect(capitalize('triin')).toBe("Triin");
  });
  it('error - bad input', () => {
    expect(() => {
      capitalize({ "word": 'cat' });
    }).toThrow(/bad input/);
  });
});
```
 * `unit`: test `src/randomPlus.js` while mocking `src/random.js` (check from mock that `random` params was 1 and 99)
