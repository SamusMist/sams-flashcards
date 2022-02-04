const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turns = require('../src/Turns');

describe('Round', () => {

  it('should be a function', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should start with the first card in the deck', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  })

  it('should return current card being played', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should change turn when a guess is made', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const cards = [card1, card2, card3, card4];
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn('Rory');
    expect(round.turnCounter).to.equal(1);
  })

  it('should move to the next card after a guess', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const cards = [card1, card2, card3, card4];
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn('Rory');
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it('should store incorrect guesses id in array', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const cards = [card1, card2, card3, card4];
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn('Brewster');
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it.only('should give feedback regarding whether the guess is correct or incorrect', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const cards = [card1, card2, card3, card4];
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn('Brewster');
    expect(round.takeTurn()).to.equal('incorrect!');
    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('hedgehog');
    expect(round.takeTurn()).to.equal('correct!');
    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.incorrectGuesses).to.equal(1);
  })
})
