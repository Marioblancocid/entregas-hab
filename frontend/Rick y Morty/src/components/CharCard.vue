<template>
<div>
  <section :class="{ green: char.status === 'Alive', red: char.status === 'Dead', orange: char.status === 'unknown' }" v-for="char in chars" :key="char.id">
    <h1>
      {{ char.id }} - 
      {{ char.name }}
    </h1>
    <p><img :src="char.image">
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
      <strong>Origin:</strong> {{ char.origin.name }}
      </p>
  </section>
</div>
</template>

<script>
export default {
  name: 'CharCard',
  props: {
    chars: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

img {
  border-radius: 50%;
  border: 5px solid rgba(2, 46, 66, 0.404);
  min-width: 50%;
  max-width: 50%;
}

section {
  min-width: 90%;
  max-width: 90%;
  min-height: 310.15px;
  border-radius: 2rem;
  border: 5px solid rgba(2, 46, 66, 0.404);
  background: rgb(15, 17m6, 200);
  color: white;
  margin: 0.5rem;
  display: inline-block;
  font-family: 'Bangers', cursive;
  font-size: 1rem;
  letter-spacing: 3px;
}
h1 {
  margin: 0.3rem;
}
p {
  margin: 0.2rem;
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

@media (min-width: 600px) {
section {
  min-width: 45%;
  max-width: 45%;
}
p {
  margin: 0.4rem;
}
img {
  border: 10px solid rgba(2, 46, 66, 0.404);
}
}

@media (min-width: 1362px) {
section {
  min-width: 30%;
  max-width: 30%;
  min-height: 30%;
}
p {
  margin: 0.4rem;
}
img {
  border: 5px solid rgba(2, 46, 66, 0.404);
}
h1{
  margin: 1rem;
}
}

</style>
