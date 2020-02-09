'use strict';

function PalindromeTwo(str) {
  let palindrom = str.split(' ').join('').toLowerCase();
  let palindromReversed = str.split(' ').join('').split('').reverse().join('').toLowerCase();
  if (palindrom === palindromReversed) {
    return true;
  }
  return false;
}

console.log(PalindromeTwo('Arriba la birra'));