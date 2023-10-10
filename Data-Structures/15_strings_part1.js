'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

// Finding the length of the string
console.log(airline.length);

// STRING METHODS
console.log(airline.indexOf('r')); // Gives the first index of

// FINDING THE LAST OCCURENCE OF A CHARACTER IN THE STRING
console.log(airline.lastIndexOf('r'));

// indexOf is case sensitive, and returns -1 if the word doesn't exist
console.log(airline.indexOf('portugal'));

// SLICING the strings
console.log(airline.slice(0, 4)); // TAP , first is inclusive index, second is exclusive index

/*
As the strings are primitive, they are to be stored and then to be used
*/

const air = airline.slice(4, 7);
console.log(air);  // Air
