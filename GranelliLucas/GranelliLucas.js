/*
Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos, 
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el 
objeto de los resultados en consola del navegador.
*/

const lista = [3, 6, -4, 8, 10, -15, 30, 0, -12, 20]

const resultados = { positivos: 0, totalPositivos: 0, negativos: 0, totalNegativos: 0, mayoresAOcho: 0, totalMayoresOcho: 0 };

lista.forEach(v => {
    if (v > 0) {
        resultados.positivos += v;
        resultados.totalPositivos++;
    } else {
        resultados.negativos += v;
        resultados.totalNegativos++;
    }
    if (v > 8) {
        resultados.mayoresAOcho += v;
        resultados.totalMayoresOcho++;
    }
})

console.log("Respuesta Ej 1:", resultados);

/*
Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un 
array de pagos, debería tener un array con las cuotas en deuda.
[{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]},
 {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]},
 {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
 {poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]} ] 
Mostrar el resultado por consola
*/

const listaObjetos = [{ poliza: 123, patente: 'AA345FD', cantidad_cuotas: 12, pagadas: [1, 2, 3, 4] },
{ poliza: 124, patente: 'AA500RR', cantidad_cuotas: 6, pagadas: [1, 2, 3, 4] },
{ poliza: 125, patente: 'AA200AA', cantidad_cuotas: 12, pagadas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
{ poliza: 126, patente: 'AA300SH', cantidad_cuotas: 8, pagadas: [1, 2] }];

const nuevaListaObjetos = [];


listaObjetos.map(r => {
    nuevaListaObjetos.push({ poliza: r.poliza, patente: r.patente, cantidad_cuotas: r.cantidad_cuotas, adeudadas: getAdeudadas(r.cantidad_cuotas, r.pagadas) });
})

function getAdeudadas(cantCuotas, cuotasPagadas) {
    const adeudadas = [];
    for (let i = 1; i <= cantCuotas; i++) {
        if (!cuotasPagadas.includes(i)) {
            adeudadas.push(i);
        }
    }
    return adeudadas;
}

console.log("Respuesta Ej 2:", nuevaListaObjetos);



/*
Crear una clase comprobante de factura, con id, fecha, importe, lista de items 
(cantidad, descripcion, precio unitario) y una función para calcular el total de la 
factura. Imprimir el resultado en la consola del navegador.
*/

class ComprobanteDeFactura {
    constructor(id, fecha) {
        this.id = id;
        this.fecha = fecha;
        this.importe = 0;
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item);
    }

    calcularTotal() {
        this.importe = 0;
        this.items.map(i => {
            this.importe += i.cantidad * i.precioUnitario;
        })
    }
}

class Item {
    constructor(cantidad, precioUnitario, descripcion) {
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.descripcion = descripcion;
    }
}

comprobante = new ComprobanteDeFactura(1, '12/03/2023')

comprobante.agregarItem(new Item(1, 60, "Manzana"));
comprobante.agregarItem(new Item(3, 90, "Pera"));
comprobante.agregarItem(new Item(2, 100, "Papa"));
comprobante.agregarItem(new Item(1, 130, "Naranja"));

comprobante.calcularTotal();

console.log("Respuesta Ej 3:", comprobante.importe);

