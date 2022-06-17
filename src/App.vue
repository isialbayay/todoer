<template>
  <nav-bar></nav-bar>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <NuevaTarea></NuevaTarea>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import NuevaTarea from './components/NuevaTarea.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NuevaTarea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
