'use strict';

function BinaryConverter(number) {
  let binaryNumber = number.toString(2);
  console.log(`El número ${number} en binario es ${+binaryNumber}`);
  return +binaryNumber;
}

BinaryConverter(5000);