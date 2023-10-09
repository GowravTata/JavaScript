'use strict';

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

// Getting Properties Keys
const propertyKeys = Object.keys(openingHours);
console.log(propertyKeys);

let openDays = `We are open on ${propertyKeys.length} days: `;
for (const day of propertyKeys) {
  openDays += `${day}, `;
}

console.log(openDays);

// Getting property values
const propertyValues = Object.values(openingHours);
console.log(propertyValues.entries());

//
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(
    // `On day ${day}, restaurant opens at ${data.open}, closes at ${data.close}`
    `On day ${day}, restaurant opens at ${open}, closes at ${close}`
  );
}
