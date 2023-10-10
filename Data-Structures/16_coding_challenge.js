'use strict';

function correctName(wordsArray) {
  for (const [index, element] of Object.entries(wordsArray)) {
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
correctName(array);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
