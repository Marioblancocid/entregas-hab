// Indicando el uso de axios para la api
const axios = require('axios').default;

// base url de la api

const apiUrl = 'https://rickandmortyapi.com/api';

// funcion para coger todos los characters
function getAll(){
  return axios
  .get(`${apiUrl}/character`)
}

function getChar(id){
  return axios
    .get(`${apiUrl}/character/` + id)
}
export default {
  getAll, getChar
}