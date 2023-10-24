'use strict';

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(item => item ** 2);
// console.log(arr2);

// console.log(arr2.filter(val => val == 4));

// console.log(arr.reduce((a, b) => a + b));

let arr3 = [];
arr3.push(...arr.map(item => item ** 2));
// console.log(arr3);

// REDUCE method

//OOP in JavaScript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   return `${firstName} is born in ${birthYear}`;
};

// We call the constructor using new Keyword
const person = new Person('Sam', 1934);
console.log(person); // Person {firstName: 'Sam', birthYear: 1934}
console.log(person instanceof Person);
// console.log(person.calcAge());

console.log(typeof 'Gowrav');
Person.prototype.species = 'Homo Sapiens';
console.log(person);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
person.calcAge();

console.log(person.species);
