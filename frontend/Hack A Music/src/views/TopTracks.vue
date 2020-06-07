<template>
  <div class="toptracks">


<!--APLICAMOS EL CAMBIO DE NOMBRE DINAMICO-->
<vue-headful title="Top tracks"
description="Top tracks of the moment in spain"/>


<!--IMPORTAMOS BARRA DE LINKS--> 
<MenuCustom></MenuCustom>


<!--CARGAMOS EL LOADING DIV QUE DESAPARECERÁ AL CARGAR-->
<div class="lds-facebook" v-show=!loading><div></div><div></div><div></div></div>
<p v-show=!loading id="loading"> Loading, please wait...</p>


<!--CARGAMOS EL COMPONENTE QUE APARECERÁ CUANDO SE VAYA EL LOADING DIV--> 
<TopTracksTable :tracks="tracks" v-show=loading></TopTracksTable>


</div>
</template>

<script>

//IMPORTANDO API DEL ARCHIVO /src/api/index.js
import api from '@/api/index.js'


//IMPORTAMOS COMPONENTES PARA BUILDEAR LA PÁGINA
import TopTracksTable from '@/components/TopTracksTable.vue'
import MenuCustom from '@/components/MenuCustom.vue'


export default {
  name: 'TopTracks',
  components: {
    TopTracksTable, MenuCustom
  },
  data(){
    return {
      
      //ARRAY EN EL QUE SE VA A PRINTEAR LA API
      tracks: [],

      //SWITCH QUE AL CAMBIAR A TRUE CAMBIA EL LOADING DIV POR EL COMPONENTE
      loading: false
    }
  },

  created(){
  //FUNCIÓN QUE LLENA EL ARRAY TRACKS EN CUANTO CARGA LA PAGINA 
    api.getTopTracks().then(response => (this.tracks = response.data.tracks.track))
  },

  mounted () {
  //FUNCIÓN QUE CAMBIA EL SWITCH DE LOADING PARA DEJAR 3SG DE CARGA
    setTimeout(() => {
      this.loading = true
    }, 3000)
  }
}
</script>

<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
#loading {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>