'use strict';

// Functions that run only once and never run again
// Immediately invoked function expression (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();


(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); // By adding () to the end of the function it can be used and deleted

// Arrow function in a immediate return manner
(() => console.log('This will never run again'))();