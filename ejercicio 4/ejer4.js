'use strict'

let poblacionPorCiudad = new Map([
    ['guayaquil', 3000000],
    ['quito', 2000000],
    ['cuenca', 1000000]
  ]);
  
  let totalPoblacion = 0;
  for (let poblacion of poblacionPorCiudad.values()) {
    totalPoblacion += poblacion;
  }
  
  alert('La población total de las ciudades es: ' + totalPoblacion);
  
