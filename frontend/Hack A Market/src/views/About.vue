<template>
<div class="about">

<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="About"
description="Información sobre el Autor."/>

<!--CARGAMOS EL MENU DE LINKS DE LA PAGINA-->
<MenuCustom></MenuCustom>


<!--INFORMACION DEL CREADOR DEL PROYECTO Y MODULOS UTILIZADOS-->
<ul>
  <li>
    <section>
          <img id='perfil' src="../assets/images/0.jpeg" alt="Imagen de Mario Blanco">
          <p>Este proyecto ha sido creado por <a href="https://www.linkedin.com/in/mario-blanco-cid-62098519b/">Mario Blanco Cid</a></p>
          <p>Se ha realizado con los siguientes módulos y componentes:</p>
          <p><a href="https://source.unsplash.com/" alt="Link to the Unsplash API">La API de Unsplash</a></p>
          <p>La librería <a href="https://github.com/axios/axios" alt="Link to AXIOS library">Axios</a></p>
          <p>El módulo <a href="https://github.com/sweetalert2/sweetalert2" alt="Link to SweetAlert2 library">SweetAlert2</a></p>
          <p>El módulo <a href="https://github.com/troxler/vue-headful" alt="Link to Vue-Headful library">Vue-Headful</a></p>
        </section>
      </li>
    </ul>
  </div>
</template>



<script>

//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import MenuCustom from '@/components/MenuCustom.vue'
export default {
  components: {
    MenuCustom
  }

}
</script>

<style>
section {
  padding-bottom: 1rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: underline;
}
img {
  border-radius: 30px;
  border: 3px solid black;
  margin: 0.5rem 0;
}
</style>