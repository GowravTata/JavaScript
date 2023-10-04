'use strict';

// var firstName = 'Gowrav';
const tata = {
  firstName: 'Tata',
  year: 1993,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // const self = this;
    // console.log(self);
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, // this doesn't exist in arrow functions and takes the reference from one scope above of it
};

// Never use the arrow function as a method

tata.greet();
tata.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
};
addExpr(2, 4, 5, 6); // For a function declaration or expression any number of arguments can be sent but not in arrow functions

const addArrrow = (a, b) => {
  console.log(arguments);
};

addExpr(2, 4, 5, 6); 
