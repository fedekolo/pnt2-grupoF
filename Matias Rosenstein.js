/*
Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos, 
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el 
objeto de los resultados en consola del navegador.
*/

const numeros = [3, 6, -4, 8, 10, -15, 30, 0, -12, 20];
const resultados = {
    positivos : 0,
    totalPos : 0,
    mayoresA8 : 0,
    totalMayor8 : 0,
    negativos : 0,
    totalNeg : 0
};

numeros.forEach(num => {
    if (num > 0){
        resultados.positivos++;
        resultados.totalPos += num;
        if (num > 8){
            resultados.mayoresA8++;
            resultados.totalMayor8 += num;
        }
    } else if(num < 0){
        resultados.negativos++;
        resultados.totalNeg += num;
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

const pagos = [
    {poliza:123, patente:'AA345FD', cantidad_cuotas:12, pagadas:[1,2,3,4]},
    {poliza:124, patente:'AA500RR', cantidad_cuotas:6, pagadas:[1,2,3,4]},
    {poliza:125, patente:'AA200AA', cantidad_cuotas:12, pagadas:[1,2,3,4,5,6,7,8,10,11,12]},
    {poliza:126, patente:'AA300SH', cantidad_cuotas:8, pagadas:[1,2]}
];

const deudas = {...pagos}

pagos.forEach((objeto, indice)=> {
    objeto.deuda = [];
    for (let i = 1; i <= objeto.cantidad_cuotas; i++){
        if (!objeto.pagadas.includes(i)){
            deudas[indice].deuda.push(i);
        }
    }

    delete objeto.pagadas;
});

console.log(deudas);


/*
Crear una clase comprobante de factura, con id, fecha, importe, lista de items 
(cantidad, descripcion, precio unitario) y una función para calcular el total de la 
factura. Imprimir el resultado en la consola del navegador.

*/

class ComprobanteDeFactura{
    #id
    #fecha
    #importe
    #listaDeItems

    constructor(id, fecha, listaDeItems){
        this.#fecha = fecha;
        this.#id = id;
        this.#listaDeItems = listaDeItems;
        this.#importe = 0;
    }

    calcularTotalFactura = () => {
        this.#listaDeItems.forEach(item => {
            this.#importe += item.cantidad * item.precio;
        })

        return this.#importe;
    }
}

const items = [
    {cantidad:5, desc:"Coca Cola", precio:250},
    {cantidad:2, desc:"Pepsi", precio:200},
    {cantidad:10, desc:"Alfajor", precio:150}
];

const comprobante = new ComprobanteDeFactura(1, "27 de Marzo", items);

console.log(comprobante.calcularTotalFactura());