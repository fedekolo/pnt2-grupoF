const { createApp } = Vue;

/* 
  Ejercicio 1:
  Dada esta lista de numeros: [4,6,3,2,-3,2]
    1 - Cargar esta lista en un array del objeto vue.
    2 - Mostrar la lista con un li
    3 - Pedir un numero y agregarlo a la lista

  Ejercicio 2:
  Dado una lista de clientes, con id, nombre y edad:
    1- Cargar la lista de clientes en el objeto vue y mostrar la lista
    2- Pedir los datos de un cliente y con un boton, agregarlo a la lista.
    3- Bonus I : agregar un botón por cada elemento de la lista para permitir eliminar
    4- Bonus II: agregar un botón por cada elemento para permitir modificar
*/

createApp({
  data() {
    return {
      clients: [
        {
          id: 1,
          last_name: "Miguez",
          nomber: "Jerónimo",
        },
        {
          id: 2,
          last_name: "Granelli",
          nomber: "Lucas",
        },
        {
          id: 3,
          last_name: "Castañom",
          nomber: "Manuel",
        },
      ],
      list: [4, 6, 3, 2, -3, 2],
      number: null,
    }
  },
  methods: {
    addClient(e) {
      this.clients.push({
        id: this.clients.length + 1,
        last_name: e.target.last_name.value,
        name: e.target.name.value,
      });
    },
    addNumber() {
      this.list.push(this.number);
    }

  }
}).mount('#app')
