import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//IMPORTAMOS FUNCIONES PARA AUTENTIFICACION DE USUARIOS
import { isLoggedIn } from '../api/utils'
import { checkAdmin } from '../api/utils'

//IMPORTAMOS SWEETALERT PARA LOS ERRORES POP-UP
import Swal from "sweetalert2";

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      // RUTA PRIVADA
      allowAnonymous: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (!to.meta.allowAnonymous && !isLoggedIn()) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que logearte!",
        });
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      // RUTA PRIVADA
      allowAnonymous: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (!to.meta.allowAnonymous && !isLoggedIn()) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que logearte!",
        });
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/add-client",
    name: "AddClient",
    component: () => import("../views/AddClient.vue"),
    meta: {
      // RUTA PRIVADA SOLO PARA ADMINS
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que ser Admin para acceder aquí!",
        });
        next({
          path: "/home",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      // RUTA SOLO PARA ANONIMOS
      allowLogged: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (isLoggedIn() === true) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Pero si ya estas logeado!",
        });
        next({
          path: "/home",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      // RUTA SOLO PARA ANONIMOS
      allowLogged: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (isLoggedIn() === true) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Pero si ya estás registrado!",
        });
        next({
          path: "/home",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: () => import("../views/Clientes.vue"),
    meta: {
      // RUTA PRIVADA
      allowAnonymous: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (!to.meta.allowAnonymous && !isLoggedIn()) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que logearte!",
        });
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/Productos",
    name: "Productos",
    component: () => import("../views/Productos.vue"),
    meta: {
      // RUTA PRIVADA
      allowAnonymous: false,
    },
    beforeEnter: (to, from, next) => {
      // Si la ruta es privada y la persona no tiene token
      if (!to.meta.allowAnonymous && !isLoggedIn()) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Tienes que logearte!",
        });
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    },
  },
  //RUTA ERROR 404 NOT FOUND
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  routes
})


export default router
