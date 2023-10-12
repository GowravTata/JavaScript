'use strict';

// Functions that run only once and never run again
// Immediately invoked function expression (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  // All the data inside this is encapsulated meaning not exposed to be public
  const isPrivate = 23;
})(); // By adding () to the end of the function it can be used and deleted

// Arrow function in a immediate return manner
(() => console.log('This will never run again'))();

/*
Closure makes the function remember all the variables existed in the function's birthplace
A function has accesss to the variable environment of the executioncontext in which it was created
*/
const secureBooking = function () {
  let passengerCount = 0; // birthplace of passengerCount variable
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 7;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46 , now the value of f is assigned with the  new function that is created and can access the env variables that are present inside

//Reassigning the age
h();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
