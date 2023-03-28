/* Ejercicio 1
Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos,
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el
objeto de los resultados en consola del navegador. */

const numeros = [3, 6, -4, 8, 10, -15, 30, 0, -12, 20];

const resultados = {
  cantidadPositivos: 0,
  cantidadNegativos: 0,
  totalPositivos: 0,
  totalNegativos: 0,
  cantidadMayores8: 0,
  totalMayores8: 0,
};

numeros.forEach((num) => {
  if (num > 0) {
    resultados.cantidadPositivos++;
    resultados.totalPositivos += num;
    if (num > 8) {
      resultados.cantidadMayores8++;
      resultados.totalMayores8 += num;
    }
  } else if (num < 0) {
    resultados.cantidadNegativos++;
    resultados.totalNegativos += num;
  }
});

console.log(resultados);



/*
Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un 
array de pagos, debería tener un array con las cuotas en deuda.
[{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas[1,2,3,4]},
 {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas[1,2,3,4]},
 {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas[1,2,3,4,5,6,7,8,9,10,11,12]},
 {poliza:126,patente:'AA300SH',cuotas:8,pagadas[1,2]} ] 
Mostrar el resultado por consola
*/

const polizas = [
  {poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]},
  {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]},
  {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
  {poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]}
];

const polizasConCuotasEnDeuda = [];

for (const poliza of polizas) {

  const cuotasEnDeuda = poliza.cantidad_cuotas - poliza.pagadas.length;
  const polizaConCuotasEnDeuda = {

    poliza: poliza.poliza,
    patente: poliza.patente,
    cantidad_cuotas: poliza.cantidad_cuotas,
    cuotas_en_deuda: cuotasEnDeuda
  };
  polizasConCuotasEnDeuda.push(polizaConCuotasEnDeuda);
}

console.log(polizasConCuotasEnDeuda);

/*
Crear una clase comprobante de factura, con id, fecha, importe, lista de items 
(cantidad, descripcion, precio unitario) y una función para calcular el total de la 
factura. Imprimir el resultado en la consola del navegador.
*/

class ComprobanteDeFactura {
  constructor(id, fecha, importe, items) {
    this.id = id;
    this.fecha = fecha;
    this.importe = calcularTotal();
    this.items = items;
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].cantidad * this.items[i].precioUnitario;
    }
    return total;
  }
}

const items = [
  { cantidad: 2, descripcion: 'Producto A', precioUnitario: 10 },
  { cantidad: 1, descripcion: 'Producto B', precioUnitario: 5 },
];

const factura = new ComprobanteDeFactura(1, new Date(), 0, items)

console.log(factura);