'use strict';

function correctName(wordsArrays) {
  // const wordsArray = wordsArrays.split('\n')
  for (const [index, element] of Object.entries(wordsArrays)) {
    const indexFinder = element.indexOf('_');
    let substring = '';
    substring +=
      element.slice(0, indexFinder).toLowerCase() +
      element[indexFinder + 1].toUpperCase() +
      element.slice(indexFinder + 2).toLowerCase();
    console.log(
      substring.padEnd(20, ' ') + ' ' + '✅'.repeat(Number(index) + 1),
      '\n'
    );
  }
}

const array = ['CAMEL_case', 'UNDER_Score', 'FIRST_NAME'];
// correctName(array);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

// CORRECT SOLUTION
document.querySelector('button').addEventListener('click', function () {
  const wordsArrays = document.querySelector('textarea').value;
  const wordsArray = wordsArrays.split('\n');
  for (const [index, element] of wordsArray.entries()) {
    const [first, second] = element.toLowerCase().trim().split('_');
    const correctedFullName = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    const output =
      correctedFullName.padEnd(20) + '✅'.repeat(index+1) ;
    console.log(output);
  }
});

// NOT AN EFFICIENT METHOD
function correctNameNew(wordsArrays) {
  // const wordsArray = wordsArrays.split('\n')
  for (const [index, element] of Object.entries(wordsArrays)) {
    const [first, second] = element.toLowerCase().split('_');
    const correctedFullName = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(
      correctedFullName.padEnd(20, ' ') + ' ' + '✅'.repeat(Number(index) + 1),
      '\n'
    );
  }
}