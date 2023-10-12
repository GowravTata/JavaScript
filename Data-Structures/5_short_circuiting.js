'use strict';

/*
Short Circuiting: Using of Logical Operators

Logical Operators can be used on any DATA Type
*/
// They can also be called short-circuiting evaluation
// In case of OR operation, if the first value is Truthy, then immediately returns it
console.log(3 || 'Gowrav'); //  3
console.log('' || 'Gowrav'); // Gowrav
console.log(undefined || null); // null, returned the last value as all the values are false
console.log(true || 0); // true

console.log(undefined || 0 || '' || 'Hello' || 23);

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const guest1 = restaurant.numGuests || 10;
console.log(guest1); // 10, as the numGuests doesn't exist 10 is taken as default, as no value is defined

restaurant.numGuests = 23;
const guest2 = restaurant.numGuests || 10; // 23 , as 23 is a truthy value

// AND Operation
// It returns the first falsy value or last value if all the values are truthy
console.log(7 && 'Gowrav'); // Gowrav
console.log(7 && 'Gowrav' && null && 'Hello' && 23); // null , as this a falsy value

// Below checks if the property exists and then executes the function
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// In the below checks, if the property exists in the object, executes the property only if the property
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// NULLISH COELSCING OPERATOR
// Still 0 is a value, it also has to be considered
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests || 10;
console.log(guest3);

// Only NULLISH values will short circuit the evaluation, (NOT 0 or '')
// IT takes only null and undefined
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);
