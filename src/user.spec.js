const contact = require('./user');

describe('user', function() {
  it('letters cant be id', function() {
    expect(function() {
      contact('abc');
    }).toThrow('id needs to be integer');
  });

  it('user(1) => data', function() {
    expect(contact(1)).toMatchSnapshot();
  });
  it('user(56) => data', function() {
    expect(contact(56)).toMatchSnapshot();
  });
  it('user(1345) => data', function() {
    expect(contact(1345)).toMatchSnapshot();
  });
});