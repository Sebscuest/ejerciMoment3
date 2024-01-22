'use strict'

let persona = {
    nombre: "Sebastian",
    edad: 30,
    casado: true,
    hijos: ["Sofía", "Diego"]
  };
  
  // Convirtiendo el objeto a una cadena JSON usando JSON.stringify()
  let personaJSON = JSON.stringify(persona);
  
  alert(personaJSON);
  