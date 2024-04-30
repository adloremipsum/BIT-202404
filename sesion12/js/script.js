// var sumando1 = (90 * 20) / 5;
// var sumando2 = 860 - 50 / 10;
// var resultado = sumando1 + sumando2 + 43;

// alert("El resultado es" + " " + resultado);

// =====================================

// function concatenar(palabra1, palabra2) {
//   return palabra1 + palabra2;
// }

// console.log(concatenar("Java", "Script"));
// console.log(concatenar("Hola", "Chau"));

// =====================================

// function contieneLetra(palabra, letra) {
//   return palabra.includes(letra);
// }

// console.log(contieneLetra("Hola", "o"));
// console.log(contieneLetra("JavaScript", "x"));
// console.log(contieneLetra("García Marquez", "z"));

// =====================================

// Operadores de comparación

console.log(99 === 1); // Estrictamente igual
console.log(99 === "99"); // Estrictamente igual

console.log(99 !== 1);

console.log(1 > 99);
console.log(1 < 99);

console.log(9 >= 9);
console.log(1 <= 1);

// =====================================

if ("Hola a todos" === "Hola a todos") {
  // Vamos a hacer esto...
  // alert("Efectivamente 9 es igual a 9");
}

if (10 === 10) {
  console.log("Efectivamente, 10 es igual a 10");
} else {
  console.log("La comparación ha dado false :(");
}

if (10 === 1000) {
  console.log("😎😎😎😎😎");
} else if (100 === 1000) {
  console.log("✨✨✨✨✨");
} else if (1000 === 1000) {
  console.log("🎃🎃🎃🎃🎃");
} else {
  console.log("😴😴😴😴😴");
}

// var nombre = prompt("Decime tu nombre");

// if (nombre === "Herni") {
//   console.log("Hola profe!");
// } else {
//   console.log("Hola equipo!");
// }

// var mayorDeEdad = confirm("¿Sos mayor de edad?");

// if (mayorDeEdad === false) {
//   console.log("Sos menor de edad. No tenés acceso :(");
// } else {
//   console.log("Sos mayor de edad. Tenés acceso a nuestra plataforma");
// }

// var edad = prompt("Ingresa tu edad");

// if (edad >= 18) {
//   console.log("Sos mayor de edad. Tenés acceso a nuestra plataforma");
// } else {
//   console.log("Sos menor de edad. No tenés acceso :(");
// }

// SWITCH

var numeroAConsultar = 1000;

switch (numeroAConsultar) {
  case "10":
    console.log("😎😎😎😎😎");
    break;
  case "100":
    console.log("✨✨✨✨✨");
    break;
  case "1000":
    console.log("🎃🎃🎃🎃🎃");
    break;
  case "9999":
    console.log("9999999999999999999");
    break;
  default:
    console.log("😴😴😴😴😴");
}
