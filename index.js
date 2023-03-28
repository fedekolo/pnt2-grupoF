// let variable = 12;

// console.log(variable);

// let variable2 = "casa";

// let variable3 = "auto";

// const ESTO_ES_UNA_CONSTANTE = 1;

// const arreglo = [1, 2, 3, 4];

// arreglo[0] = { nombre: "Pedro" , apellido: "Rodriguez"};
// console.log(arreglo);

// console.log(arreglo);
// let objeto = {};

// {
//   let variable3 = 1;
//   console.log(variable3);
// }

// console.log(variable3);

// let texto =
//   "Maria,Gonzalez,33,Lavalleja,1213,Maria,Gonzalez,33,Lavalleja,1213\n";
// let columnas = texto.trim().split(',');
// console.log(columnas);

// let numeros = 1

// let decision = true
// decision = false

// console.log(decision);

// let arreglo2 = []

// const arregloInmodificable = [1, 2, 3, 4, 5]

// for (let index = 0; index < arregloInmodificable.length; index++) {
//   console.log(arregloInmodificable[index]);
// }

// arregloInmodificable.forEach((registro, vaca) => console.log(registro + "- Indice: " + vaca ))

// const temperaturas = Array(100).fill("Temp")

// console.log(temperaturas);

// const dias = []

// dias.push("Lunes");
// dias.push("Martes");
// dias.push("Miercoles");
// console.log(dias);

// dias.unshift("Domingo")
// dias.shift()
// console.log(dias.indexOf("Miercoles"));
// console.log(dias);

// dias.splice(dias.indexOf("Martes"), 1)

// console.log(dias);

// const lista = [2, 45, 154, 1, 0, 22]

// console.log(lista.sort((a, b) => a - b));

// const nuevaLista = lista.slice()

// console.log(nuevaLista);

// const otraNuevaLista = [...lista, ...dias]

// console.log(otraNuevaLista);

// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   hijos: ["Rodrigo", "Micaela", "Susana"]
// }

// const nuevaPersona = {...persona}

// console.log(persona.nombre);
// nuevaPersona.nombre = "Rosana"
// console.log(nuevaPersona.nombre);

// nuevaPersona.hijos.push("Hermenegildo")
// console.log(persona.hijos);

// const numeros = [3, 6, -4, 8, 10, -15, 30, 0, -12, 20];

// const objetoResultados = {
//   cantidadPositivos: 0,
//   totalPositivos: 0,
//   cantidadNegativos: 0,
//   totalNegativos: 0,
//   cantidadMayores8: 0,
//   totalMayores8: 0,
// };

// const objetoResultadosConFor = {
//   cantidadPositivos: 0,
//   totalPositivos: 0,
//   cantidadNegativos: 0,
//   totalNegativos: 0,
//   cantidadMayores8: 0,
//   totalMayores8: 0,
// };

// numeros.forEach((numero) => {
//   if (numero > 0) {
//     objetoResultados.cantidadPositivos++;
//     objetoResultados.totalPositivos += numero;
//     if (numero > 8) {
//       objetoResultados.cantidadMayores8++;
//       objetoResultados.totalMayores8 += numero;
//     }
//   } else if (numero < 0) {
//     objetoResultados.cantidadNegativos++;
//     objetoResultados.totalNegativos += numero;
//   }
// });

// console.log(objetoResultados);

// for (let i = 0; i < numeros.length; i++) {
//   const numero = numeros[i];

//   if (numero > 0) {
//     objetoResultadosConFor.cantidadPositivos++;
//     objetoResultadosConFor.totalPositivos += numero;
//     if (numero > 8) {
//       objetoResultadosConFor.cantidadMayores8++;
//       objetoResultadosConFor.totalMayores8 += numero;
//     }
//   } else if (numero < 0) {
//     objetoResultadosConFor.cantidadNegativos++;
//     objetoResultadosConFor.totalNegativos += numero;
//   }
// }
// console.log(objetoResultadosConFor);

// let polizas = [
//   {
//     poliza: 123,
//     patente: "AA345FD",
//     cantidad_cuotas: 12,
//     pagadas: [1, 2, 3, 4],
//   },
//   {
//     poliza: 124,
//     patente: "AA500RR",
//     cantidad_cuotas: 6,
//     pagadas: [1, 2, 3, 4],
//   },
//   {
//     poliza: 125,
//     patente: "AA200AA",
//     cantidad_cuotas: 12,
//     pagadas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//   },
//   { poliza: 126, patente: "AA300SH", cantidad_cuotas: 8, pagadas: [1, 2] },
// ];

// let polizasEnDeuda = [];

// for (let i = 0; i < polizas.length; i++) {
//   let cuotasPagadas = polizas[i].pagadas;
//   let cuotasEnDeuda = [];

//   for (let j = 1; j <= polizas[i].cantidad_cuotas; j++) {
//     if (!cuotasPagadas.includes(j)) {
//       cuotasEnDeuda.push(j);
//     }
//   }

//   polizasEnDeuda.push({
//     poliza: polizas[i].poliza,
//     patente: polizas[i].patente,
//     cuotas_en_deuda: cuotasEnDeuda,
//   });
// }

// console.log(polizasEnDeuda);


class ComprobanteFactura {
  constructor(id, fecha, importe, listaDeItems) {
    this.id = id;
    this.fecha = fecha;
    this.importe = importe;
    this.listaDeItems = listaDeItems;
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.listaDeItems.length; i++) {
      total +=
        this.listaDeItems[i].cantidad * this.listaDeItems[i].precioUnitario;
    }
    return total;
  }
}

// Ejemplo de uso
let listaDeItems = [
  { cantidad: 2, descripcion: "Producto A", precioUnitario: 10 },
  { cantidad: 1, descripcion: "Producto B", precioUnitario: 20 },
  { cantidad: 3, descripcion: "Producto C", precioUnitario: 5 },
];
let factura = new ComprobanteFactura(1, new Date(), 0, listaDeItems);
factura.importe = factura.calcularTotal();

console.log(factura);