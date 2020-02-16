'use strict'
const urlEUR = 'https://api.exchangerate-api.com/v4/latest/EUR';
const urlUSD = 'https://api.exchangerate-api.com/v4/latest/USD';
function getCoins(EUR) {
  console.log('----------------CONVERSOR-----------------');
  console.log('Unidades redondeadas a centésimas para utilizar valores funcionales.');
  let dolars = new Promise((resolve, reject) => {
    resolve(fetch(urlEUR).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(`Cantidad introducida en Euros: ${EUR}, Cantidad en dólares: ${Math.round(data.rates.USD * EUR * 100) / 100}`);
      return (data.rates.USD);
    })
    );
  });

  let dolardata = new Promise((resolve, reject) => {
    resolve(fetch(urlUSD).then(() => {
      return fetch(urlUSD).then((response) => {
        return response.json();
      }).then((data) => { return data.rates.JPY });
    }))
  });
  const dataArray = [dolars, dolardata];
  Promise.all(dataArray).then((allData) => {
    console.log(`Cantidad de dólares: ${Math.round(allData[0] * EUR * 100) / 100}, Cantidad en yenes: ${Math.round(allData[1] * allData[0] * 100) / 100}`);
  });
}
getCoins(15);
