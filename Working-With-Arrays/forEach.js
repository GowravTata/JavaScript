'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   console.log(
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdrew ${Math.abs(movement)}`
//   );
// }

movements.forEach((movement, i) =>
  console.log(
    movement > 0
      ? `Transaction ${i + 1}: You deposited ${movement}`
      : `Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`
  )
);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(
  currencies.forEach(function (value, key, map) {
    console.log(`${key}:${value}`);
  })
);

// using forEach with sets
const currenciesUnique = new Set([...currencies.keys()]);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
