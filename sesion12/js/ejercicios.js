/*
Escribir una funcion llamada “verificarNumero” que reciba 1 parámetro (número). El valor de retorno será un string que indique si el número es positivo, negativo o 0.

Ejemplo de uso:
verificarNumero(1) // Retorna "El número es positivo"
verificarNumero(9) // Retorna "El número es positivo"
verificarNumero(-80) // Retorna "El número es negativo"
verificarNumero(0) // Retorna "El número es cero"
*/

function verificarNumero(numero) {
  if (numero > 0) {
    return "El número es positivo";
  } else if (numero < 0) {
    return "El número es negativo";
  } else {
    return "El número es cero";
  }
}

console.log(verificarNumero(1));
console.log(verificarNumero(9));
console.log(verificarNumero(-80));
console.log(verificarNumero(0));

// ========================================

console.log("=========================");

/*
Escribir una funcion llamada “esMayorQue” que reciba 2 parámetros (números). El valor de retorno será un string que indique si el primer número es mayor al segundo o no.

Ejemplo de uso:
esMayorQue(1, 90) // Debe retornar "1 NO es mayor que 90"
esMayorQue(90, 1) // Debe retornar "90 es mayor que 1"
esMayorQue(55, 56) // Debe retornar "55 NO es mayor que 56"
esMayorQue(90, 90) // Debe retornar "Los números son iguales"
*/

function esMayorQue(numeroA, numeroB) {
  if (numeroA > numeroB) {
    return numeroA + " es mayor que " + numeroB;
  } else if (numeroA < numeroB) {
    return numeroA + " NO es mayor que " + numeroB;
  } else {
    return "Los números son iguales";
  }
}

console.log(esMayorQue(1, 90));
console.log(esMayorQue(90, 1));
console.log(esMayorQue(55, 56));
console.log(esMayorQue(90, 90));

console.log("=========================");

/*
Escribir una funcion llamada “existeEnLaLista” que reciba 2 parámetros (un string/numero y un array). El valor de retorno será un booleano que indique si este string/numero existe dentro del array.

Ejemplo de uso:
existeEnLaLista("Manzana", [1, 2, 3]) // Debe retornar false
existeEnLaLista(5, [1, 2, 3, 4, 5]) // Debe retornar true
existeEnLaLista("Rojo", ["Rojo", "Verde", "Azul"]) // true
existeEnLaLista(99, ["Lorem ipsum", 100, true, 99]) // true
*/

function existeEnLaLista(valor, listaDeValores) {
  return listaDeValores.includes(valor);
}

console.log(existeEnLaLista("Manzana", [1, 2, 3]));
console.log(existeEnLaLista(5, [1, 2, 3, 4, 5]));
console.log(existeEnLaLista("Rojo", ["Rojo", "Verde", "Azul"]));
console.log(existeEnLaLista(99, ["Lorem ipsum", 100, true, 99]));

console.log("=========================");

// Vamos a tratar de que las funciones sean PURAS!
function existeEnLaLista2(valor, listaDeValores) {
  if (listaDeValores.includes(valor)) {
    return true;
  } else {
    listaDeValores.push(valor);
    return listaDeValores;
  }
}

console.log(existeEnLaLista2("Manzana", [1, 2, 3]));
console.log(existeEnLaLista2(5, [1, 2, 3, 4, 5]));
console.log(existeEnLaLista2("Rojo", ["Rojo", "Verde", "Azul"]));
console.log(existeEnLaLista2(1000, ["Lorem ipsum", 100, true, 99]));
