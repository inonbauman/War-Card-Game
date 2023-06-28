// Import the Deck class from deck.js
import Deck from "./deck.js"

// Map of card values
const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

// Get elements from the HTML
const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

// Declare variables
let playerDeck, computerDeck, inRound, isGameStopped

// Event listener for click
document.addEventListener("click", () => {
  // Start a new game if the game is stopped
  if (isGameStopped) {
    startGame()
    return
  }

  // Clean up the cards before a new round or flip the cards
  if (inRound) {
    cleanBeforeRound()
  } else {
    flipCards()
  }
})

// Start a new game
startGame()
function startGame() {
  // Create a new deck and shuffle it
  const deck = new Deck()
  deck.shuffle()

  // Divide the deck into two halves for the players
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inRound = false
  isGameStopped = false

  // Clean up before starting a round
  cleanBeforeRound()
}

// Clean up before a new round
function cleanBeforeRound() {
  inRound = false
  computerCardSlot.innerHTML = ""
  playerCardSlot.innerHTML = ""
  text.innerText = ""

  // Update the deck count display
  updateDeckCount()
}

// Flip the cards for a round
function flipCards() {
  inRound = true

  // Get the top cards from each deck
  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  // Display the cards in their respective card slots
  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())

  // Update the deck count display
  updateDeckCount()

  // Determine the round winner and update the text display accordingly
  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "Win"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "Lose"
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)
  } else {
    text.innerText = "Draw"
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }

  // Check if the game is over and update the text display
  if (isGameOver(playerDeck)) {
    text.innerText = "You Lose!!"
    isGameStopped = true
  } else if (isGameOver(computerDeck)) {
    text.innerText = "You Win!!"
    isGameStopped = true
  }
}

// Update the deck count display
function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards
  playerDeckElement.innerText = playerDeck.numberOfCards
}

// Check if cardOne is the winner of the round
function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

// Check if the game is over for a particular deck
function isGameOver(deck) {
  return deck.numberOfCards === 0
}
