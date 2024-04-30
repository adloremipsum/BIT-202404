/*
Escribe una función llamada quitarDuplicados() que tome como argumento un array de strings como argumento y devuelva un nuevo array sin los elementos duplicados.
*/

function quitarDuplicados(array) {
  const arraySinDuplicados = array.filter(function (elemento, indice) {
    return array.indexOf(elemento) === indice;
  });
  return arraySinDuplicados;
}

console.log(
  quitarDuplicados(["Naranja", "Manzana", "Naranja", "Fresa", "Fresa"])
);

// [Naranja, Manzana, Fresa]
