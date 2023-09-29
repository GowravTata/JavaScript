'use strict';
// to read the text content from the HTML File and can see the log in console
console.log(document.querySelector('.message').textContent); // Unedited part of HTML

/*
 DOM Manipulation : Connecting HTML with JavaScript, 
 It is a structured representation of the HTML Document
 DOM allows to manipulate HTML , CSS attributes
 DOM is a connection point between HTML , CSS

 DOM methods are a part of Web APIs, not a part of JavaScript
*/

// Setting the content of the web page

// The below line is to manipulate the content present in the HTML File
// Here class present in HTML is selected and is assigned with the string that we want as output

document.querySelector('.message').textContent = 'Correct Number'; // New content edited here
// Checking the changes that are made
console.log(document.querySelector('.message').textContent); // Checking if the changes are applied in the console

/*
Manually changing the values of the number and score by using document method
Just for Fun ! :)
*/

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

/*
In the below two lines, we take the class of the input number and 
assign it with a value , for assigning a value , (value) operator is to be used
In the second line, we're checking in the console whether the same is getting reflected or not
*/
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
