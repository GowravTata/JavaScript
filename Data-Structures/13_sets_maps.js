'use strict';

/*
Set is a collection of unique values
They never have duplicates and order is maintained
*/

const orderSet = new Set([[{ new: 'Value' }], 'Pizza', 'Pizza', 'Pasta']);

// To find the size of the set
console.log(orderSet.size);

// To check if an element exists in Set
console.log(orderSet.has('Pizza'));

orderSet.add('Bread');
// To delete an element in the set
// console.log(orderSet.delete('Pasta'));

// Iterating the elements in the set
for (const order of orderSet) console.log(order);

// Use Case of Set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Make it an array use the spread operator
console.log(staffUnique);

// To delete all the elements in the set
orderSet.clear();
console.log(orderSet);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //   order: function (starterIndex, mainIndex) { // In ES6 , this is introduced new
  //  The same is applied at all the functions where ever the place is available
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours,
};

// Maps
// Any thing can be added to this data structure
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenzo, Italy');
rest.set(2, 'Lisbon,Portugal');
console.log(rest);

rest
  .set('catergories', [restaurant.categories])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check id the map contains a key
console.log(rest.has('categories'));

// Delete a key from the map
rest.delete(2);
console.log(rest);

//  Size of the map
console.log(rest.size);

// Clear the map
rest.clear();
console.log(rest);

// Setting the array as an map key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

// If the array value is passed directly, it will not be retrieved, but if it passed as by
// storing it in a const , then it can be fetched, as the both point to the same address
console.log(rest.get(arr));

// It can be also used for DOM Elements
// It can enable some advanced functionality
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Without set , Maps can also be used like this
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['orrect', 3],
  [true, 'Correct 🙂'],
  [false, 'Try again! 😐'],
]);

console.log(question);

// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// ITERATIONS IN MAP
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Option ${key} :${value}`);
  }
}

const answer = Number(prompt('Your Answer'));
