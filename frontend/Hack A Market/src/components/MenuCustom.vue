<template>
  <div class="MenuCustom">
 <div id="nav">
      <router-link id='link' :to="{ name: 'Productos'}">Productos</router-link> |
      <router-link id='link' :to="{ name: 'Home'}">Home</router-link> |
      <router-link id='link' :to="{ name: 'About'}">About</router-link> |
      <router-link id='link' :to="{ name: 'Clientes'}">Clientes</router-link>
      <span v-show="adminroutes"> | <router-link id='link' :to="{ name: 'AddClient'}">Añadir Clientes</router-link></span>
      <button id='link' class="myButton" @click="logoutUser()">Logout</button>
    </div>
  </div>
</template>

<script>
import { clearLogin } from '../api/utils'
import { getIsAdmin } from '../api/utils'
export default {
  name: 'MenuCustom',
  methods: {
    logoutUser(){
      clearLogin();
      this.$router.push('/');
      return
    }
  },
  data() {
    return {
      adminroutes: false
    };
  },
  created() {
    if (getIsAdmin() === 'true') {
      this.adminroutes = true;
    }
  }
}
</script>


<style scoped>
#link {
  margin-top:  0.6rem;
}
.MenuCustom {
  color:  white;
  background: #1B4353;
  padding: 2rem 2rem;
  border-radius: 20px;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.58);
}
p {
  margin: 0.2rem;
  background: none;
}
.myButton {
	box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color:#c62d1f;
	border-radius:18px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:4px 14px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;
  margin-left: 1rem;
}
.myButton:hover {
	background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
	background-color:#f24437;
}
.myButton:active {
	position:relative;
	top:1px;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
