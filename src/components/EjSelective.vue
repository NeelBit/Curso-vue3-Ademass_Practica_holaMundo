<script setup>

import { ref } from 'vue';


const edad = ref(0);


</script>

<template>

    <div class="selective-edad">
        <label for="edad">edad</label>
        <input type="number" name="edad" id="edad" v-model="edad">
        <p>{{ edad }} 
            <span v-if="edad >= 18">sos mayor de edad</span>
            <span v-else>Eres menor de edad</span>
        </p>

    </div>


</template>

<style scoped>

.selective-edad {
    width: 50rem;
    margin: 2rem auto;

    display: flex;

}

label {
    flex: 1;
    display: grid;
    place-content: center;
}

input[type="number"] {
    flex: 3;
    text-align: center;
}

p {
    flex: 1;
    margin: 0;
    text-align: right;

    
}

</style>