'use strict';
/*
These are introduced in ES 2021
*/

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovannni Rossi',
};

// SET the default number for all the objects, that doesn't have number of guests

rest1.numGuests = rest1.numGuests || 10; // takes 20 as value, as in OR condition 20 is truthy value
rest2.numGuests = rest1.numGuests || 10; // takes 20 as value, as in OR condition 20 is truthy value
console.log(rest1); // {name: 'La Piazza', owner: 'Giovannni Rossi', numGuests: 20}
console.log(rest2); // {name: 'La Piazza', owner: 'Giovannni Rossi', numGuests: 20}

// Logical OR operator, it assigns value to the variable if the variable is currently falsy in the below condition
// rest1.numGuests ||= 10; // same as rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;
/* 
If the number of guests is 0, in the given object, then 0 is taken as falsy value and it is returned with the truthy value
That is know as knowledge assignment operator
*/
rest1.numGuests = 0;
rest1.numGuests ??= 30;
rest2.numGuests ??= 30;

//LOGICAL AND, assign a value to the variable if is is truthy
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
console.log(rest1); // name: 'Capri', numGuests: 0}
console.log(rest2); //  {name: 'La Piazza', owner: 'ANONYMOUS', numGuests: 20}
