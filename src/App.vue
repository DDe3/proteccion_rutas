<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
//import {defineAsyncComponent} from 'vue'

export default {
  name: "App",
  components: {
    //NavBar: defineAsyncComponent(() =>
    //  import(/* webpackChunkName: "navBar"*/ "./components/NavBar.vue")),
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
