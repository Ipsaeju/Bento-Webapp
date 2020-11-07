<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HomePage></HomePage>
    <Navigation></Navigation>
  </div>
</template>

<script>
import HomePage from './components/home.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
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
