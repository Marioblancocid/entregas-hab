<template>
<div>

<!--CARGAMOS EL MENU DE LINKS DE LA PAGINA-->
<MenuCustom></MenuCustom>
<div class="addclient">


<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="Añadir Clientes"
description="Añadir clientes a la aplicación"/>

<!-- FORMULARIO PARA AÑADIR CLIENTES-->
    <div>
      <p v-show="required">Tienes datos aún por rellenar</p>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="apellido del cliente" v-model="apellido" />
      <br />
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <button class="searchbutton" @click="addClient(nombre, apellido, ciudad, empresa)">CREAR</button>
    </div>
  </div>
  </div>
</template>

<script>
//IMPORTAMOS AXIOS PARA LAS LLAMADAS AL BACKEND
import axios from "axios";

//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import MenuCustom from '@/components/MenuCustom.vue'


export default {
  name: "AddClient",
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false
    };
  },
  components: {
    MenuCustom
  },
  methods: {
    //FUNCION VALIDADORA DE DATA
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false; // NON ENVIAR
        this.required = true; // MOSTRA O MENSAXE
      } else {
        this.correctData = true; // ENVIAR
        this.required = false; // NON MOSTRA O MENSAXE
      }
    },
    //FUNCION PARA AÑADIR CLIENTE A LA BBDD
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(); // VALIDANDO DATOS DO FORM
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("No has rellenado todos los campos.");
      }
    },
    //VACIADO DE CAMPOS TRAS AÑADIR EL CLIENTE A LA BBDD
    emptyFields() {
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    }
  }
};
</script>

<style scoped>
.searchbutton {
  margin: 0.2rem;
	box-shadow:inset 0px 0px 15px 3px #23395e;
	background:linear-gradient(to bottom, #2e466e 5%, #415989 100%);
	background-color:#2e466e;
	border-radius:17px;
	border:1px solid #1f2f47;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:6px 13px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;
}
.searchbutton:hover {
	background:linear-gradient(to bottom, #415989 5%, #2e466e 100%);
	background-color:#415989;
}
.searchbutton:active {
	position:relative;
	top:1px;
}
.addclient {
  margin: 1rem 0rem;
  color:  #6DAEDB;
  background: #1B4353;
  padding: 2rem 1rem;
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
</style>