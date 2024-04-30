// O (or) -> ||
// Y (and) -> &&

// 0 es piedra
// 1 es papel
// 2 es tijera

function jugar(eleccionUsuario) {
  const numeroRandom = Math.round(Math.random() * 2);
  const valoresParaJugar = ["Piedra", "Papel", "Tijera"];

  const eleccionMaquina = valoresParaJugar[numeroRandom];

  if (eleccionUsuario === "Piedra") {
    if (eleccionMaquina === "Piedra") {
      return "Esto es un empate";
    } else if (eleccionMaquina === "Tijera") {
      return "Has ganado!";
    } else {
      return "Has perdido";
    }
  }

  if (eleccionUsuario === "Papel") {
    if (eleccionMaquina === "Papel") {
      return "Esto es un empate";
    } else if (eleccionMaquina === "Piedra") {
      return "Has ganado!";
    } else {
      return "Has perdido";
    }
  }

  if (eleccionUsuario === "Tijera") {
    if (eleccionMaquina === "Tijera") {
      return "Esto es un empate";
    } else if (eleccionMaquina === "Papel") {
      return "Has ganado!";
    } else {
      return "Has perdido";
    }
  }
}

console.log(jugar("Piedra"));
console.log(jugar("Papel"));
console.log(jugar("Tijera"));

// jugar("Milanesa");
