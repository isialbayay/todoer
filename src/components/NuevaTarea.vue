<template>
    <div class="contenedor">
        <input class="form-control form-control-lg" type="text" placeholder="¿Qué quieres hacer hoy?..."
            aria-label=".form-control-lg example">
        <button type="button" class="btn btn-warning añadir">+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.añadir {
    margin-left: 15px;
    border-radius: 20px;
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