function verificarNumero(numero) {
  if (numero > 0) {
    return "El número es positivo.";
  } else if (numero < 0) {
    return "El número es negativo.";
  } else {
    return "El numero es cero.";
  }
}

console.log(verificarNumero(1)); // Retorna "El número es positivo"
console.log(verificarNumero(9)); // Retorna "El número es positivo"
console.log(verificarNumero(-80)); // Retorna "El número es negativo"
console.log(verificarNumero(0)); // Retorna "El número es cero"
