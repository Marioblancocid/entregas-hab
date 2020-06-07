import Vue from 'vue'
import App from './App.vue'
import router from './router'


//IMPORTAMOS EL COMPONENTE PARA LOS TITULOS DINAMICOS
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
