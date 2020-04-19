'use strict';
let url = 'https://api.exchangerate-api.com/v5/latest';

async function getCoins(url) {
const body = document.body;
const datalist = document.querySelector('datalist#moeda');
const datalist2 = document.querySelector('datalist#moedaout');
const form = document.querySelector('form');
const result = document.querySelector('h2');
const response = await fetch(url);
const json = await response.json();
const coins = Object.keys(json.rates);
const divisa = json.rates;
for (const coin of coins) {
  let option = document.createElement('option');
  let option2 = document.createElement('option');
  option.setAttribute('value', coin);
  option2.setAttribute('value', coin);
  datalist.append(option);
  datalist2.append(option2);
}
form.addEventListener('submit', (event) => {
      event.preventDefault();
      const valor = document.querySelector('input#moedainput');
      const coinInput = document.querySelector('input#choosecoin');
      const coinOutput = document.querySelector('input#moeda');
      const ratio = coinInput.value;
      const ratio2 = coinOutput.value;
      const resultNumber = 0.01*Math.round(100*(valor.value/divisa[ratio] * divisa[ratio2]));
      result.textContent = `${valor.value} ${ratio} son ${resultNumber} ${ratio2}`;
      result.removeAttribute('hidden');
      result.style.color = 'black';
      if (coinInput.value === coinOutput.value) {
      result.textContent = `ERROR: NO PUEDES CONVERTIR UNA MONEDA A SI MISMA.`;
      result.style.color = 'red';
      }
  });
}

getCoins(url);
