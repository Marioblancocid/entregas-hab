<template>
  <div class="Productos">

<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="Productos"
description="Listado de productos disponibles"/>


<!--CARGAMOS EL LOADING SPINNER QUE DESAPARECERÁ AL CARGAR-->
<div class="lds-facebook" v-show=!loading><div></div><div></div><div></div></div>
<p v-show=!loading id="loading"> Loading, please wait...</p>

<!--CARGAMOS EL FUNCIONAMIENTO NORMAL DE LA PAGINA-->
<div v-show=loading>

<!--CARGAMOS EL MENU DE LINKS DE LA PAGINA-->
<MenuCustom></MenuCustom>

<!--BARRA DE BÚSQUEDA POR NOMBRE/DESCRIPCION/ESTADO-->
<section id="searchbars">
  <label for="bySearch">
  <button class="searchbutton" @click="clear()">Clear</button>
    Busca tu producto:
  <input v-model="search" type="search" name="bySearch" placeholder="Búsqueda...">
  </label>

<!--BARRA DE BÚSQUEDA POR ID-->
  <label for="byId">
  Busqueda por ID:  
  <input v-model="id" type="search" name="byId" placeholder="Búsqueda por ID... ">
  <button class="searchbutton" @click="searchChar(id)">Buscar por ID</button>
  </label>
</section>

<!--ERROR QUE APARECE SI NO SE ENCUENTRAN RESULTADOS POR ID-->
<div  v-show="showErrorId"><h2> NO EXISTE ESA ID </h2></div>

<!--CARGAMOS LOS COMPONENTES DE PRODUCTOS-->
<ProductsTable v-show="allProductsShow" :productos="filteredProducts"></ProductsTable>
<ProductsIdTable v-show="productoIdShow" :productoById="productoById"></ProductsIdTable>


<!-- MODAL PARA EDITAR USUARIOS-->
</div>
  <div v-show="modal" class="modal">
    <MenuCustom></MenuCustom>
    <div class="modalBox">
      <h2> Modal para datos </h2>
      <input type="text" placeholder="Hola, soy un input"><br><br>
      <button @click="closeModal">
        Cerrar
      </button>
  </div>
</div>

</div>
</template>

<script>
//IMPORTAMOS AXIOS PARA LAS LLAMADAS AL BACKEND
import axios from "axios";

//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import MenuCustom from '@/components/MenuCustom.vue'
import ProductsTable from '@/components/ProductsTable.vue'
import ProductsIdTable from '@/components/ProductsIdTable.vue'


export default {
  name: "Clientes",
  components: {
    MenuCustom, ProductsTable, ProductsIdTable
  },
  data() {
    return {
      //VARIABLE DONDE SE GUARDA LA BUSQUEDA A REALIZAR
      search: "",
      //VARIABLE DONDE SE GUARDAN LOS PRODUCTOS
      productos: [],
      //SWITCH DE APARICIÓN DEL MODAL
      modal: false,
      //ID PARA LA BUSQUEDA POR ID
      id: null,
      //VARIABLE DONDE SE GUARDA EL PRODUCTO POR ID
      productoById: {},
      //SWITCH's DE APARICION DE COMPONENTES
      allProductsShow: true,
      productoIdShow: false,
      showErrorId: false,
      loading: false
    };
  },
  methods: {
    //BUSQUEDA DE PRODUCTOS
    searchChar(id) {
      if (!id) {
        return
      }
      this.getProductById(this.id);
    },
    //BUSQUEDA DE PRODUCTOS POR ID
    getProductById(id) {
      let self = this;
      axios
        .get("http://localhost:3050/productos/id/" + id)
        .then(function(response) {
          self.productoById = response.data[0];
        }).then(function() {
          if (self.productoById === undefined){
            self.productoIdShow = false;
          self.allProductsShow = true;
          self.showErrorId = true;
        } else {
              self.productoIdShow = true;
          self.allProductsShow = false;
          self.showErrorId = false;
        }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //PETICION DE PRODUCTOS AL BACKEND
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          console.log(response);
          self.productos = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //FUNCIONES PARA ACTIVAR EL MODAL
    openModal(){
      this.modal = true
    },
    closeModal(){
      this.modal = false
    },
    //LIMPIEZA EN EL LOGOUT
    clear() {
      this.allProductsShow = true,
      this.productoIdShow=  false,
      this.search = '';
      this.id = '';
    }
  },
  computed: {
    //FILTRADO DE PRODUCTOS
    filteredProducts(){
      if(!this.search) {
        return this.productos
      }
      // SI SEARCH TIENE ALGO...
      return this.productos.filter( product =>
        (product.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(this.search.toLowerCase()) ||
        product.estado.toLowerCase().includes(this.search.toLowerCase())
      ))
    }
  },
  mounted () {
  //FUNCIÓN QUE CAMBIA EL SWITCH DE LOADING PARA DEJAR 3SG DE CARGA
    setTimeout(() => {
      this.loading = true
    }, 3000)
  },
  created() {
  //DESCARGA DE PRODUCTOS AL CARGAR LA PÁGINA
    this.getProducts();
  }
};
</script>

<style>
html {
  background: rgb(56, 152, 207);
}
.Productos {
  background: rgb(56, 152, 207);
}
section {
  background: #1B4353;
  border-radius: 20px;
  margin: 1rem 0;
}
input {
  margin: 0.2rem;
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
h2 {
  border: none;
}
#loading {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}
img {
max-width: 200px
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
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
body {
    background: rgb(56, 152, 207);
}
</style>