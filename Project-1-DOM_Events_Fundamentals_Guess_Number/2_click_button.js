'use strict';

/*
In this let's try to do something with the click of a button, 
Code will react to something , that happens in the DOM
*/

// EVENT : Something happening on a page. Ex: Mouse Click, Mouse Movement, Key Press
// EVENT Listener Wait for a certain event to happen and can react

/* First select the event where the event has to happen and pass another argument
as the function to which it has to do some computation as shown below
Below code has two arguments to be passed
1. Name of the event, below it is 'click'
2. Function : What to happen whenever the event happens
Function only be called as soon as the event happens or only when the event happens

In the below function , an function is passed as the second argument and 
input value is taken , the scenario implemented here it
1. To check if the input is given or not, if not given a message is shown in the screen 
as No number!
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);
  if(!guess) {
    console.log('No number !');
    document.querySelector('.message').textContent = 'No number !';
  }
});
