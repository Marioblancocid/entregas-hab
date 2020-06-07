<template>
  <div class="toptrackstable">


    <!--PLANTILLA DE TRACKS QUE SE ALIMENTA DE UN ARRAY DE OBJETOS-->
    <ul>
      <li v-for="track in tracks" :key="track.id">
        <a :href="track.artist.url"><section>
        <p>Canción: {{ track.name }}</p>
        <p>Artista: {{ track.artist.name }}</p>
        <p>Oyentes: {{ track.listeners }}</p>
        </section>


    <!--IMAGEN DE FONDO DE CADA TRACK QUE SE BUILDEA CON UNA URL BASE Y USA DE KEYWORD EL NOMBRE DEL ARTISTA-->
        <img :src='urlImagen + track.artist.name'></a>
        

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopTracksTable',

  //ARRAY DE OBJETOS CON TODA LA INFORMACION DE LAS TRACKS
  props: {
    tracks: Array
  },
  data(){
    return {

    //LINK QUE GENERA LA IMAGEN DE FONDO DE CADA TRACK AL SUMARLO A LA KEYWORD DEL NOMBRE DEL ARTISTA
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
  padding: 0;
}
li {
  margin: 0.334rem;
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
