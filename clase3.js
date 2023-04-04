let arrayNumerico = [2, 34, 78, 90, 12, 4, 65, 75, 2134, 21, 4, 1];

console.log("Con foreach");
let funcionParaFoeach = function (elemento) {
  console.log("Vuelta");
}

arrayNumerico.forEach(funcionParaFoeach);

console.log("FIND");

for (let i = 0; i < arrayNumerico.length; i++) {
  //console.log(arrayNumerico[i]); 
}

console.log(arrayNumerico.find(
  function (n) { return n == "34"}
  )); 



let funcionGenerica = function (a, b, tipoOperacion) {
  return tipoOperacion(a, b)
}

let suma = (a, b) => a + b
let resta = (a, b) => a - b;

console.log(funcionGenerica(2, 2, resta));

let filtrado = arrayNumerico.filter((numero) => numero == 4); 

let coheficienteAumento = 1.17
let nuevo = arrayNumerico.filter(numero => numero > 50).map(numero => numero * coheficienteAumento)

console.log(arrayNumerico);
console.log(nuevo);
console.log(filtrado);


let resultado = arrayNumerico.filter(n => n > 50).map(n => n * coheficienteAumento).sort((a, b) => a - b)

console.log(resultado);

let rosana = {
  nombre: "Rosana", 
  apellido: "Gonzalez",
  edad: 0,
  hijos: ["Noemi", "Matías"]
}

let maria = {...rosana} 

maria.hijos.push("Josecito")
console.log(rosana.hijos);

console.log(arrayNumerico.includes(-89)); 

const listadoObjetos = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 34,
    function() {
      return nombre + "Empresa";
    },
  },
  {
    nombre: "Rodrigo",
    apellido: "Perez",
    edad: 20,
    function() {
      return nombre + "Empresa";
    },
  },
  {
    nombre: "Vanesa",
    apellido: "Perez",
    edad: 3,
    function() {
      return nombre + "Empresa";
    },
  },
  {
    nombre: "Guillermina",
    apellido: "Perez",
    edad: 84,
    function() {
      return nombre + "Empresa";
    },
  },
];

let mayoresVeinte = listadoObjetos.filter(objeto => objeto.edad > 20).map(objeto => objeto.nombre)

console.log(mayoresVeinte);



