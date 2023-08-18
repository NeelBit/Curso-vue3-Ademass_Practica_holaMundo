<script setup>

import { ref } from "vue";

const check = ref(false);

const checking = () => {
    check.value = !check.value;
    //console.log(check.value);
}


let colorO = ref("#555555");

let colorObj = ref({
    'background-color': colorO.value,
})

const queColor = () => {

    colorObj.value["background-color"] = colorO.value;
}

const randomColor = () => {
    const r = Math.round( Math.random() * 255);
    const g = Math.round( Math.random() * 255);
    const b = Math.round( Math.random() * 255);

    const enHexa = "#" + r.toString(16)+g.toString(16)+b.toString(16);
    //console.log(enHexa);

    // en rgb
    /* colorObj.value["background-color"] = `rgb(${r}, ${g}, ${b})`;
    colorO.value = `rgb(${r}, ${g}, ${b})`; */

    // en hexadecimal 
    colorObj.value["background-color"] = enHexa;
    colorO.value = enHexa;
    //console.log(colorO.value);
}

</script>

<template>

    <div class="bind">

        <label class="switch">
            <input type="checkbox" @change="checking">
            <span class="slider round"></span>
        </label>
    
        <p :class="check ? 'successful' : 'danger'">El mensaje <span v-show="!check"> no</span> se ha enviado!</p>

        <p :class="{'prueba': check}">Probando 2</p>

        <div class="elegir-color">
            <div>
                <label for="color">Elegir color</label>
                <input type="color" name="color" id="color" v-model="colorO" @change="queColor">
            </div>

            <button @click="randomColor" :style="{backgroundColor: colorO}"> <span>Color aleatorio</span> </button>

            <div class="cuadrado" :style="colorObj">
                {{ colorO }}
            </div>
        </div>


    </div>


</template>

<style scoped>

button {
    cursor: pointer;
}

button span {
    background-color: black;
    color: white;
}

.prueba::after {
    content: '😅';
}

.danger {
    color: red;
}

.successful {
    color: green;
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.elegir-color {

}

.cuadrado {
    width: 250px;
    height: 250px;

    display: grid;
    place-content: center;
    font-weight: 900;
    text-shadow: 1px -1px 3px white;
    font-size: 28px;
}

</style>