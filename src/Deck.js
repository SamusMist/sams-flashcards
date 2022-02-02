class Deck {
  constructor(cards) {
    this.cards = cards;
    this.deckSize = this.cards.length;
  }
  addCard(newCard) {
    this.cards.push(newCard);
  }
}

module.exports = Deck;
