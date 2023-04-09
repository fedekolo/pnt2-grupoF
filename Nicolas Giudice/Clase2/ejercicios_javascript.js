/* variables de los ejercicios */
const ej1_numeros = [3, 6, -4, 8, 10, -15, 30, 0, -12, 20];

const ej1_resultados = {
  cantPositivos: 0,
  cantNegativos: 0,
  totPositivos: 0,
  totNegativos: 0,
  cantMayores8: 0,
  totMayores8: 0,
};

const ej2_pagos = [
  {
    cantidad_cuotas: 12,
    pagadas: [1,2,3,4],
    patente: 'AA345FD',
    poliza: 123,
  },
  {
    cantidad_cuotas: 6,
    pagadas: [1,2,3,4],
    patente: 'AA500RR',
    poliza: 124,
  },
  {
    cantidad_cuotas: 12,
    pagadas: [1,2,3,4,5,6,7,8,9,10,11,12],
    patente: 'AA200AA',
    poliza: 125,
  },
  {
    cantidad_cuotas: 8,
    pagadas: [1,2],
    patente: 'AA300SH',
    poliza: 126,
  }
];

const ej2_deudas = [];

/* Ejercicio 1
    Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
    Calcular, utilizando un objeto para los resultados, cantidad de 
    positivos y negativos, total de positivos y negativos, cantidad 
    y total de números mayores a 8. Mostrar el objeto de los 
    resultados en consola del navegador.
*/

ej1_numeros.forEach((num) => {
  if (num > 0) {
    ej1_resultados.cantPositivos += 1;
    ej1_resultados.totPositivos += num;
  } else if (num < 0) {
    ej1_resultados.cantNegativos += 1;
    ej1_resultados.totNegativos += num;
  }

  if (num > 8) {
    ej1_resultados.cantMayores8 += 1;
    ej1_resultados.totMayores8 += num;
  }
});

console.log("\n\nEjercicio 1");
console.log("-----------");
console.log(ej1_resultados);


/* Ejercicio 2
    Dado esta lista de objetos, crear una nueva lista de objetos, 
    pero en vez de tener un array de pagos, debería tener un array 
    con las cuotas en deuda.
    
    [
      {poliza:123, patente:'AA345FD', cantidad_cuotas:12, pagadas:[1,2,3,4]},
      {poliza:124, patente:'AA500RR', cantidad_cuotas:6, pagadas:[1,2,3,4]},
      {poliza:125, patente:'AA200AA', cantidad_cuotas:12, pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
      {poliza:126, patente:'AA300SH', cantidad_cuotas:8, pagadas:[1,2]}
    ]
    
    Mostrar el resultado por consola
*/

//* recorro el listado de pagos.
for (let i = 0; i < ej2_pagos.length; i++) {
  const adeudadas = [];

  //* ciclo equivalente a la cantidad de cuotas del pago.
  for (let j = 1; j <=  ej2_pagos[i].cantidad_cuotas; j++) {
    if (!ej2_pagos[i].pagadas.includes(j))
    adeudadas.push(j);
  }

  ej2_deudas.push({
    adeudadas: adeudadas,
    cantidad_cuotas: ej2_pagos[i].cantidad_cuotas,
    patente: ej2_pagos[i].patente,
    poliza: ej2_pagos[i].poliza,
  });
}

console.log("\n\nEjercicio 2");
console.log("-----------");
console.log(ej2_deudas);


/* Ejercicio 3
    Crear una clase comprobante de factura, con id, fecha, importe,
    lista de items (cantidad, descripcion, precio unitario) y una 
    función para calcular el total de la factura. Imprimir el resultado 
    en la consola del navegador.
*/

class Item {
  constructor (cant, precioUni, descripcion) {
    this.cant = cant;
    this.descripcion = descripcion;
    this.precioUni = precioUni;
  }
};

class ComprobanteFactura {
  constructor (id, fecha, items) {
    this.id = id;
    this.fecha = fecha;
    this.items = items;
    this.importe = this.#calcularImporte(items);
  }

  #calcularImporte(list) {
    return list.reduce((acc, act) => {
      return acc + act.cant * act.precioUni;
    }, 0);
  }
};

const lista = [
  new Item(1, 150000, "Placa de video"),
  new Item(1, 20000,  "Teclado"),
  new Item(2, 35000,  "Memoria flash"),
];

const comprobante = new ComprobanteFactura(1, "29/03/2023", lista);

console.log("\n\nEjercicio 2");
console.log("-----------");
console.log(comprobante);
