<template>
  <div class="toptagstable">


    <!--PLANTILLA DE TAGS QUE SE ALIMENTA DE UN ARRAY DE OBJETOS-->
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <a :href="tag.url"><section>
        <p>Tag: {{ tag.name }}</p>
        <p>Veces utilizado: {{ tag.reach }}</p>
        <p>Veces taggeado: {{ tag.taggings }}</p>
        </section>


    <!--IMAGEN DE FONDO DE CADA TAG QUE SE BUILDEA CON UNA URL BASE Y USA DE KEYWORD EL NOMBRE DEL TAG-->
        <img :src='urlImagen + tag.name' ></a>
      
      
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopTagsTable',

  //ARRAY DE OBJETOS CON TODA LA INFORMACION DE LOS TAGS
  props: {
    tags: Array
  },
  data(){
    return {
  
    //LINK QUE GENERA LA IMAGEN DE FONDO DE CADA TAG AL SUMARLO A LA KEYWORD DE SU NOMBRE
      urlImagen : 'https://source.unsplash.com/random/400x200/?music,genre,'
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0
}
li {
  margin: 0.4rem;
  position: relative;
  color: white;
  font-weight: bold;
}
a{
    color: white;
  font-weight: bold;
  text-decoration: none;
}
p {
  background-color: rgba(0, 0, 0, 0.288);
}
section {
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  max-width: 300px;
  max-height: 200px;
  border: 5px black solid;
}
</style>
