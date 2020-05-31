<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
*{
  max-width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 10px;
  margin: 1rem;
  font-size: 1.5rem;
}

#nav a {
  background: rgb(15, 176, 200);
  border: 3px solid rgba(6, 44, 102, 0.267);
  font-weight: bold;
  color: rgb(6, 44, 102);
  border-radius: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(0, 238, 255);
}
</style>
