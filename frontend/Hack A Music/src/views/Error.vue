<template>
<div class="error">

<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="404 NOT FOUND"
description="The error page that nobody wants to see"/>


<!--IMPORTAMOS BARRA DE LINKS--> 
<MenuCustom></MenuCustom>


<!--SECTION DE ERROR 404--> 
<section>
  <p>OOPS! THIS PAGE DOES NOT EXIST!!</p>
  <p>ERROR 404 - NOT FOUND🚫</p>
</section>


</div>
</template>
<script>


//IMPORTANDO EL MENU DE LINKS SUPERIOR
import MenuCustom from '@/components/MenuCustom.vue'

export default {
  name: 'Error',
  components: {
    MenuCustom
  }
}
</script>

<style scoped>

.error {
  color: rgb(173, 165, 165);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  padding: 1rem;
  border: 4px solid rgb(173, 165, 165);

}
</style>