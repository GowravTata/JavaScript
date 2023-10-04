'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Gowrav',
  age: 30,
};

const friend = me;
friend.age = 23;

console.log(friend.age);
console.log(me.age); // Now the age in me also becomes 23

/*
Primitive Data Types in JavaScript are : Primitive Types
Number
String
Boolean
Undefined
Null
Symbol
BigInt
*/

/*
Object types are:
1. Object Literal
2. Arrays
3. Functions
*/

let lastName = 'birla';
let oldLastName = lastName;

lastName = 'tata';
console.log(lastName, oldLastName);

const nameContainer = {
  moniker: 'Star',
  age: 27,
};

const dummyContainer = nameContainer;
dummyContainer.age = 25;

console.log(dummyContainer.age);
console.log(nameContainer.age);

/*
In the stack , we hold only the reference of the value, which is not to be changed
for primitive data type, even if the variable is assigned to another variable
two references are created, due to that, even though there is a change in one variable will 
not reflect in the other
*/

/*
When spoken about objects, the main thing the reference value is stored in the callstack
and reference to that is stored in the heap, in that manner objects holds both the reference
and the value
*/

// dummyContainer = {} // This will fail because , the empty object that is created contains new reference value which is to be taken from the memory
// value cannot be changed to a new memory address

const gowrav = {
  name: 'Star',
  age: 27,
};

const sai = {
  moniker: 'Tata',
  distance: 29,
  planet: 'earth',
  cars: ['Polo'],
};

const saiCopy = Object.assign({}, sai); // merging two objects in JS , it makes a shallow copy
saiCopy.moniker = 'Gowrav';

// console.log(sai); // moniker will be 'Tata'
// console.log(saiCopy) // moniker will be 'Gowrav'
saiCopy.cars.push('Creta'); // The pushed change will appear in both the constants, as the change done is too nested and Object method used above cannot go more than one level deep
saiCopy.cars.push('Seltos'); // The pushed change will appear in both the constants, as the change done is too nested and Object method used above cannot go more than one level deep

console.log(sai);
console.log(saiCopy);
