const { createApp } = Vue
createApp({
    data() {
        return {
            numero: null,
            lista: [4,6,3,2,-3,2]
        }
    },
    methods:{
        agregarNumero(){
            this.lista.push(this.numero);           
        }
    }

}).mount('#app')