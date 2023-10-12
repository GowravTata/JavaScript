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

/*
Looping over all the elements in an object
*/
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item); // This access the each elements , to the arrays that are given

// To get the index of the element ,we do the following, here we have applied the destructuring directly in the 
for (const [index, item] of menu.entries()) {
  console.log(`${index+1}: ${item}`);
}

// Entries contains sub arrays which contains index and element in the sub array
// console.log(...menu.entries()); // [0, 'Pizza']0: 01: "Pizza"length: 2[[Prototype]]: Array(0) (2) [1, 'Pasta'] (2) [2, 'Risotto'] (2) [3, 'Focaccia'] (2) [4, 'Bruschetta'] (2) [5, 'Garlic Bread'] (2) [6, 'Caprese Salad']
