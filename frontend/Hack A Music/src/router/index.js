import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//TODAS LAS RUTAS QUE VA A TENER NUESTRA APLICACION
const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/TopTracks",
      name: "TopTracks",
      component: () => import("../views/TopTracks.vue"),
    },
    {
      path: "/TopArtists",
      name: "TopArtists",
      component: () => import("../views/TopArtists.vue"),
    },
    {
      path: "*",
      name: "Error",
      component: () => import("../views/Error.vue"),
    }
  ];

const router = new VueRouter({
  routes
})

export default router
