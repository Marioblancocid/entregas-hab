<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  
}
</script>
<style>
body {
  background: #6DAEDB;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: rgb(136, 136, 240);
}
</style>
