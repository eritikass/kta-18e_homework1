const user = require('./user');

describe('If input is string', function() {
  it('error when input is string', function() {
    expect(function() {
      user('mait'); 
    }).toThrow('id needs to be integer');
  });
});
