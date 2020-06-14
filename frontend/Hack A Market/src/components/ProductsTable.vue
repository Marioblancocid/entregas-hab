<template>
  <div class="ProductsTable">

  <div>
    <h2>Lista de productos</h2>
    <div class="productos" v-for="(producto, index) in productos" :key="producto.id">
      <p>ID: {{producto.id}}</p>
      <p>Nombre: {{producto.nombre}}</p>
      <p>Descripcion: {{producto.descripcion}}</p>
      <p>Estado: {{producto.estado}}</p>
      <p><img :src="producto.img" alt="imagen del producto"> </p>
      <!-- <button @click="deleteProducts(index)">BORRAR</button>
      <button @click="openModal"> 
        Editar
      </button> --->
    </div>

</div>
  </div>
</template>

<script>


export default {
  name: 'ProductsTable',
  props: {
    productos: Array
  },
  methods: {

    },
  }
</script>

<style scoped>
h2 {
  border: rgb(60, 160, 218) 3px dashed;
}
.ProductsTable {
  color:  White;
  background: #1B4353;
  padding: 2rem 0;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
}
.productos {
    border: rgb(60, 160, 218) 3px dashed;
    margin: 1rem;
}
p {
  background: none;
}
img {
  border-radius: 40px;
}
</style>
