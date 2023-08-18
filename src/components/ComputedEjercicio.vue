<script setup>
import { ref, computed } from 'vue';


const IVA = 21;
const miHerramienta = ref({nombre: '', precio: null});
const misHerramientas = ref([]);

/* Lista de herramientas */
const listaHerramientas = computed(() => {
    let listaTemp = [];
    misHerramientas.value.forEach((elemento) => {
        listaTemp.push(elemento.nombre);
    })
    return listaTemp;
})

/* Herramienta seleccionada en la lista de herramientas */
const seleccionoHerramienta = (e) => {
    //console.log(e.target.value);
    miHerramienta.value.nombre = e.target.value;
    
}

/* Lista con todos los precios */
const listaPrecios = computed(() => {
    let listaTemp = [];
    for (let i = 0; i < misHerramientas.value.length; i++) {
        listaTemp.push(misHerramientas.value[i].precio);
    }
    return listaTemp;
})

/* Total suma de todos los precios */
const subtotal = computed(() => {
    if (listaPrecios.value.length) {
        return listaPrecios.value.reduce((acumulador, valor, index) => {
            acumulador += valor;
            return acumulador;
        })
    }else return 0;
})

/* Total final con el subtotal + el IVA */
const totalIva = computed(() => {
    /* return subtotal.value>0 ? subtotal.value + (subtotal.value*0.21) : 0; */

    // devuelve el calculo o sino 0
    return subtotal.value>0 ? subtotal.value + ((subtotal.value*IVA)/100) : 0;
})

/* Botón de agregar herramienta */
const agregarHerramienta = () => {
    const h = {
        id: crypto.randomUUID(),
        nombre: miHerramienta.value.nombre,
        precio: miHerramienta.value.precio
    }

    misHerramientas.value.push(h);

    miHerramienta.value = {nombre: '', precio: null};
}

</script>


<template>

    <section class="computed-ejercicio">

        <div class="agregar-herramienta">
            <label for="herramienta">Herramienta: </label>
            <input type="text" name="herramienta" id="herramienta" placeholder="nombre" v-model="miHerramienta.nombre">
            $<input type="number" name="" id="" step="0.10" placeholder="precio" v-model="miHerramienta.precio">
            <button @click="agregarHerramienta">Agregar</button>
        </div>

        <div>
            <label for="elige">Elige alguna</label>
            <select name="elige" id="elige" @change.prevent="seleccionoHerramienta">
                <option value="">Se irá completando la lista a medida que agregas</option>
                <option v-for="h, index in listaHerramientas" :key="index" :value="h">{{ h }}</option>
            </select>
        </div>

        <!-- <div class="lista-herramientas">
            <ul>
                <li v-for="her in misHerramientas" :key="her.id">
                    <div> {{ her.id }} </div>
                    <div> {{ her.nombre }} </div>
                    <div> {{ her.precio }} </div>
                </li>
            </ul>

            <div class="totales">
                <div class="sub-total">
                    sub-total : {{ subtotal }}
                </div>
                <div class="total">
                    total + iva (21%) : {{ totalIva }}
                </div>
            </div>
        </div> -->

        <h2>Lista de herramientas</h2>

        <table class="dataTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="h in misHerramientas" :key="h.id">
                    <td><a href="#">{{ h.id }}</a></td>
                    <td>{{ h.nombre }}</td>
                    <td>${{ h.precio }}</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th></th>
                    <th>SubTotal</th>
                    <th>$ {{ subtotal }}</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Total (iva inc. {{ IVA }}%)</th>
                    <th>$ {{ totalIva }}</th>
                </tr>
                </tfoot>
        </table>
        
    </section>

</template>


<style scoped>

.computed-ejercicio {

}

.lista-herramientas {

}

.lista-herramientas ul {
    list-style: none;
    border: 1px black solid;
}

.lista-herramientas ul li {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px black solid;
}

.lista-herramientas ul li div {
    /* border: 1px black solid; */

}

.totales {
    border: 1px black solid;
}

.sub-total {

}

.total {

}

/* =============================================================================
   Responsive Table CSS
   ========================================================================== 
*/
.dataTable {
  display: block;
  width: 100%;
  margin: 1em 0;
}

.dataTable thead, .dataTable tbody, .dataTable thead tr, .dataTable th {
  display: block;
}

.dataTable thead {
  float: left;
}

.dataTable tbody {
  width: auto;
  position: relative;
  overflow-x: auto;
}

.dataTable td, .dataTable th {
  padding: .625em;
  line-height: 1.5em;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  height: 100px;
}

.dataTable th {
  text-align: left;
  background: rgba(0, 0, 0, 0.14);
  border-bottom: 1px dashed #aaa;
}

.dataTable tbody tr {
  display: table-cell;
}

.dataTable tbody td {
  display: block;
}

.dataTable tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.07);
}

@media screen and (min-width: 50em) {

    .dataTable {
        display: table;
    }
    
    .dataTable thead {
        display: table-header-group;
        float: none;
    }
    
    .dataTable tbody {
        display: table-row-group;
    }
    
    .dataTable thead tr, .dataTable tbody tr {
        display: table-row;
    }
    
    .dataTable th, .dataTable tbody td {
        display: table-cell;
    }
    
    .dataTable td, .dataTable th {
        width: auto;
    }
    

}



</style>