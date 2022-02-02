const Card = require('../src/Card');

class Turns {
  constructor(guess, newCard) {
    this.guess = guess;
    this.newCard = newCard;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.newCard;
  };

  evaluateGuess() {
    if (this.guess === this.newCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if (this.guess === this.newCard.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turns;
