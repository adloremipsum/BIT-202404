// Función PURA!

function existeEnLaLista2(valor, listaDeValores) {
  let copia = [...listaDeValores];
  if (copia.includes(valor)) {
    return true;
  } else {
    copia.push(valor);
    return copia;
  }
}

// console.log(existeEnLaLista2("Manzana", [1, 2, 3]));
// console.log(existeEnLaLista2(5, [1, 2, 3, 4, 5]));
// console.log(existeEnLaLista2("Rojo", ["Rojo", "Verde", "Azul"]));
// console.log(existeEnLaLista2(1000, ["Lorem ipsum", 100, true, 99]));

// ============================================

// Spread operator (operador de propagación)

let peliculas = ["Mi Vecino Totoro", "Kill Bill", "Matrix"];
let masPeliculas = [
  "El Día de la Marmota",
  "El Viaje De Chihiro",
  "El Pianista",
];

let todasLasPeliculas = [...peliculas, ...masPeliculas];
console.log(todasLasPeliculas);
