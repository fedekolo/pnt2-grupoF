const { createApp } = Vue;

createApp({
    data() {
        return {
            num: 0,
            lista: [4, 6, 3, 2, -3, 2]
        }
    },
    methods: {
        agregar() {
            this.lista.push(this.num);
        }
    }
}).mount('#app');