'use strict';

function cMedia(media) {
  return (media[0] + media[1] + media[2]) / 3;
}

function compareNumbers(a, b) {
  return a - b;
}

function compararMedias(param1, param2, param3) {
  let media1 = cMedia(param1);
  let media2 = cMedia(param2);
  let media3 = cMedia(param3);
  console.log('Medias: Equipo 1: ' + media1 + ' Equipo 2: ' + media2 + ' Equipo 3: ' + media3);
  let mediasOrdenadas = [media1, media2, media3];
  mediasOrdenadas.sort(compareNumbers);
  console.log('Media más alta: ' + mediasOrdenadas[2]);
}

let equipoMaria = [62, 34, 55];
let equipoPaula = [35, 60, 59];
let equipoRebeca = [40, 39, 63];

compararMedias(equipoMaria, equipoPaula, equipoRebeca);
