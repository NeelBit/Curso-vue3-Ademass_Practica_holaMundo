<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Counter from './components/Counter.vue';
import EjSelective from './components/EjSelective.vue';
import EjFor from './components/EjFor.vue';
import Bind from './components/Bind.vue';
import ModelForm from './components/ModelForm.vue';
import ComputedExample from './components/ComputedExample.vue';
import ComputedEjercicio from './components/ComputedEjercicio.vue';



</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/rick-and-morty">Rick and Morty</RouterLink>
        <RouterLink class="link" to="/post-container">Post container</RouterLink>
      </nav>
    </div>
  </header>

  <div>
    hola desde app vue
  </div>

  <h2>counter</h2>
  <Counter></Counter>

  <h2>ejSelective</h2>
  <EjSelective></EjSelective>

  <h2>ejFor</h2>
  <EjFor></EjFor>

  <h2>Bind</h2>
  <Bind></Bind>

  <h2>ModelForm</h2>
  <ModelForm></ModelForm>

  <h2>Computadas</h2>
  <ComputedExample></ComputedExample>

  <h2>Computed ejercicio:</h2>
  <ComputedEjercicio></ComputedEjercicio>

  <RouterView />
</template>

<style scoped>

.wrapper {
    background-color: greenyellow;
}

nav {
    display: flex;
    justify-content: space-around;
}

.link {
    margin: 10px;
    padding: 15px;
    text-transform: uppercase;
    border: solid 1px black;
    border-radius: 10px;


    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: clip-path 1s ease-in-out; */

    background: linear-gradient(86deg, #40d8b1, #f333f8);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;

    transition: background .5s ease-in;
}

.link:hover {
    background: linear-gradient(86deg, #00dca3, #f700fd);

    -webkit-animation: AnimationName 20s ease infinite;
    -moz-animation: AnimationName 20s ease infinite;
    animation: AnimationName 20s ease infinite;
}

/* .link:hover {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
} */

@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

</style>
