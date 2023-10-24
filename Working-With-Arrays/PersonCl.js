'use strict';
// CLASSES
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    return `${this.firstName} is ${
      new Date().getFullYear() - this.birthYear
    } years old`;
  }
}

const nari = new PersonCl('Narayan', 1919);
console.log(nari);
console.log(nari.calcAge());

PersonCl.prototype.greet = function () {
  return `Hello ${this.firstName}`;
};
console.log(nari.greet());

// SETTERS AND GETTERS

const account = {
  owner: 'Sathi',
  movements: [45, 2131, 3434343, 122121],
  // To make this as a getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(move) {
    this.movements.push(move);
  },
};
// NO NEED TO CALL THE METHOD LIKE AS A FUNCTION, CAN BE CALLED JUST LIKE A PROPERTY
console.log(account.latest);

// Just like a normal thing , it can be used to set the value in JS
account.latest = 23;
console.log(account.movements);
