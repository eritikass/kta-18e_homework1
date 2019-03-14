const user = require('./user');

describe('User input SnapShot test', function() {
  it('Error if don´t match', function() {
    expect(user(1)).toMatchSnapshot();
    expect(user(56)).toMatchSnapshot();
    expect(user(1345)).toMatchSnapshot();
  });
});
