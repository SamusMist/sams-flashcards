const Turns = require('../src/Turns');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCounter = 0;
    this.currentCard = this.deck.cards[this.turnCounter];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turnCounter - 1];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnCounter++;
    const turn = new Turns(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.returnCurrentCard();
      return turn.giveFeedback();
      }
    }


module.exports = Round;
