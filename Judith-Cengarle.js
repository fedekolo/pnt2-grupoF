
/* Ejercicio 1

Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20] Calcular, utilizando un objeto para los resultados, 
cantidad de positivos y negativos, total de positivos y negativos, cantidad y total de números mayores a 8. 
Mostrar el objeto de los resultados en consola del navegador.

*/

const list = [3,6,-4,8,10,-15,30,0,-12,20];

const result = {

positiveQuantity:0, 
negativeQuantity:0, 
totalPositiveQuantity:0, 
totalNegativeQuantity:0, 
higherThan8Quantity:0, 
higherThan8Total:0

};


for (let i = 0 ; i < list.length; i++) {
  if (list[i] > 0) {
    result.positiveQuantity++;
    result.totalPositiveQuantity += list[i];
    if (list[i] > 8) {
      result.higherThan8Quantity++;
      result.higherThan8Total += list[i];
    }
  } else if (list[i] < 0){
    result.negativeQuantity++;
    result.totalNegativeQuantity += list[i];
  } 

  
}

console.log(result);

/*
Dada esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un array de pagos, 
debería tener un array con las cuotas en deuda. 

 [
    {poliza:123, patente:'AA345FD', cantidad_cuotas:12, pagadas:[1,2,3,4]},
    {poliza:124, patente:'AA500RR', cantidad_cuotas:6, pagadas:[1,2,3,4]},
    {poliza:125, patente:'AA200AA', cantidad_cuotas:12, pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {poliza:126, patente:'AA300SH', cantidad_cuotas:8, pagadas:[1,2]}
  ]

Mostrar el resultado por consola.

*/

const pagos = [
  {poliza:123, patente:'AA345FD', cantidad_cuotas:12, pagadas:[1,2,3,4]},
  {poliza:124, patente:'AA500RR', cantidad_cuotas:6, pagadas:[1,2,3,4]},
  {poliza:125, patente:'AA200AA', cantidad_cuotas:12, pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
  {poliza:126, patente:'AA300SH', cantidad_cuotas:8, pagadas:[1,2]}
]

const deudas = [];

for (let i = 0; i < pagos.length ; i++) {
  let objeto = pagos[i];
  let cantidadCuotasAdeudadas= objeto.cantidad_cuotas - objeto.pagadas.length;
  
  const cuotasAdeudadas = [];
  let ultimaCuotaImpaga = objeto.pagadas[objeto.pagadas.length -1] + 1;

  for (let j = 0; j < cantidadCuotasAdeudadas; j++) {
    cuotasAdeudadas.push(ultimaCuotaImpaga);
    ultimaCuotaImpaga++;
  }

  deudas.push(cuotasAdeudadas);


}

console.log(deudas);

/* 
Crear una clase comprobante de factura, con id, fecha, importe,
lista de items (cantidad, descripcion, precio unitario) y una 
función para calcular el total de la factura. Imprimir el resultado 
en la consola del navegador.

*/

class ComprobanteFactura {
  constructor (id, fecha, listaItems) {
    this.id = id;
    this.fecha = fecha;
    this.importe = 0;
    this.listaItems = listaItems;
  }

calcularFactura() {
  this.importe = 0;
  this.listaItems.forEach ( item => {
  
    this.importe += item.precio_unitario * item.cantidad;
  });
}

}

const listaItems = [
  {
  cantidad: 1, descripcion: "item a", precio_unitario: 40
  },
  {
  cantidad: 2, descripcion: "item b", precio_unitario: 80
  },
  {
  cantidad: 3, descripcion: "item c", precio_unitario: 50
  }
]

const factura = new ComprobanteFactura(001, "03-04-2023", listaItems);

factura.calcularFactura()
console.log(factura.importe);