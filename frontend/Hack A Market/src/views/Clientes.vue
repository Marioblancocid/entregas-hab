<template>
<div class="Clientes">

<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="Clientes"
description="Listado de clientes."/>


<!--CARGAMOS EL LOADING DIV QUE DESAPARECERÁ AL CARGAR-->
<div class="lds-facebook" v-show=!loading><div></div><div></div><div></div></div>
<p v-show=!loading id="loading"> Loading, please wait...</p>


<!--CARGAMOS EL MENU DE LINKS DE LA PAGINA-->
<MenuCustom v-show=loading></MenuCustom>


<!--CARGAMOS EL FUNCIONAMIENTO NORMAL DE LA PAGINA-->
<div v-show=loading><section>


<!--BARRA DE BÚSQUEDA POR NOMBRE/DESCRIPCION/ESTADO-->
<label for="byId">
  Busqueda por ID:  
  <input v-model="id" type="search" name="byId" placeholder="Búsqueda por ID... ">
  <button class="searchbutton" @click="searchChar(id)">
    Buscar por ID
  </button>
  </label></section></div>
  <div v-show="showErrorId">
    ESTE ID NO EXISTE PRUEBA CON OTRO
</div>


<!--CLIENTES AÑADIDOS POR LOS ADMINISTRADORES-->
<div v-show=loading>
<div class="clientesTable" v-show="allClientsShow">
    <h2 id="titulo">Lista de clientes</h2>
    <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>ID: {{cliente.id}}</p>
      <p>Nombre: {{cliente.nombre}}</p>
      <p>Apellido: {{cliente.apellido}}</p>
      <p>Ciudad: {{cliente.ciudad}}</p>
      <p>Empresa: {{cliente.empresa}}</p>
      <button class="searchbutton" @click="deleteClient(cliente.id)">BORRAR</button>
      <button class="searchbutton" @click="openModal(cliente.id)">
        Editar
      </button>
    </div>
</div>


<!--RESULTADOS DE LA BUSQUEDA DE CLIENTES-->
<div v-show="clientIdShow">
  <h2>Resultados de la búsqueda por id</h2>
  <p> ID: {{  clienteById.id }} </p>
  <p> Nombre: {{  clienteById.nombre }} </p>
  <p> Apellido: {{  clienteById.apellido }} </p>
  <p> Ciudad: {{  clienteById.ciudad }} </p>
  <p> Empresa: {{  clienteById.empresa }} </p>
</div>

<!-- MODAL PARA EDITAR CLIENTES-->
<div v-show="modal" class="modal">
    <div class="modalBox">
      <h2> Edita los datos de este usuario: </h2>
      <p v-show="required">Tienes datos aún por rellenar</p>
      <p>Nombre: </p>
      <input type="text" placeholder="Introduce el nombre" v-model="nombre">
      <p>Apellido: </p>
      <input type="text" placeholder="Introduce los apellidos" v-model="apellido">
      <p>Ciudad: </p>
      <input type="text" placeholder="Introduce la ciudad" v-model="ciudad">
      <p>Empresa: </p>
      <input type="text" placeholder="Introduce la empresa" v-model="empresa">
      <br>
      <br>
      <button class="searchbutton" @click="editClient">
        Edit
      </button>
      <button class="searchbutton" @click="closeModal">
        Cerrar
      </button>
</div></div></div>


</div>
</template>

<script>
//IMPORTAMOS AXIOS PARA LAS LLAMADAS AL BACKEND
import axios from "axios";

//IMPORTAMOS SWAL PARA LAS ALERTAS
import Swal from "sweetalert2";

//IMPORTAMOS EL MENU DE LINKS
import MenuCustom from '@/components/MenuCustom.vue'

export default {
  name: "Clientes",
  components: {
    MenuCustom
  },
  data() {
    return {
      //VARIABLE QUE CONTIENE EL ID DEL CLIENTE A BUSCAR
      id: null,
      //VARIABLE DONDE SE GUARDAN LOS CLIENTES
      clientes: [],
      //VARIABLE DONDE SE GUARDA EL CLIENTE BUSCADO POR ID
      clienteById: {},
      //SWITCH QUE ACTIVA LA APARICION DEL MODAL
      modal: false,
      //VARIABLES DONDE SE GUARDA LA EDICION DE LOS CLIENTES
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      //VARIABLE DONDE SE GUARDA EL ID DEL CLIENTE A BORRAR
      index: null,
      //VARIABLES PARA LA VALIDACIÓN DE DATA
      correctData: false,
      required: false,
      //MÁS VARIABLES DE SWITCH PARA LA APARICION DE CONTENIDO
      allClientsShow: true,
      clientIdShow: false,
      showErrorId: false,
      loading: false
    };
  },
  methods: {
    //BUSQUEDA DE CLIENTES
    searchChar(id) {
      if (!id) {
        return
      }
      this.getClientById(this.id);
    },
    //BUSQUEDA DE CLIENTES POR ID
    getClientById(id) {
      let self = this;
      axios
        .get("http://localhost:3050/clientes/id/" + id)
        .then(function(response) {
          console.log(response);
          self.clienteById = response.data[0];
        }).then(function() {
          if (self.clienteById.id){
            self.clientIdShow = true;
          self.allClientsShow = false;
          self.showErrorId = false;
        } else {
          self.clientIdShow = false;
          self.allClientsShow = true;
          self.showErrorId = true;

        }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //FUNCION VALIDADORA DE DATA
    validatingData() {
      if (
        self.nombre === "" ||
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
    //PEDIR CLIENTES A LA BBDD
    getClients() {
      let self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          console.log(response);
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //ENVIAR EDICION DE DATA A LA BBDD
    editClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(); // VALIDANDO DATOS DO FORM
      if (this.correctData === true) {
        let self = this;
        axios
          .put("http://localhost:3050/clientes", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa,
            id: self.index
          })
          .then(function(response) {
            self.emptyFields();
            self.getClients();
            self.closeModal();
            Swal.fire({
          icon: "success",
          title: "Ciente editado!",
          text: "Ahora podrás ver los cambios realizados!",
        });
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("No has rellenado todos los campos.");
      }
    },
    //BORRA CLIENTE
    deleteClient(index) {
      let self = this;
      axios
        .delete("http://localhost:3050/clientes/del/" + index)
        .then(function(response) {
          self.getClients();
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //FUNCIONES PARA CONTROLAR LA APERTURA Y CIERRE DEL MODAL
    openModal(index){
      this.index = index;
      this.modal = true
    },
    closeModal(){
      this.modal = false
    },
    //VACIADO DE LOS CAMPOS AL TERMINAR DE EDITAR
    emptyFields(){
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    }
  },
  //FUNCION PARA CONSEGUIR LOS CLIENTES AL ABRIR LA PAGINA
  created() {
    this.getClients();
  },
  
  mounted () {
  //FUNCIÓN QUE CAMBIA EL SWITCH DE LOADING PARA DEJAR 3SG DE CARGA
    setTimeout(() => {
      this.loading = true
    }, 3000)
  },
};
</script>

<style>
section {
  background: #1B4353;
  border-radius: 20px;
  margin: 1rem 0;
  padding: 1rem;
}
input {
  margin: 0.2rem;
}
.clientes {
  color: white;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
#loading {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}
.modal{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}
.modalBox {
  background: #1B4353;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
body {
    background: rgb(56, 152, 207);
}
h2 {
  margin: 1rem;
}
.clientesTable {
  color:  White;
  background: #1B4353;
  padding: 2rem 0;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
}
.clientes {
    border: rgb(60, 160, 218) 3px dashed;
    margin: 1rem;
    padding: 1rem;
}
p {
  background: none;
}
img {
  border-radius: 40px;
}
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
</style>