<template>
<div class="home">

<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="Home"
description="Página principal del proyecto clientes"/>


<!--FUNCIONALIDAD NORMAL DEL HOME CON SUS LINKS DE ACCESO-->
<h1>Hola, {{ username }}</h1>
<h2>Qué te apetece hacer hoy?</h2>


<!--LINKS PARA USUARIOS NORMALES EN EL HOME-->
<section id='normalrouters'>
  <p><router-link :to="{ name: 'Productos'}">Ir a productos</router-link></p>
  <p><router-link :to="{ name: 'About'}">Ir a about</router-link></p>
  <p><router-link :to="{ name: 'Clientes'}">Ir a clientes</router-link></p>
  <button class="mybutton" @click="logoutUser()">Logout</button>
</section>


<!--FUNCIONALIDADES PARA ADMINISTRADORES EN EL HOME-->
<section v-show="adminroutes"><h3>Rutas administrador</h3>
<p><router-link :to="{ name: 'AddClient'}">Añadir Clientes</router-link></p></section></div>


</template>

<script>

//IMPORTAMOS AXIOS PARA LAS LLAMADAS AL BACKEND
import axios from "axios";

//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import MenuCustom from '@/components/MenuCustom.vue'

//IMPORTAMOS FUNCIONES PARA LA IDENTIFICACION Y LOGOUT DEL USUARIO
import { getName , getIsAdmin } from '../api/utils'
import { clearLogin } from '../api/utils'


export default {
  name: "Home",
  components: {
    MenuCustom
  },
  data() {
    return {
      //VARIABLE DONDE SE GUARDA EL NOMBRE DEL USER
      username: 'desconocido',
      //VARIABLE QUE DETECTA SI EL USER ES ADMIN
      adminroutes: false
    };
  },
  methods: {
    //FUNCION PARA HACER LOGOUT DEL USER
    logoutUser(){
      clearLogin();
      this.$router.push('/');
      return
    },
    //FUNCION PARA RECOGER EL NAME DEL LOCALSTORAGE
    getNameToData(){
      const username = getName();
      this.username = username;
    }
  },
  created() {
    //DETECTAR NOMBRE Y ROL AL CREAR LA PAGINA
    this.getNameToData();
    if (getIsAdmin() === 'true') {
      this.adminroutes = true;
    }
  }
};

</script>

<style>
body {
  background: rgb(56, 152, 207);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  background: rgba(97, 159, 204, 0.151);
}
h2 {
  padding: 1rem;
}
.home {
  color:  #6DAEDB;
  background: #1B4353;
  padding: 2rem 0;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  max-width: 90vw;
  max-height: 90vh;
}
a {
  text-decoration: none;
}
a:visited {
  color: white;
}

h1 {
  font-size: 2rem;
  padding: 1rem;
}
.mybutton {
	box-shadow:inset 0px 34px 0px -15px #b54b3a;
	background-color:#a73f2d;
	border:1px solid #241d13;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:9px 23px;
	text-decoration:none;
	text-shadow:0px -1px 0px #7a2a1d;
}
.mybutton:hover {
	background-color:#b34332;
}
.mybutton:active {
	position:relative;
	top:1px;
}

</style>