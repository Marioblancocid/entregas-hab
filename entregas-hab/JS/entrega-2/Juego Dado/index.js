"use strict";
let dado = [1, 2, 3, 4, 5, 6];
let tiradaDado = null;
let sumaPuntos = null;
function tirarDado() {
  tiradaDado = dado[Math.floor(Math.random() * dado.length)];
  sumaPuntos = sumaPuntos + tiradaDado;
  return tiradaDado;
}
function jugar(puntos) {
  for (let i = 1; i <= puntos; i++) {
    tirarDado();
    if (sumaPuntos >= puntos) {
      console.log(
        `¡Enhorabuena, ha salido un ${tiradaDado}! ¡Has ganado con un total de ${sumaPuntos} puntos`
      );
      break;
    }
    console.log(
      `Tirada ${i}: ha salido un ${tiradaDado}. Tienes un total de ${sumaPuntos} puntos.`
    );
  }
}
jugar(50);
