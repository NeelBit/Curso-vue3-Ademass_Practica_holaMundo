<script setup>
import { ref } from 'vue';

const pais = ref('');

const countries = ref([
    'Argentina',
    "Alemania",
    'Bélgica',
    'Estados Unidos',
    'Francia',
    'Rusia',
    'China'
])

const edades = ref([
    {   nombre: "fulano",
        edad: 20,
        intereses: {
            jugar: true,
            cocinar: false,
            planchar: true
        }
    },
    {   nombre: "cosme",
        edad: 23,
        intereses: {
            jugar: false,
            cocinar: true,
            planchar: false
        }
    }
])

const agregar = () => {
    countries.value.push(pais.value);
    pais.value = '';
}

</script>

<template>

    <div class="for-ejemplo">
        <div>
            <input type="text" name="pais" id="pais" v-model="pais">
            <button type="submit" @click.prevent="agregar">agregar</button>
        </div>
        <span class="lista-paises" v-for="c, index in countries" :key="index">{{ c }}, </span>

        <p v-for="n, index in edades" :key="index">
            {{ n.nombre }} tiene {{ n.edad }} años. 
            <span v-if="n.intereses.jugar">
                Le gusta jugar
            </span>
        
            
        </p>
    </div>

</template>

<style scoped>

.lista-paises:nth-child(odd) {
    text-decoration: underline;
}

</style>