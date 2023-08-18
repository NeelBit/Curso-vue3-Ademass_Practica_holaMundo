<script setup>

</script>

<template>
  <main>
    <h2>home view</h2>

    <!-- EJEMPLO DE DIRECTIVA PERSONALIZADA, declaracion en main.js -->
    <p v-font-size>hola, estoy probando directiva propia para font-size</p>

    <!-- EJEMPLO DE DIRECTIVA PERSONALIZADA, pasando valor al binding -->
    <p v-customize-font-size="'40px'">Hola, estoy probando directiva propia para customize-font-size</p>

    <!-- EJEMPLO DE DIRECTIVA PERSONALIZADA, pasando argumento se usa :-->
    <p v-customize-font-size-with-argument:sm>Probando directiva personalizada, customize-font-size-with-argument , valores: sm md lg xl</p>

    <!-- EJEMPLO DE DIRECTIVA PERSONALIZADA, usando modificadores, se usa . -->
    <p v-customize-font-size-with-modifiers.xl.red>Ejemplo de parrafo con una directiva personalizada, usando modificadores, sm md lg xl</p>

  </main>
</template>
