/*
    Escribir una función llamada removerVocales que reciba como argumento un string y retorne un nuevo string que sea igual al recibido pero sin las vocales.

    removerVocales("Hola!") // Debe retornar "Hl!"
    removerVocales("JavaScript") // Debe retornar "JvScrpt"
    removerVocales("H T M L") // Debe retornar 4 "H T M L"
    removerVocales("C S S") // Debe retornar 3 "C S S"
*/

function removerVocales(stringRecibido) {
  let nuevoString = "";

  const vocales = "aeiouáéíóúíAEIOUÁÉÍÓÚ";

  for (let i = 0; i < stringRecibido.length; i++) {
    let caracterActual = stringRecibido[i];

    if (!vocales.includes(caracterActual)) {
      nuevoString = nuevoString + caracterActual;
      // nuevoString += caracterActual
    }
  }

  return nuevoString;
}

console.log(removerVocales("Árbol"));
