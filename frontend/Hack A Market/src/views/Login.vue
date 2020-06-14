<template>
  <div class="Login">

      <!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
    <vue-headful title="Login"
    description="Página para logearse en la aplicación"/>

    <h2 id="titulo">
      Loguéate! 👇
    </h2>
    <input type="text" placeholder="Escribe tu usuario" v-model="usuario">
    <input type="password" placeholder="Escribe tu contraseña" v-model="password">
    <button class="myButton" @click='login()'>
      HAZ LOGIN
    </button>
    <br>
    <router-link :to="{ name: 'Register'}">O registrate aquí.</router-link>
  </div>
</template>

<script>
import { loginUser } from '../api/utils'

export default {
  name: 'Login',
  data() {
    return {
      usuario: '',
      password: ''
    }
    },
    methods: {
      async login(){
        try {
          // INTENTO HACER LOGIN
          await loginUser(this.usuario, this.password);
          localStorage.setItem("name", this.usuario)
          // SI HAY LOGIN, QUE ME LLEVE AL HOME
          this.$router.push('/home')
        } catch (error) {
          alert(`Error: ${error}`)
        }
      }
    }

}
</script>

<style>
#titulo {
  border: 4px #6DAEDB dashed;
  margin: 1rem;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Login {
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
a {
  color: white;
}

</style>