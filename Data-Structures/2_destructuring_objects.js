'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

console.log(
  restaurant.orderDelivery({
    time: '22:30',
    address: 'Road No 21',
    mainIndex: 2,
    starterIndex: 2,
  }) // In this as the whole things as sent as a single object, the properties in the calling place doesn't have to match the order of the function defiend in the object
);

// Example to check with the default value parameters
console.log(
  restaurant.orderDelivery({
    address: 'Road No 19',
  }) // In this as the whole things as sent as a single object, the properties in the calling place doesn't have to match the order of the function defiend in the object
);

// To destruct the object , we use curly braces
// Order of the elements doesnot matter
// Here the properties present in the object are given in an array, the value of that is assigned to that key
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Variable names to be different from property names
// In the below , the properties which are obtained above are assigned to a new variable
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Taking default values if the value does not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('Here an default value is defined above');
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 10;
let b = 12;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // 23  7 , so here we have overridden the initial variables

// Nested object destructuring
const {
  fri: { open: o, close: c },
} = openingHours; // In this way , nested elements can be taken and reassigned with a value
console.log(o, c);
