/*
Escribe una función llamada capitalizarPalabras() que reciba un array de strings y devuelva otro string con la primera letra de cada palabra en mayúscula.
*/

function capitalizarPalabras(array) {
  return array.map((indice) => {
    return indice[0].toUpperCase() + indice.slice(1);
  });
}

console.log(capitalizarPalabras(["hola", "chau", "azul", "rojo"]));
