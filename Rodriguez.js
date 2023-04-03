const lista = [3,6,-4,8,10,-15,30,0,-12,20]

console.log(lista);

const resultados = {
    cantPositivos: 0,
    cantNegativos: 0,
    totalPositivos: 0,
    totalNegativos: 0,
    cantMayoresA8: 0,
    totalMayoresA8: 0,
}
lista.forEach(numero => {
    if (numero > 0) {
        resultados.cantPositivos++;
        resultados.totalPositivos += numero;
    } else if (numero < 0){
        resultados.cantNegativos++;
        resultados.totalNegativos += numero;
    }

    if (numero > 8) {
        resultados.cantMayoresA8++;
        resultados.totalMayoresA8 += numero;
    }
    })

console.log(resultados);

const polizas = [
    {poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]},
    {poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]},
    {poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
    {poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]}
  ];
  
  console.log(polizas);
  
  const deudas = {...polizas}
  
  polizas.forEach{(objeto, indice) => {
    objeto.deuda = [];
    for (let i = 1; i<= objeto.cantidad_cuotas; i++){
        if(!objeto.pagadas.includes(i)){
            deudas[indice].deuda.push(i);
        }
    }
  }






}
  
  
  const polizasConCuotasDeuda = [];
  for (let i = 0; i < polizas.length; i++) {
    const poliza = polizas[i];
    const cuotasPagadas = new Set(poliza.pagadas);
    const cuotasDeuda = [];
    for (let j = 1; j <= poliza.cantidad_cuotas; j++) {
      if (!cuotasPagadas.has(j)) {
        cuotasDeuda.push(j);
      }
    }
    polizasConCuotasDeuda.push({
      poliza: poliza.poliza,
      patente: poliza.patente,
      cantidad_cuotas: poliza.cantidad_cuotas,
      cuotasDeuda: cuotasDeuda
    });
  }
  
  console.log(polizasConCuotasDeuda);