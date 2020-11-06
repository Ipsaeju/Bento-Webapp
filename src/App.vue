<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Navigation></Navigation>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'Navigation': Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Noto Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
