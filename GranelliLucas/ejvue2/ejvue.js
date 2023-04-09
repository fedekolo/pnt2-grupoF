const { createApp } = Vue;

/* Ejercicio 2
Dado una lista de clientes, con id, nombre y edad:
1- Cargar la lista de clientes en el objeto vue y mostrar la lista
2- Pedir los datos de un cliente y con un boton, agregarlo a la lista.
3- Bonus I : agregar un botón por cada elemento de la lista para permitir eliminar
4- Bonus II: agregar un botón por cada elemento para permitir modificar. */

class Client{

    static lastId = 0

    constructor(name, age){
        Client.lastId++;
        this.id = Client.lastId
        this.name = name
        this.age = age
        this.onEdit = false
    }

    edit(){
        this.onEdit = !this.onEdit
    }
}

createApp({
    data() {
        return {
            clients: [new Client('Pedro', 24)]
        }
    },
    methods:{
        addClient(c){
            const name = c.target.name.value
            const age = c.target.age.value

            if(name && age){
                this.clients.push(new Client(name , age))
            }
        },
        removeClient(c){
            const index = this.clients.indexOf(c);
            this.clients.splice(index, 1);
        },
        editClient(c){
            c.edit()
        }
    }
}).mount('#app')