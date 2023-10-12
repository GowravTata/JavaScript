'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers
) {
  // This is the way of setting the default values in ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 200;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH234', 2); // This works only if the parameters before this are not defined
// createBooking('LH123', undefined, 600);

/*
Passing Arguments vs Reference
*/

const flight = 'LH234';
const gowrav = {
  name: 'Gowrav Tata',
  passport: 2134123123312,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 2134123123312) {
    alert('check in ');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, gowrav);
console.log(flight); // 'LH234', As it is a primitive, it did not get reflected
console.log(gowrav); //{name: 'Mr. Gowrav Tata', passport: 2134123123312} // As it is a object, it is changed
// In the above they both point to the same memory

// Objects behave in this manner, when passed to a function

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

// Interaction of functions with a same object
// newPassport(gowrav);
// console.log(gowrav);
// checkIn(flight, gowrav); // Alerts as wrong passport, as newPassport generates the new random passport

/*
First Class functions : JavaScript treats functions as first class citizens
Functions are other types of objects, functions are values
*/

// THERE ARE METHODS AVLAIBLE IN THE FUNCTION
/*
Higher Order Function: A function which receives another function as an 
argument that returns a new function or both

DOM which has addEventListener is the higher order function
btnClose.addEventListener('click',greet)
addEventListener is higher order function
greet is call back function
*/

// Function Accepting Call back functions
// Function that accepts other functions as input
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher Order Function
// This function takes input as a variable and
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(fn.name); // upperFirstWord
};

transformer('JavaScript is the best!', upperFirstWord); // JAVASCRIPT is the best!
transformer('JavaScript is the best!', oneWord); // javascriptisthebest!

// JS Uses callbacks all the time
const high5 = function () {
  console.log('Hello');
};
document.body.addEventListener('click', high5);

['Gowrav', 'Sai', 'Bhargav'].forEach(high5);

// Returning Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Closures
const greeterHey = greet('Hey');
greeterHey('Gowrav');
greeterHey('Tata');

greet('Hey')('Bhargav');

// Creating a higher order function with arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('Gowrav');

// CALL and APPLY methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// Let's assume that

lufthansa.book(239, 'Gowrav');
lufthansa.book(123, 'Bhargav');
console.log(lufthansa);

const book = lufthansa.book;
const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book(234, 'Sarah Willaims'); // Here there will be an error, with this keyword as undefined
// In the above, it will cause an error , as this keyword is scoped to object

book.call(euroWings, 23, 'Mahesh'); // to make the this keybword to refer eurowings, we pass the first argument as Flight Class
console.log(euroWings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 459, 'Pawan');
// APPLY METHOD
// It is not used more in javascript

const flightData = [583, 'Mahesh'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// BIND, Like APPLY, CALL it can be used to manually set the this keyword to any function call
const bookEW = book.bind(euroWings); // It creates a new object with the this keyword bound to it
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Bobby');

// Only for flight 23
const bookEW23 = book.bind(euroWings, 23); // Here the flgiht number is sent as an default argument
bookEW23('Sai');
bookEW23('Bhargav');

// Using objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// USE CASE OF bind method
// Partial Application : means, we can preset the parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Let's assume that there is tax that is to be added all the time
const addVAT = addTax.bind(null, 0.23); // we have set the tax rate as 0.23

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(1000));
