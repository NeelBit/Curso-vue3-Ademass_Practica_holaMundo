<!-- 

    Ejemplo de props - comunicación vertical descendente de componentes (solo usar para lectura!)

    PostContainer pasar información a postCard

-->

<script setup>
import PostCard from './PostCard.vue';

const info = [
    {
        title: "Este es el titulo de uno", content: "contenido de dos"
    }, 
    {
        title: "Este es el titulo de 2", content: "contenido de 2"
    }, 
    {
        title: "título 3", content: "Contenido tres!"
    }
];

// ejemplo para recibir contenido de emits
function showAlert(msg) {
    alert(msg);
}

</script>


<template>

<section class="post-container">
    <PostCard :contenido-adicional="'En oferta!'" v-for="p in 4" :key="p" @mi-evento-alert="showAlert"></PostCard>

    <h2>Cards con miEventoAlert (práctica props y emits)</h2>

    <!-- contenidoAdicional por defecto. mi evento propio para pasar al hijo @miEventoAlert -->
    <PostCard v-for="inf in info" :key="inf.title" :title="inf.title" @miEventoAlert="showAlert"></PostCard>
</section>

</template>

<style scoped>

.post-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

</style>