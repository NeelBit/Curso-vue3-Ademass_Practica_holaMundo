<script setup>
import { ref, reactive } from 'vue';

const fecha = ref(null);

const pass = ref('');

/* const probando = () => {
    // convertir string a Date
    const miFecha = new Date(fecha.value);

    console.log(typeof miFecha);

    console.log(miFecha);
} */

const check = ref(null);
const checkPass = () => { pass.value.length >= 8 ? check.value = true : check.value = false }

const provincia = ref('');

const term = ref(false);

const mascota = reactive(
    {   
        perro: false, 
        gato: false
    }
    
)

/* 
 */
const miFormRespuestas = ref();

const probando = () => {
    console.log(`
        fecha= ${fecha.value}
        pass= ${pass.value}
        provincia= ${provincia.value}
        mascota.perro?= ${mascota.perro}
        mascota.gato?= ${mascota.gato}
    `);

    miFormRespuestas.value = {
        fecha: fecha.value,
        pass: pass.value,
        provincia: provincia.value,
        mascota: {
            perro: mascota.perro,
            gato: mascota.gato,
        }
    };
}

const colorBtn = ref('');

</script>

<template>

<form class="formulario" @submit.prevent="probando">
    <div class="fecha">
        <label for="tuFecha">Elige fecha</label>
        <input type="date" name="tuFecha" id="tuFecha" v-model="fecha">
    </div>

    <div class="pass">
        <label for="pass">Contraseña</label>
        <input type="password" name="pass" id="pass" v-model="pass" @keydown="checkPass">
        <div v-show="check != null" :class="check ? 'revisar-pass' : 'revisar-pass-false'"></div>
    </div>

    <!-- radio button en este caso devuelve el string correspondiente -->
    <div class="provincia">
        <div>
            <label for="provincia-chaco">Chaco</label>
            <input type="radio" id="provincia-chaco" name="provincia-chaco" v-model="provincia" value="chaco">
        </div>

        <div>
            <label for="provincia-corrientes">Corrientes</label>
            <input type="radio" id="provincia-corrientes" name="provincia-corrientes" v-model="provincia" value="corrientes">
        </div>

        <div>
            <label for="provincia-formosa">Formosa</label>
            <input type="radio" id="provincia-formosa" name="provincia-formosa" v-model="provincia" value="formosa">
        </div>

        <div>
            <label for="provincia-misiones">Misiones</label>
            <input type="radio" id="provincia-misiones" name="provincia-misiones" v-model="provincia" value="misiones">
        </div>
    </div>

    <!-- checkbox return bool -->
    <div class="mascota">
        <label for="perro">Perro</label>
        <input type="checkbox" id="perro" name="mascota" value="perro" v-model="mascota.perro">

        <label for="gato">Gato</label>
        <input type="checkbox" id="gato" name="mascota" value="gato" v-model="mascota.gato">

    </div>

    <div class="terminos">
        <input type="checkbox" name="term" id="term" v-model="term"> Acepta los términos y condiciones
    </div>

    <select name="color" id="color" v-model="colorBtn">
        <option value="" disabled selected>Selecciona color de botón enviar</option>
        <option value="red">rojo</option>
        <option value="green">verde</option>
        <option value="black">negro</option>
    </select>

    <button type="submit" :style="{'backgroundColor': colorBtn}">enviar</button>
</form>

<div class="mostrar-fecha">
    <p>{{ fecha }}</p>
</div>


<div v-if="miFormRespuestas" class="resultado-form">
    <h2>{{ miFormRespuestas.fecha }}</h2>
    <h3>{{ miFormRespuestas.pass }}</h3>
    <h3>{{ miFormRespuestas.provincia }}</h3>
    <h4>Tiene mascotas?</h4>
    <p v-if="miFormRespuestas.mascota.perro">Si tiene perro/s</p>
    <p v-if="miFormRespuestas.mascota.gato">Si tiene gato/s</p>
</div>

</template>

<style scoped>

.revisar-pass {
    width: 100%;
    height: 5px;
    background-color: aqua;
}

.revisar-pass-false {
    width: 100%;
    height: 5px;
    background-color: brown;
}

.provincia {
    display: flex;
    justify-content: space-between;
}

.resultado-form {
    width: 400px;
    border: 1px black groove;
}

</style>