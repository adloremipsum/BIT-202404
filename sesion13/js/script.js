var listaDeFrutas = ["Manzanas", "Naranjas", "Fresas"];
//                       0           1          2

var arrayComplejo = [9999, true, ["Rojo", "Azul"]];

// console.log(listaDeFrutas[2]);
// console.log(listaDeFrutas.length);

// console.log(arrayComplejo[2][0]);

// ================================================

// for (var contador = 0; contador < 10; contador++) {
//   console.log(contador);
// }

//
//                                           3
for (var contador = 0; contador < listaDeFrutas.length; contador++) {
  if (listaDeFrutas[contador] == "Fresas") {
    console.log("Por fin fresas!!");
  } else {
    console.log("😥");
  }
}

var texto = "Ad lorem ipsum";
// console.log(texto.length);
for (var contador = 0; contador < texto.length; contador++) {
  console.log(texto[contador]);
}
