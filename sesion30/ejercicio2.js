/*
Escribir una funcion llamada “existeEnLaLista” que reciba 2 parámetros (un string/numero y un array). El valor de retorno será un booleano que indique si este string existe dentro del array.
*/

function existeEnLaLista(elemento, lista) {
  if (lista.includes(elemento)) {
    return true;
  } else {
    return false;
  }
}

function existeEnLaLista2(elemento, lista) {
  return lista.includes(elemento);
}

console.log(existeEnLaLista("Manzana", [1, 2, 3]));
console.log(existeEnLaLista(5, [1, 2, 3, 4, 5]));
console.log(existeEnLaLista("Rojo", ["Rojo", "Verde", "Azul"]));
console.log(existeEnLaLista(99, ["Lorem ipsum", 100, true, 99]));
