'use strict';

var me = 'Gowrav';
let job = 'Private';
const year = '2023';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // in this it checks inside, and gives as undefined
};

calcAge(2000);

const calcArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // this keyword here points to the outer scope
};

calcArrow(2000);

const tata = {
  year: 2020,
  calcAge: calcAge,
};

const bhargav = {
    year:2000
}

bhargav.calcAge = tata.calcAge // This is known as method borrowing

console.log(bhargav.calcAge(2012));