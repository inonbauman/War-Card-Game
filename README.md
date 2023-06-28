Card Game Project
This project is a simple card game implemented using HTML, CSS, and JavaScript. It allows players to flip cards and compete against the computer. The game follows the rules of comparing card values to determine the winner of each round.

How to Play
To play the game, follow these steps:

Open the index.html file in a web browser.
Click on the screen to flip the cards and start the game.
The top card from each player's deck will be displayed.
The winner of each round is determined by comparing the card values.
If you win a round, you will gain both cards. If you lose, the computer will gain the cards. In case of a draw, both players keep their respective cards.
The game continues until one of the players runs out of cards.
To start a new game, click on the screen after the game ends.
Project Structure
The project consists of the following files:

index.html: The main HTML file that displays the game interface.
styles.css: The CSS file that defines the styles and layout of the game elements.
script.js: The JavaScript file that contains the game logic and controls the game flow.
deck.js: A JavaScript module that defines the Deck class and Card class used in the game.
Game Logic
The game logic is implemented in the script.js file. It includes functions for starting a new game, flipping cards, determining the round winner, and checking for the end of the game. The Deck class in the deck.js file handles the management of the cards and provides methods for shuffling the deck, popping cards from the top, and pushing cards to the bottom.

