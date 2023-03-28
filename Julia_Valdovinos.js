// Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un array de pagos, debería tener un array con las cuotas en deuda. Mostrar el resultado por consola.

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