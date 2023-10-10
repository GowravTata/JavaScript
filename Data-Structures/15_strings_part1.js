'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Finding the length of the string
console.log(airline.length); // 16 , also includes the spaces present in the string

// STRING METHODS
console.log(airline.indexOf('r')); // Gives the first index of

// FINDING THE LAST OCCURENCE OF A CHARACTER IN THE STRING
console.log(airline.lastIndexOf('r'));

// indexOf is case sensitive, and returns -1 if the word doesn't exist
console.log(airline.indexOf('portugal'));

// SLICING the strings
// console.log(airline.slice(0, 4)); // TAP , first is inclusive index, second is exclusive index

/*
As the strings are primitive, they are to be stored and then to be used
*/

const air = airline.slice(4, 7);
console.log(air); // Air

/*
Instead of hardcoding the indexes, we'll use some technique
*/

console.log(airline.slice(0, airline.indexOf(' ')));

// Below find the last index of the space present in the string and then slices from that part to the end
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal 1 is added to get rid of space

// Using the negative index with the string
console.log(airline.slice(-2)); // al it takes only the
console.log(airline.slice(1, -1)); // AP Air Portuga, first character is cut off

const checkMiddleSeat = function (seat) {
  // B , E are middle seats
  const s = seat.slice(-1);
  if (['B', 'E'].includes(s)) console.log(`You got a middle seat 😬`);
  else console.log(`You got lucky 😎`);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('5E');

// Changing the case of the string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'gOwRaV';
const passengerLowerCase = passenger.toLowerCase(); // Convert everything to lowercaose
const passengerCorrect =
  passenger[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect);

// Creating a function to do the same
const passengerCorector = function (passegerName) {
  const correctedName =
    passegerName[0].toUpperCase() + passegerName.toLowerCase().slice(1);
  console.log(correctedName);
};

// passengerCorector('gowrav');

// Comparing Email
const email = 'hello@gowrav.io';
const logInEmail = ' Hello@GowRav.Io \n';

const lowerEmail = logInEmail.toLowerCase();
// Get rid of the white spaces

const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = email.toLowerCase().trim();
console.log(email === normalisedEmail);

// Replacing parts of the string
const priceIND = '288,97';
const priceUS = priceIND.replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Using RE for a sentence
console.log(announcement.replace(/door/g, 'gate')); // g for global

// Methods that return booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320')); // true
console.log(newPlane.includes('Boeing')); // false

console.log(newPlane.startsWith('Air')); // true

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You will NOT be allowed to board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Snacks and Gun for protection');

// Splitting the string
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Gowrav Tata'.split(' ');
console.log(firstName, lastName);

// Joining the string after splitting
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passengerName = 'tata gowrav sai bhargav';
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('gowrav tata');
capitalizeName(passengerName);

// PADDING A STRING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Gowrav'.padStart(25, '+')); // +++++++++++++++++++Gowrav

console.log(message.padStart(25, '+').padEnd(35, '-')); // +++++++++++Go to gate 23!
console.log('Gowrav'.padStart(25, '+').padEnd(35, '-')); // +++++++++++++++++++Gowrav

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
};

const trialCard = 123213132312421;
maskCreditCard(trialCard); // ***********2421

// REPEAT STRING
// it allows us to repeat the string multiple times
const message2 = 'Bad Weather... All departures Delayed\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
