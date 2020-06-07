<template>
  <div class="menucustom">
  <div id="nav">
    

    <!--LINKS SUPERIORES DE CADA PÁGINA-->
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link> |
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link> 
    
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCustom'
}
</script>

<style scoped>

#nav {
  padding: 30px;
  padding-bottom: 20px;
  font-size: 0.82rem;
}

#nav a {
  font-weight: bold;
  color: #656a6e;
}

#nav a.router-link-exact-active {
  color: white;
}
@media (min-width: 600px) {
#nav {
  font-size: 1.5rem;
}
}

</style>
