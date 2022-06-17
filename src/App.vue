<template>
  <nav-bar></nav-bar>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <NuevaTarea class="nuevatarea"></NuevaTarea>
    <TareaExistente></TareaExistente>

    <button class="btn btn-primary tareasCompletadas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
      aria-expanded="false" aria-controls="collapseWidthExample">
      TAREAS COMPLETADAS
    </button>
    <div style="min-height: 120px;">
      <div class="collapse collapse-horizontal" id="collapseWidthExample">      
          <TareasCompletadas></TareasCompletadas>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import NuevaTarea from './components/NuevaTarea.vue'
import TareaExistente from './components/TareaExistente.vue'
import TareasCompletadas from './components/TareasCompletadas.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NuevaTarea,
    TareaExistente,
    TareasCompletadas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.tareasCompletadas{
  margin-top: 30px;
  margin-bottom: 30px;
}

.nuevatarea{
  margin-top:30px;
  margin-bottom:30px;
}
</style>
