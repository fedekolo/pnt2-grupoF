const { createApp } = Vue;

/* Ejercicio 1
Dada esta lista de numeros: [4,6,3,2,-3,2]
1- Cargar esta lista en un array del objeto vue.
2- Mostrar la lista con un li
3- Pedir un numero y agregarlo a la lista. */

createApp({
    data() {
        return {
            list: [4,6,3,2,-3,2]
        }
    },
    methods:{
        addNumber(e){
            this.list.push(e.target.num.value)
        },
        removeNumber(){
            this.list.pop()
        }
    }
}).mount('#app')