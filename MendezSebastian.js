//------------------------------------------------------------------------------------------------

/*Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos, 
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el 
objeto de los resultados en consola del navegador.*/

//Lista y constantes
const lista = [3,6,-4,8,10,-15,30,0,-12,20]
const MINIMO = 0;
const LIMITE = 8;

//Objeto
const resultado = {
    cantPositivos: 0,
    cantNegativos: 0,
    totalPositivos: 0,
    totalNegativos: 0,
    cantMayor8: 0,
    totalMayor8: 0
}

//Recorrido de lista array
lista.forEach(element => {
    if(element < MINIMO){
        resultado.cantNegativos++;
        resultado.totalNegativos+=element;
    }else if(element > MINIMO){
        resultado.cantPositivos++;
        resultado.totalPositivos+=element;
        
        if(element > LIMITE){
            resultado.cantMayor8++;
            resultado.totalMayor8+=element;
        }
    }
});

console.log("Los resultados son: ");
console.log(resultado);

//------------------------------------------------------------------------------------------------

/*Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un 
array de pagos, debería tener un array con las cuotas en deuda.
[{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas[1,2,3,4]},
 {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas[1,2,3,4]},
 {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas[1,2,3,4,5,6,7,8,9,10,11,12]},
 {poliza:126,patente:'AA300SH',cuotas:8,pagadas[1,2]} ] 
Mostrar el resultado por consola.*/

const objetos = [
    {poliza: 123, 
        patente: 'AA345FD', 
        cuotas: 12, 
        pagadas: [1, 2, 3, 4],
        cuotas_deudas: []},
    {poliza: 124, 
        patente: 'AA500RR', 
        cuotas: 6, 
        pagadas: [1, 2, 3, 4],
        cuotas_deudas: []},
    {poliza: 125, 
        patente: 'AA200AA', 
        cuotas: 12, 
        pagadas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        cuotas_deudas: []},
    {poliza: 126, 
        patente: 'AA300SH', 
        cuotas: 8, 
        pagadas: [1, 2],
        cuotas_deudas: []},
    {poliza: 127, 
        patente: 'AA300SH', 
        cuotas: 8, 
        pagadas: [1, 5],
        cuotas_deudas: []}
]

objetos.forEach((element,i) => {
    let cuota_deuda = element.pagadas.length;
    let cantidad = (element.cuotas - element.pagadas.length);

    for(let j = 0; j < cantidad; j++){
        cuota_deuda++;
        if(!element.pagadas.includes(cuota_deuda)){
            element.cuotas_deudas[j] = cuota_deuda;
        }else{
            j=j-1;
            cantidad=cantidad-1;
        }
    }
})

console.log(objetos);

//------------------------------------------------------------------------------------------------

/*Crear una clase comprobante de factura, con id, fecha, importe, lista de items 
(cantidad, descripcion, precio unitario) y una función para calcular el total de la 
factura. Imprimir el resultado en la consola del navegador.*/

class Factura {

    constructor (id,fecha,item){
        this.id = id;
        this.fecha = fecha;
        this.item = item;
    }

    calcularTotal = () => {
        let importe;
        this.item.forEach(element => {
            importe += element.cantidad * element.precio;
        });
        return importe};
}

class Item{
    
    constructor (cantidad,descripcion,precio){
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}


factura1 = new Factura(1, "20230327", [{cantidad: 2, descripcion: "Arroz", precio: 100},
                                      {cantidad: 1, descripcion: "Agua", precio: 50}]);

console.log("El total es: " + factura1.calcularTotal());
//TERMINAR