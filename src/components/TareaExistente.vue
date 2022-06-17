<template>
    <div v-for="(tarea,index) of tareas" :key="tarea.id">
        <div class="input-group contenedor tarea">
            <div class="form-control form-control-lg" v-if="tarea.isCompletado===false">{{tarea.descripcion}}</div>
            <div class="botones">
                <button class="boton" type="button"  v-on:click="marcarCompleto(index)"><img
                        src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315445.png?token=exp=1655446755~hmac=30c3313e8a279085c5c02b0e3217d7c1"
                        :width="38" alt=""></button>
                <button class="boton" type="button"  v-on:click="eliminarTarea(index)"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                        :width="38" alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapMutations(['eliminarTarea','marcarCompleto'])
    }

}
</script>

<style>

.contenedor{
    margin-top: 30px;
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