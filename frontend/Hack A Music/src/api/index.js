//IMPORTAMOS LOS DATOS DE LA API PRESENTES EN EL CONFIG
import config from './config.js'

//IMPORTAMOS AXIOS TRAS INSTALARLO CON "npm i --save axios"
const axios = require('axios').default;

//GUARDAMOS LA APIKEY EN UNA CONSTANTE
const apiKey = config.apiKey


//GUARDAMOS EN CONSTANTES TODAS LAS URL UTILES
//PARA BUILDEAR NUESTRAS REQUESTS
const BASE_URL = "https://ws.audioscrobbler.com/";
const URL_GEO = "2.0/?method=geo.gettopartists&country=spain&api_key="+apiKey+"&format=json";
const URL_TRACKS = "/2.0/?method=geo.gettoptracks&country=spain&api_key="+apiKey+"&format=json";
const URL_TAGS = "/2.0/?method=chart.gettoptags&api_key="+apiKey+"&format=json";
//CREAMOS LA FUNCION getArtists PARA IMPORTARLA LUEGO EN HOME
async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_GEO}`);
    console.log(response);
    return response;
  } catch (error) {
  console.error(error); 
  }
}

//GET TOP TRACKS
async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TRACKS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

//GET TOP TAGS
async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TAGS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getArtists, getTopTracks, getTopTags
}