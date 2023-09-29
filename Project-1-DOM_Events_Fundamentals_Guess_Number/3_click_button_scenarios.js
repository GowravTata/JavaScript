'use strict';

// Using the function from 2_click_button.js

// Secret Number has to defined only once
/*
In the below function, we take the input value coming from the UI and
store it in a variable then we check with the various conditions present in the
below scenarios and update it as necessary
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    console.log('No number !');
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :)';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too high !';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too low !';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the Game !';
  }
});
