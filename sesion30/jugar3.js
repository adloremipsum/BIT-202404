// O (or) -> ||
// Y (and) -> &&

// 0 es piedra
// 1 es papel
// 2 es tijera

function jugar(eleccionUsuario) {
  const numeroRandom = Math.round(Math.random() * 2);
  const valoresParaJugar = ["Piedra", "Papel", "Tijera"];

  const eleccionMaquina = valoresParaJugar[numeroRandom];

  switch (eleccionUsuario) {
    case "Piedra":
      if (eleccionMaquina === "Piedra") {
        return "Esto es un empate";
      } else if (eleccionMaquina === "Tijera") {
        return "Has ganado!";
      } else {
        return "Has perdido";
      }
      break;
    case "Papel":
      if (eleccionMaquina === "Papel") {
        return "Esto es un empate";
      } else if (eleccionMaquina === "Piedra") {
        return "Has ganado!";
      } else {
        return "Has perdido";
      }
      break;
    case "Tijera":
      if (eleccionMaquina === "Tijera") {
        return "Esto es un empate";
      } else if (eleccionMaquina === "Papel") {
        return "Has ganado!";
      } else {
        return "Has perdido";
      }
      break;
    default:
      return "Elije un valor que sea: Piedra, Papel o Tijera";
  }
}

console.log(jugar("Piedra"));
console.log(jugar("Papel"));
console.log(jugar("Tijera"));
console.log(jugar("Milanesa"));

// jugar("Milanesa");
