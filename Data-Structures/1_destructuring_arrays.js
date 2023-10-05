'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // This is called Destructuring the array
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories; // This is one way of destructuring, here the elements are unpacked based on the index
console.log(main, secondary); //  Italian Pizzeria

// If we want to skip one element , then we have to use comma in between , so that the element is skipped
[main, , secondary] = restaurant.categories; // This is one way of destructuring, here the elements are unpacked based on the index
console.log(main, secondary); // Italian Vegetarian

// Switching variables without
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// To Swtich two variables by using destructuring, we can do as like this
// Also know as mutating the elements
[main, secondary] = [secondary, main];
console.log('Switching Variables');
console.log(main, secondary);

// Destructuring the elements 
const [starter, mainCourse] = restaurant.order(2, 0); // Making two variables with one function call
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i,j); // 2 , [5, 6]

// Nested Destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6 , in this each variable is assigned with the individual value present in the nested list

// Unpacking the elements that doesn't exist and setting the default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined , as no element is present at the 2nd index, element is not considered

const [d, e, f=0] = [8, 9];
console.log(d, e, f); // here the index for element f doesn't exist, so it is replaced with the default value that is present