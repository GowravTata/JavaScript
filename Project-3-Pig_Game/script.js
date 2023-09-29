'use strict';

/*

*/

// # is the selector for id in the HTML
// In order to select the id, getElementById also can be
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Setting the score to 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// To persist the current score, use it outside the function
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const diceRoll = function () {
  /*
    The function does the following
    1. Generating a random number
    2. Display the dice which is hidden earlier , by changing the src image 
    3. Display the score on current score
    */
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden'); // It shows the dice
  diceEl.src = `dice-${dice}.png`; // Dynamically loads the images
  console.log(dice);
  if (dice !== 1) {
    // Add to the current score
    currentScore += dice;
    // Selecting the player dynamically by directly selecting the active player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // currentPlayer.textContent = currentScore; // Assigning the value to the current player
  } else {
    // Switch to the next player
    // Holds the value of the player & Reset the current score
    player0El.classList.toggle('player--active'); // Add the class , if the class is not there, if not it will remove
    player1El.classList.toggle('player--active');
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
  }
};

const holdCurrentScore =  function() {
    /*
    1. Add Current score to active player's score
    2. Check if player's score is >=100
    3. Switch to the next player
    */
   document.getElementById(`current--${activePlayer}`).textContent = currentScore
}

btnRoll.addEventListener('click', diceRoll);

