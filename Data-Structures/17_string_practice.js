'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  // Required Output
// red Delayed Departure  From FAO TO TXL11h25
// Arrival  From BRU TO FAO11h45
// red Delayed Arrival  From HEL TO FAO12h05
// Departure  From FAO TO LIS12h30
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const newArray = `${type.includes('Delayed') ? 'red ' : ''}${type
    .replaceAll('_', ' ')
    .trim()}  From ${getCode(from)} TO ${getCode(to)}${time.replace(':', 'h')}`;
  console.log(newArray);
}
