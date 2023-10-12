'use strict';

/*
ES6 Created three ways to create object literal
In this we have taken out the operning hours as a seperate variable from the object
1. No need to delcare the objects like old-fashioned
const name= { Name:'Gowrav'}
const details = { name: name }
const details = { name} // Can be done just by assigning the values
2. 
const add = { addition: function(numbers) { your logic } }
const add = { addition(numbers) { your logic } } , No need of using function keyword, for using a function
 */
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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
  // ES6 Enhanced Object Literals
  //   openingHours: openingHours
  openingHours,
};

console.log(restaurant.orderPasta('mushrooms', 'cheese'));
