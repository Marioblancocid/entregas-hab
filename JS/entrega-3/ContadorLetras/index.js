'use strict';

function LetterCount(str) {
  let modArray = str.replace('.', '').replace(',', '').split(' ');
  let longestWord = '';
  let longestWordlength = 0;
  for (let i = 0; i < modArray.length; i++) {
    modArray[i].split('');
    if (modArray[i].length > longestWordlength) {
      longestWordlength = modArray[i].length;
      longestWord = modArray[i];

    }
  }
  console.log(`La palabra más larga de esta frase es: ${longestWord}`);
  console.log(`Tiene una longitud de: ${longestWordlength} letras.`);
  return longestWord;
}


LetterCount('Hoy es un día estupendo y fantástico.');
