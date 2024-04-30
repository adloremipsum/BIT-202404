var arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1000];
var listaDeFrutas = ["Manzanas", "Naranjas", "Fresas"];
var listaDeNumeros = [11, 21, 45, 67, 90, 100];

console.log(arrayEjemplo);
console.log(listaDeFrutas);

// Cantidad de elementos dentro del array
// console.log(listaDeFrutas.length);
// console.log(listaDeNumeros.length);

var elegirFruta = prompt("Ingresa una fruta nueva");

// Agrega un elemento al final de la lista
listaDeFrutas.push("Sandias");
listaDeFrutas.push(elegirFruta);

// Agregar un elemento al principio de la lista
listaDeNumeros.unshift(0);

// Quitar el último elemento de la lista
arrayEjemplo.pop();

// Quitar el primer elemento
listaDeNumeros.shift();

// Decir si existe un elemento dentro de un array
console.log(listaDeFrutas.includes("Sandias"));
