import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

/* 
    DIRECTIVAS PERSONALIZADAS

    valores, argumentos y modificadores. 
*/
// nombre, objeto con las acciones ({cicloDelComponente: accion })
app.directive('font-size', {
    // siempre va a recibir esos dos argumentos. el -> es la etiqueta/nodo donde se esta aplicando. bindig --> datos/valores/argumentos que recibe la directiva
    beforeMount: (el, binding) => {
        /* el.style.fontSize = binding; */
        el.style.fontSize = "32px";
    }
})

app.directive('customize-font-size', {
    // binding pasa valores
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value;
    }
})

app.directive('customize-font-size-with-argument', {
    // binding va a recibir argumento. osea customize-font-size-with-argument:argumento=""
    beforeMount: (el, binding) => {
        let size = 18;

        switch (binding.arg) {
            case 'sm':
                size = 12;
                break;

            case 'md':
                size = 18;
                break;

            case 'lg':
                size = 24;
                break;

            case 'xl':
                size = 30;
                break;

            default:
                break;
        }

        el.style.fontSize = `${size}px`;
    }
})

app.directive('customize-font-size-with-modifiers', {
    // con modificadores
    beforeMount: (el, binding) => {
        let size = 18;

        if (binding.modifiers.sm) {
            size = 12;
        } else if (binding.modifiers.md) {
            size = 18;
        } else if (binding.modifiers.lg) {
            size = 24;
        } else if (binding.modifiers.xl) {
            size = 30;
        }

        el.style.fontSize = `${size}px`;

        if (binding.modifiers.red) {
            el.style.color = 'red';
        } else if (binding.modifiers.green) {
            el.style.color = 'green';
        } else if (binding.modifiers.blue) {
            el.style.color = 'blue';
        }

    }
})

app.mount('#app')