<template>
    <div class="contenedor">
        <input class="form-control form-control-lg" v-model='texto' type="text" placeholder="¿Qué quieres hacer hoy?..."
            aria-label=".form-control-lg example">
        <button type="button" class="btn btn-warning añadir" @click="agregarTarea(texto)">+</button>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
    data(){
        return {texto:''}
    },
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapMutations(['agregarTarea'])
    }

}
</script>

<style>

.añadir {
    margin-left: 15px;
    width: 50px;
    height: 45px;
    border-radius: 30px !important;
}
.contenedor{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    max-width: 400px;
}
</style>