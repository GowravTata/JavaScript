'use strict';

/*
In this script the main intention is to change the colour of the background 
whenever the score is correct, for that we need to manipulate the CSS Sheets

When the guess is same as secretNumber then the style property is changed
here, the styles changed are backgroundColor and width of the box
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
    // highScore = Math.max(score, highScore) // can also be done like this
    document.querySelector('.highscore').textContent = highScore;
    // Changing the CSS Style when the guess is correct !
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Increasing the width of the box
    document.querySelector('.number').style.width = '30rem';
    // When guess if too high
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too high !';
    score--;
    document.querySelector('.score').textContent = score;
    // When guess if too low
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too low !';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the Game !';
  }
});
