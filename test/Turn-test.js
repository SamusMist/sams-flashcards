const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns');
const Card = require('../src/Turns');

describe('Turns', () => {

  it('should be a function', () => {
    const turns = new Turns();
    expect(Turns).to.be.a('function');
  });

  it('should be instantiated with two arguments', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turns = new Turns('Rory', card);

    expect(turns.guess).to.deep.equal('Rory');
    expect(turns.newCard).to.deep.equal(card);
  });

  it('should return a user guess', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turns = new Turns('Rory', card);

    expect(turns.returnGuess()).to.equal('Rory');
  });

  it('should show the current card', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turns = new Turns('Rory', card);

    expect(turns.returnCard().to.equal(card));
  });

  it('should return true or false if the user guess is correct or incorrect', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turns = new Turns('Rory', card);

    expect(turns.evaluateGuess('Rory')).to.equal(true);
    expect(turns.evaluateGuess('Hades')).to.equal(false);
  });

  it('should alert user if their guess is correct or incorrect', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turns = new Turns('Rory', card);

    turns.evaluateGuess('Hades');
    expect(turns.giveFeedback()).to.equal('incorrect!');

    turns.evaluateGuess('Rory');
    expect(turns.giveFeedback()).to.equal('correct!');
  });
});
