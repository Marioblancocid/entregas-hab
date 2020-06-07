<template>
<div>

  <!--IMPORTAMOS BARRA DE LINKS--> 
  <MenuCustom></MenuCustom>
  
  <div class="about">

  <!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
    <vue-headful title="About"
    description="About the page creator"/>
    
    
  <!--INFORMACION DEL CREADOR DEL PROYECTO Y MODULOS UTILIZADOS-->
    <ul>
      <li>
        <section>
          <img id='perfil' src="../assets/images/0.jpeg" alt="Imagen de Mario Blanco">
          <p>Este proyecto ha sido creado por <a href="https://www.linkedin.com/in/mario-blanco-cid-62098519b/">Mario Blanco Cid</a></p>
          <p>Se ha realizado con los siguientes módulos y componentes:</p>
          <p><a href="https://www.last.fm/api/" alt="Link to the Lastfm's API">La API de Lastfm</a></p>
          <p><a href="https://source.unsplash.com/" alt="Link to the Unsplash API">La API de Unsplash</a></p>
          <p>La librería <a href="https://github.com/axios/axios" alt="Link to AXIOS library">Axios</a></p>
          <p>El módulo <a href="https://github.com/sweetalert2/sweetalert2" alt="Link to SweetAlert2 library">SweetAlert2</a></p>
          <p>El módulo <a href="https://github.com/troxler/vue-headful" alt="Link to Vue-Headful library">Vue-Headful</a></p>
        <button @click='Swal'>I want a meme</button>
        </section>
      </li>
    </ul>


  </div>
</div>
</template>

<script>
//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import MenuCustom from '@/components/MenuCustom.vue'

//IMPORTAMOS SWEETALERT2 PARA AÑADIR EL MEME-BOTON
import Swal from 'sweetalert2'


export default {
  name: 'About',
  components: {
    MenuCustom
  },
  methods: {

  //MÉTODO QUE LANZA EL BOTON POP UP
    Swal() {
      Swal.fire({
        title: 'Woaw!',
        text: 'Here is your meme! Thank you for clicking!',
        imageUrl: 'https://norows.com/wp-content/uploads/2018/09/EBNHYznhLN2Pn8pg9RgXAG7bRt3uKeV-ZsfxJ65DiqM.png',
        imageAlt: 'Memaso',
      })
    }
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}
p {
  background-color: rgba(0, 0, 0, 0.7);
}
ul {
  list-style-type: none;
  border: 7px black solid;
  background-image: url(https://images.unsplash.com/photo-1554446422-c4d46271ab85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
  background-size: 100%;
  min-width: 50%;
  padding: 2rem;
  position: relative;
}
a {    
  color: white;
  font-weight: bold;
}
#perfil{
  border: 5px black solid;
  border-radius: 50%;
}
button {
  min-width: 45px;
  min-height: 45px;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  background-color: rgb(185, 169, 169);
  border: 2px solid black;
  border-radius: 10px;
}
</style>