



/* Ejercicio  1
Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos,
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el
objeto de los resultados en consola del navegador. */

let numeros = [3,6,-4,8,10,-15,30,0,-12,20]

let resultado = {numPositivos:0,numNegativos:0,totalPositivos:0,totalNegativos:0,cantMayorOcho:0,totalMayorOcho:0}

let calnumPositivos = numeros.filter (p =>  p > 0)
let calnumNegativos = numeros.filter (p =>  p < 0)
let calcantOcho = numeros.filter (p =>  p > 8)


resultado.numPositivos=calnumPositivos
resultado.numNegativos=calnumNegativos
resultado.cantMayorOcho=calcantOcho



  for (let index = 0; index < calnumPositivos.length; index++) {
    resultado.totalPositivos += calnumPositivos[index]
  }

  for (let index = 0; index < calnumNegativos.length; index++) {
    resultado.totalNegativos += calnumNegativos[index]
  }
  for (let index = 0; index < calcantOcho.length; index++) {
    resultado.totalMayorOcho += calcantOcho[index]
  }


console.log(resultado)


/* Ejercicio 2
Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un
array de pagos, debería tener un array con las cuotas en deuda.
[{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas[1,2,3,4]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas[1,2,3,4]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas[1,2,3,4,5,6,7,8,9,10,11,12]},
{poliza:126,patente:'AA300SH',cuotas:8,pagadas[1,2]} ]
Mostrar el resultado por consola */




const pagos = [
{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
{poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]}
 ]

const listaNueva = [
{poliza:123,patente:'AA345FD',cantidad_cuotas:12,cuotasDeuda:[]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,cuotasDeuda:[]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,cuotasDeuda:[]},
{poliza:126,patente:'AA300SH',cantidad_cuotas:8,cuotasDeuda:[]}
]


for(let i=0;i< pagos.length;i++){

  for (let index = 1; index <=  pagos[i].cantidad_cuotas; index++) {

    if(!pagos[i].pagadas.includes(index)){
        listaNueva[i].cuotasDeuda.push(index)
    }
    
}
}


console.log(listaNueva)



/* Ejercicio 3
Crear una clase comprobante de factura, con id, fecha, importe, lista de items
(cantidad, descripcion, precio unitario) y una función para calcular el total de la
factura. Imprimir el resultado en la consola del navegador. */

class ComprobanteFactura {
  
constructor(id,fecha,items){
  this.id=id
  this.fecha=fecha
  this.items = items
  this.importe = this.calcularImporte(this.items)
}

calcularImporte(list){
  let resultado=0
 for (let index = 0; index < list.length; index++) {
  resultado += list[index].cantidad * list[index].precioUnitario
 }
  return resultado
}

}

class item{
  constructor(cantidad,descripcion,precioUnitario){
    this.cantidad = cantidad
    this.descripcion = descripcion
    this.precioUnitario = precioUnitario
  }
}

let item1 = new item(2,"gaseosa",10)
let item2 = new item(3,"alfajor",5)
let item3 = new item(10,"caramelos",2)

let lista = [item1,item2,item3]


let comprobante1 = new ComprobanteFactura(1,"28/03/2023",lista)


console.log(comprobante1)