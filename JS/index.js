'use strict';
/*IMPORTANTE: La calculadora funciona siguiendo los pasos 
en los pop-ups del navegador y da la solución en la consola*/

function calculatorIfElse(Input1, Input2, operation) {
  if (operation === '+') {
    solution = Input1 + Input2;
  } else if (operation === '-') {
    solution = Input1 - Input2;
  } else if (operation === '*') {
    solution = Input1 * Input2;
  } else if (operation === '/') {
    solution = Input1 / Input2;
  } else if (operation === '**') {
    solution = Input1 ** Input2;
  } else {
    console.log('No has introducido un signo de operación válido.');
    return false;
  }
  console.log('La solución de tu operación es: ' + solution);
}

function calculatorSwitch(Input1, Input2, operation) {
  switch (operation) {
    case '+':
      solution = Input1 + Input2;
      break;
    case '-':
      solution = Input1 - Input2;
      break;
    case '*':
      solution = Input1 * Input2;
      break;
    case '/':
      solution = Input1 / Input2;
      break;
    case '**':
      solution = Input1 ** Input2;
      break;
    default:
      console.log('No has introducido un signo de operación válido.');
      return false;
  }
  console.log('La solución de tu operación es: ' + solution);
}

let solution = null;
let Election = +prompt(
  'Escribe 1 si quieres utilizar una calculadora basada en If else o 2 si quieres utilizarla basada en switch:'
);
if (Election === 1) {
  let numberOne = +prompt('Introduce el primer número:');
  let numberTwo = +prompt('introduce el segundo numero:');
  let operationSymbol = prompt('Introduce el símbolo de la operacion a realizar (+,-,*,/,**):');
  calculatorIfElse(numberOne, numberTwo, operationSymbol);
} else if (Election === 2) {
  let numberOne = +prompt('Introduce el primer número:');
  let numberTwo = +prompt('introduce el segundo numero:');
  let operationSymbol = prompt('Introduce el símbolo de la operacion a realizar (+,-,*,/,**):');
  calculatorSwitch(numberOne, numberTwo, operationSymbol);
} else {
  console.log('No has elegido ningun tipo de calculadora. Por favor recarga la página.');
}
