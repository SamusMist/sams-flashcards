const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Turns', () => {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should know how many cards are in the deck', () => {
    const card1 = new Card(1, `What is the name of Sam's dog?`, ['Brewster', 'Rory', 'Hades'], 'Rory');
    const card2 = new Card(2, 'What is Sam\'s favorite animal?', ['cat', 'dog', 'hedgehog'], 'hedgehog');
    const card3 = new Card(3, 'How old is Rory?', ['2', '5', '8'], '2');
    const card4 = new Card(4, `What is the name of Sam's cat?`, ['Baby', 'Stella', 'Tinkerbell'], 'Tinkerbell');
    const deck = new Deck([card1, card2, card3, card4]);

    expect(deck.cards.length).to.equal(4);
  })
})
