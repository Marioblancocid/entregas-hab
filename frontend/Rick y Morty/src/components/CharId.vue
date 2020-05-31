<template>
<div>
  <section :class="{ green: char.status === 'Alive', red: char.status === 'Dead', orange: char.status === 'unknown' }">
    <h1>
      {{ char.id }} - 
      {{ char.name }}
    </h1>
    <p>
      <img :src="char.image">
    </p>
    <p>
      <strong>Status:</strong> {{ char.status }}
    </p>
    <p>
      <strong>Gender:</strong> {{ char.gender }}
    </p>
    <p>
      <strong>Specie:</strong> {{ char.species }}
    </p>
    <p>
      <strong>Origin:</strong> {{ (char.origin) ? char.origin.name : null }}
    </p>
  </section>
</div>
</template>

<script>
export default {
  name: 'CharId',
  props: {
    char: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

img {
  border-radius: 50%;
  border: 10px solid rgba(2, 46, 66, 0.404);
  max-width: 50%
}

section {
  min-width: 30%;
  max-width: 30%;
  border-radius: 2rem;
  border: 10px solid rgba(2, 46, 66, 0.404);
  background: rgb(15, 176, 200);
  color: white;
  margin: 1rem;
  display: inline-block;
  background: green;
  font-family: 'Bangers', cursive;
  font-size: 1.3rem;
  letter-spacing: 3px;
}
.green {
  background: green;
}
.red {
  background: red;
}
.orange {
  background: orange;
}
strong {
  color: black;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

</style>

