//Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20] calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos, total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el objeto de los resultados en consola del navegador.

const numeros = [3,6,-4,8,10,-15,30,0,-12,20] 
const resultado = {
	cantPositivos: 0,
	totalPositivos: 0,
	cantMayoresA8: 0,
	totalMayoresA8: 0,
	cantNegativos: 0,
	totalNegativos: 0
}

numeros.forEach(n => {
	if(n > 0){
		resultado.cantPositivos++
		resultado.totalPositivos += n
		if(n > 8){
			resultado.cantMayoresA8 ++
			resultado.totalMayoresA8 += n
		}
	}
	else{
		resultado.cantNegativos++
		resultado.totalNegativos += n
	}
})

console.log(resultado)

//Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un array de pagos, debería tener un array con las cuotas en deuda. Mostrar el resultado por consola.

const listaObjetos = [
    {poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]}, 
    {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]}, 
    {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]}, 
    {poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]},    
]

const nuevaLista = []
listaObjetos.forEach(objeto => {
    nuevaLista.push(calcularDeuda(objeto))
})

function calcularDeuda(objeto){
    const deuda = objeto.cantidad_cuotas - objeto.pagadas.length
    delete objeto.pagadas
    return {...objeto, deuda}
}

console.log(nuevaLista);

// Crear una clase comprobante de factura, con id, fecha, importe, lista de items (cantidad, descripcion, precio unitario) y una función para calcular el total de la factura. Imprimir el resultado en la consola del navegador.

const items1 = [
    {cantidad: 5, descripcion:"iPhone 13",precio:1300.90},
    {cantidad: 2, descripcion:"Samsung Galaxy S21",precio:347.66},
    {cantidad: 2, descripcion:"Google Pixel 6",precio:21.44},
    {cantidad: 3, descripcion:"OnePlus 9",precio:797.43},
    {cantidad: 2, descripcion:"Xiaomi Mi 12",precio:2452.53}
]

const items2 = [
    {cantidad: 1, descripcion:"Microsoft Office",precio:167800.90},
    {cantidad: 7, descripcion:"Adobe Creative Cloud",precio:3447.66},
    {cantidad: 2, descripcion:"Autodesk AutoCAD",precio:521.44},
    {cantidad: 8, descripcion:"Salesforce",precio:647.43}
]

class ComprobanteFactura {
    #id
    #fecha
    #importe
    #items

    constructor(id, fecha, items){
        this.#id = id
        this.#fecha = fecha
        this.#items = items
        this.#importe = 0
    }

    get getId() { return this.#id }
    
    get getFecha() { return this.#fecha }    

    get getItems() { return this.#items }

    get getImporte() { return this.calcularTotal() }

    calcularTotal = () => {
        this.#items.forEach(item => {
            this.#importe += item.cantidad * item.precio
        })
        return this.#importe
    }
}

const comprobante1 = new ComprobanteFactura(1, "27-03-2023", items1)
const comprobante2 = new ComprobanteFactura(2, "28-03-2023", items2)

imprimirFactura(comprobante1)
imprimirFactura(comprobante2)

function imprimirFactura(comprobante){
    console.log("Factura N°: " + comprobante.getId + ", Fecha: " + comprobante.getFecha);
    comprobante.getItems.forEach(i => { console.log("\t" + i.descripcion + ", Precio: $" + i.precio + ", Cantidad: " + i.cantidad) });
    console.log("Total: $" + comprobante.getImporte)
}