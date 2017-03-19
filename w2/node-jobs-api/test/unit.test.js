process.env.NODE_ENV = 'test';

const chai = require('chai');
const helpers = require('../helpers');
const should = chai.should();

describe('helpers.js', () => {
  it('add()', () => {
    helpers.add(1, 2).should.equal(3);
  });
  it('addAsync()', () => {
    helpers.addAsync(1, 2, function(sum){
      sum.should.equal(3);
    })
  });
});
