<script setup>

import { ref, computed } from 'vue';

const miPalabra = ref('');

const miPalabraInvertida = ref('');
const banderita = ref(false);

const invertirPalabra = computed(() => {
    /* miPalabraInvertida.value = miPalabra.value.split("").reverse().join("");
    banderita.value = true; */

    /* console.log(miPalabraInvertida.value); */

    return miPalabra.value.split("").reverse().join("");
});


/* const resultado = () => {
    console.log(miPalabra.value.split("").reverse().join(""));
    console.log("miPalabraInvertida : " + miPalabraInvertida.value);
} */


</script>


<template>

<div>
    <label for="miPalabra">Escribir palabra para invertir</label>
    <input type="text" name="" id="" v-model="miPalabra">
    <!-- <button @click.prevent="invertirPalabra">Invertir palabra</button>

    <h3 v-if="banderita">{{ miPalabraInvertida }}</h3> -->

    <h3>{{ invertirPalabra }}</h3>

</div>


</template>


<style scoped>

input[type="text"], button {
    padding: 5px;
}


</style>