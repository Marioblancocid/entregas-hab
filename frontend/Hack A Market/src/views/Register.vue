<template>
  <div class="Registro">

      <!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
    <vue-headful title="Registro"
    description="Página de registro de la aplicación."/>

    <h2 id="titulo">
      Registrate 👇
    </h2>
    <p v-show="required">Tienes datos aún por rellenar o no coincidien las contraseñas</p>
    <input type="text" placeholder="Escribe tu usuario" v-model="usuario">
    <input type="password" placeholder="Escribe tu contraseña" v-model="password">
    <input type="password" placeholder="Repite tu contraseña" v-model="password2">
    <button class="myButton" @click='addUser()'>
      Registrate
    </button>
  </div>
</template>

<script>
import { loginUser } from '../api/utils'
import axios from 'axios'
import MenuCustom from '@/components/MenuCustom.vue'
import Swal from 'sweetalert2'
export default {
  name: 'Register',
  data() {
    return {
      usuario: '',
      password: '',
      password2: '',
      correctData: false,
      required: false
    }
    },
    components: {
      MenuCustom
    },
    methods: {
      validatingData() {
      if (
        this.usuario === "" ||
        this.password === "" ||
        this.password2 === "" || 
        this.password !== this.password2
      ) {
        this.correctData = false; // NON ENVIAR
        this.required = true; // MOSTRA O MENSAXE
      } else {
        this.correctData = true; // ENVIAR
        this.required = false; // NON MOSTRA O MENSAXE
      }
    },
      addUser(usuario, password, password2) {
      this.validatingData(); // VALIDANDO DATOS DO FORM
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3050/addUser", {
            email: self.usuario,
            password: self.password
          })
          .then(function(response) {
            4
            self.$router.push('/')
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("No has rellenado todos los campos o las contraseñas no coinciden.");
      }
    }
    }

}
</script>

<style>
.Registro {
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
input {
  margin: 1rem;
}
.myButton {
	box-shadow: 0px 1px 0px 0px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:15px;
	border:2px solid #29668f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Impact;
	font-size:17px;
	font-weight:bold;
	padding:12px 14px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
  margin: 0.3rem;
}
.myButton:hover {
	background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	background-color:#408c99;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>