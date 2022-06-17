<template>
    <div v-for="(tarea, index) of tareas" :key="tarea.id">
        <div class="input-group contenedor tarea">
            <div class="form-control form-control-lg" v-if="tarea.isCompletado===true">{{tarea.descripcion}}</div>
            <div class="botones">
                <button class="boton" type="button" v-on:click="marcarIncompleto(index)"><img
                        src="https://cdn-icons-png.flaticon.com/512/7510/7510556.png"
                        :width="42" alt=""></button>
                <button class="boton" type="button" v-on:click="eliminarTarea(index)"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png " :width="38"  alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapMutations(['eliminarTarea','marcarIncompleto'])
    }
}
</script>

<style>
.contenedor{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    width: 400px !important;
}

.botones{
    display: none;
}

.tarea:hover .botones{
        display: block;
}

.boton{
    outline:none !important;
    border: none;
    background: none;
}

</style>