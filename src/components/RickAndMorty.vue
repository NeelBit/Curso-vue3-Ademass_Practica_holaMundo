<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted } from 'vue';
import PostButton from './PostButton.vue';

let miPersonaje = ref({
    nombre: '',
    image: '',
    species: '',
    status: ''
})

async function getPersonaje() {

    const idAl = Math.round(Math.random() * 826);
    
    const result = await fetch(`https://rickandmortyapi.com/api/character/${idAl}`);
    const data = await result.json();

    const {name, image, species, status} = data;

    miPersonaje.value.nombre = name;
    miPersonaje.value.image = image;
    miPersonaje.value.species = species;
    miPersonaje.value.status = status;

}

onBeforeMount(()=> {
    console.log('onBeforeMount');
})


onMounted(() => {
    getPersonaje();
})

onUnmounted(() => {
    console.log('onUnmounted');
})

const personajeAbuscar = ref('rick');

let resultadosBusqueda = ref([]);

const buscaPersonaje = async () => {
    const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${personajeAbuscar.value}`);
    const data = await result.json();

    const resultado = data.results;

    resultadosBusqueda.value = [...resultado];
}

</script>

<template>

<article class="post-card">
    <h3>{{ miPersonaje.nombre }}</h3>
    <img :src=miPersonaje.image :alt=miPersonaje.nombre>
    <div class="post-card__detalles">
        <p>Especie: {{ miPersonaje.species }}</p>
        <p>Vive: {{ miPersonaje.status }}</p>
    </div>

</article>

    <div>
        <form @submit.prevent="buscaPersonaje">
            <label for="buscar">Busca personaje de rick and morty por nombre:</label>
            <input type="text" name="personaje" id="personaje" v-model="personajeAbuscar">
            <button type="submit">Buscar</button>
        </form>
        

        <div class="resultados">
            <div class="resultado-busqueda" v-for="r in resultadosBusqueda" :key="r.id">
                <h2>{{ r.name }}</h2>
                <img :src=r.image :alt=r.name>
            </div>
        </div>

    </div>


</template>

<style scoped>

.post-card {
    width: 25rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 1rem;
    padding: 1rem;

    border: 1px solid rgb(255, 141, 234);
    
}

.post-card>h3 {
    text-align: center;
}

.post-card__detalles {
    display: flex;
    justify-content: space-around;
}

.resultados {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}
.resultado-busqueda {
    width: 150px;
    height: 300;

    display: flex;
    flex-direction: column;

}

.resultado-busqueda h2 {
    height: 50px;
    text-align: center;
}


.resultado-busqueda img {
    max-width: 100%;
    height: 250px;
}

</style>