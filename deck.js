// Define the suits and values for a deck of cards
const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

// Export the Deck class
export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  // Get the number of cards in the deck
  get numberOfCards() {
    return this.cards.length
  }

  // Remove and return the top card from the deck
  pop() {
    return this.cards.shift()
  }

  // Add a card to the bottom of the deck
  push(card) {
    this.cards.push(card)
  }

  // Shuffle the deck using the Fisher-Yates algorithm
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

// Card class representing a single card
class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  // Get the color of the card based on the suit
  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  // Create an HTML representation of the card
  getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

// Create a fresh deck of cards
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}
