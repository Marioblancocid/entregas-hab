<template>
  <div class="ProductsIdTable">
  <h2>Resultados de la búsqueda por id</h2>
  <p> ID: {{ (productoById) ? productoById.id : null }} </p>
  <p> Nombre: {{  (productoById) ? productoById.nombre : null }} </p>
  <p> Descripcion: {{(productoById) ? productoById.descripcion : null }} </p>
  <p> Estado: {{  (productoById) ? productoById.estado : null }} </p>
  <p><img :src="(productoById) ? productoById.img : null" alt="imagen del producto"> </p>
</div>
  </div>
</template>

<script>


export default {
  name: 'ProductsTable',
  props: {
    productoById: Object
  },
  methods: {

    },
  }
</script>

<style scoped>
h2 {
  border: rgb(60, 160, 218) 3px dashed;
}
.ProductsIdTable {
  color:  White;
  background: #1B4353;
  padding: 2rem 0;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  border: rgb(60, 160, 218) 3px dashed;
}

p {
  background: none;
}
img {
  border-radius: 40px;
}
</style>
