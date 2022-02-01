const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns');

describe('Turns', function() {

  it('should be a function', function() {
    const turns = new Turns();
    expect(Turns).to.be.a('function');
  });

  it('should be instantiated with two arguments', function() {
    const turns = new Turns(guess, )
  })
});
