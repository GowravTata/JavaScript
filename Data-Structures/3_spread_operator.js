'use strict';

/*
Expand an array to all the elements
*/

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr]; // We can use this to add multiple values seperated by array to add it to a new constant or array
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9

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
};

// Adding new elements to an existing array and storing it in a new variable
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

/*
Spread operator doesn't create new variables
*/

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

/*
Spread operators work on all iterables Ex:arrays, string, sets. NOT objects.
*/
const str = 'Gowrav';
const letters = [...str];
console.log(letters); // ['G', 'o', 'w', 'r', 'a', 'v']

// Real world example
const ingredients = [
  //   prompt("Let's make  pasta! Ingredient 1 ?"),
  //   prompt("Let's make  pasta! Ingredient 2 ?"),
  //   prompt("Let's make  pasta! Ingredient 3 ?"),
];

restaurant.orderPasta(...ingredients);

// Creating new objects with spread operator
const newRestaurant = { foundedIn: 2000, ...restaurant };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Tata's";
console.log(restaurantCopy.name); //Tata's
console.log(restaurant.name); // Classico Italiano