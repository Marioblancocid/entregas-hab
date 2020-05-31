<template>

  <div class="home">

    <!--LOGO RICK Y MORTY-->
  <figure>
      <img src="../assets/logo.svg" 
      alt="Logo de Rick y Morty"
      title="Logo de Rick y Morty">
  </figure>

    
    <!--BARRA DE BÚSQUEDA POR NAME, GENDER, STATUS E ID-->
  <section id="searchBar">
  <label for="bySearch">
  <button @click="clear()">
    Clear
  </button>
    Busca tu personaje 
  <input v-model="search" type="search" name="bySearch" placeholder="Búsqueda...">
  </label>

  <label for="byId">
  Busqueda por ID:  
  <input v-model="id" type="search" name="byId" placeholder="Búsqueda por ID... ">
  <button @click="searchChar(id)">
    Buscar por ID
  </button>
  </label>
  </section>


    <!--Codigo optimizado (All Chars y Char por ID)-->
    <CharCard v-show="charShow" :chars="filteredChars"></CharCard>
    <CharId v-show="charIdShow" :char="char"></CharId>
  
  </div>

</template>

<script>
// IMPORTS
import CharCard from '@/components/CharCard.vue'
import CharId from '@/components/CharId.vue'

// importando la config de la api
import api from '@/api/api.js'


export default {
  name: 'Home',
  components: {
    CharCard, CharId
  },
  data() {
    return {
      chars: [],
      char: {},
      id: null,
      search: '',
      charShow: true,
      charIdShow: false
    }
  },
  methods: {
    searchChar(id) {
      if (!id) {
        return
      }
      this.charIdShow = true;
      this.charShow = false;
      api.getChar(id).then(response => (this.char = response.data));
    },
    clear() {
      this.charIdShow = false;
      this.charShow = true;
      this.search = '';
      this.id = '';
    }
  },
  computed: {
    filteredChars(){
      // SI SEARCH ESTÁ VACÍO
      api.getChar(1).then(response => (this.char = response.data));

      if(!this.search) {
        return this.chars
      }
      // SI SEARCH TIENE ALGO...
      return this.chars.filter( char =>
        (char.name.toLowerCase().includes(this.search.toLowerCase()) ||
        char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
        char.status.toLowerCase().includes(this.search.toLowerCase())
      ))
    }
  },
  created() {
    api.getChar(1).then(response => (this.char = response.data));
    api.getAll().then(response => (this.chars = response.data.results));
    document.title = "Home | Rick&MortyApi";
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: greenyellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
img {
  max-width: 300px;
}
section {
  margin: 1rem;
}
label {
  display: block;
  padding: 0.3rem;
  margin: 0.5rem;
  background: rgb(15, 176, 200);
  border: 3px solid rgba(6, 44, 102, 0.267);
  border-radius: 10px;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Bangers', cursive;
  letter-spacing: 1px;
}
button {
  font-size: 1.5rem;
  padding: 0.3rem;
  border-radius: 20px;
  background: rgba(6, 44, 102, 0.267);
  color: rgb(0, 238, 255);
}
input {
  font-size: 1rem;
  max-width: 90%;
  margin: 0.4rem;
}
</style>