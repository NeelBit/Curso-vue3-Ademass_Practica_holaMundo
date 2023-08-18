<script setup>

//import { ref } from 'vue';
//const count = ref(0);

import { useCounterStore } from '../stores/counter';

const store = useCounterStore();


</script>

<template>

<div class="counter">
    <h3 class="counter__count" :class="store.count < 0 ? 'count-negativo' : 'count-positivo' ">{{ store.count }}</h3>

    <div class="counter__botones">
        <button @click="store.increment">+</button>
        <button @click="store.decrement">-</button>
    </div>

</div>

</template>

<style scoped>

.counter{
    width: 5rem;
    border: 1px solid black;

    margin: 2rem auto;
}

.counter__count {
    width: 100%;
    text-align: center;
}

.counter__botones {
    display: flex;
    justify-content: space-between;

}

.counter__botones button {
    display: block;
    width: 20px;

    margin: 0;
    padding: 0;

    border: none;
    cursor: pointer;
    outline: none;
    background-color: white;
    border-radius: 1rem;
    transition: background-color .5s ease-out;
}

.counter__botones button:hover {
    color: white;
    background-color: blueviolet;
} 

.count-positivo {
    color: green;
}
.count-negativo {
    color: brown;
}

</style>