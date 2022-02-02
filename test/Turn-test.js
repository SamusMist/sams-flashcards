const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turns = require('../src/Turns');

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

    expect(turns.returnCard()).to.equal(card);
  });

  it('should return true or false if the user guess is correct or incorrect', () => {
    const card = new Card(1, 'What is the name of Sam\'s dog?', ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turnOne = new Turns('Rory', card);
    const turnTwo = new Turns('Hades', card);

    turnOne.evaluateGuess();
    expect(turnOne.evaluateGuess()).to.equal(true);

    turnTwo.evaluateGuess();
    expect(turnTwo.evaluateGuess()).to.equal(false);
  });

  it('should alert user if their guess is correct or incorrect', () => {
    const card = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const turnOne = new Turns('Rory', card);
    const turnTwo = new Turns('Hades', card);

    turnOne.evaluateGuess();
    expect(turnOne.giveFeedback()).to.equal('correct!');

    turnTwo.evaluateGuess();
    expect(turnTwo.giveFeedback()).to.equal('incorrect!');
  });
});
