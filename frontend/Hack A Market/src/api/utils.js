//IMPORTAMOS AXIOS PARA LAS LLAMADAS A LA BBDD
import axios from 'axios'

//IMPORTAMOS JWT PARA LA GESTION DEL TOKEN
import jwt from 'jwt-decode'

//DECLARACIÓN DE VARIABLES QUE NECESITAREMOS PARA NUESTRAS FUNCIONES
const ENDPOINT = 'http://localhost:3050'
const AUTH_TOKEN_KEY = 'authToken'
const ROLE = "role";

// FUNCIÓN DE LOGIN
export function loginUser(usuario, password){
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios ({
        url: `${ENDPOINT}/auth`, // URL DE LA AUTENTICACIÓN
        method: 'POST', // MÉTODO DE LA AUTENTICACIÓN
        data: {
          usuario: usuario,
          password: password,
          grant_type: 'password'
        } // DATOS DE LA AUTENTICACIÓN
      })
      setAuthToken(res.data.token)
      setIsAdmin(res.data.isAdmin)
      resolve()
    } catch (err) {
      console.log('Error en login: ', err);
      reject(err)
    }
  })
}

// GUARDAR TOKEN EN LOCALSTORAGE
export function setAuthToken(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

// LOGOUT
export function clearLogin(){
  axios.defaults.headers.common["Authorization"] = ``;
  localStorage.removeItem(AUTH_TOKEN_KEY)
  clearAdmin()
}

// COGER EL TOKEN
export function getAuthToken(){
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

// CONSIGUIENDO FECHA DE EXPIRACIÓN DEL TOKEN
export function getTokenExpirationDate(encodedToken){
  let token = jwt(encodedToken)
  //si no hay, no sigue
  if(!token.exp) {
    return null
  }
  let date = new Date(0)
  date.setUTCSeconds(token.exp)
  return date
}

// COMPROBANDO SI LA FECHA SIGUE VIGENTE O NO
export function isTokenExpired(token){
  let expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}

//COMPROBAR SI EL USER ESTÁ LOGEADO O NO
export function isLoggedIn() {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
}

// FUNCIONES PARA COMPROBAR EL ROL DEL USER ===========


// GUARDAR SI ES ADMIN EN LOCAL STORAGE
export function setIsAdmin(isAdmin){
  localStorage.setItem(ROLE, isAdmin)
}


// BORRAR ROL DEL USER EN LOCAL STORAGE
export function clearAdmin(){
  return localStorage.removeItem(ROLE)
}


// RECUPERAR ROL DESDE EL LOCAL STORAGE
export function getIsAdmin(){
  return localStorage.getItem(ROLE)
}

//RECUPERAR EL NOMBRE DESDE EL LOCAL STORAGE 
export function getName(){
  return localStorage.getItem("name")

}
// COMPROBAR ROL
export function checkAdmin(){
  let role = false
  let isAdmin = getIsAdmin()
  if(isAdmin === 'true'){
    role = true
  } else {
    role = false
  }
  return role
}
