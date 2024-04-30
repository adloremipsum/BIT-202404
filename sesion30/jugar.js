// O (or) -> ||
// Y (and) -> &&

// 0 es piedra
// 1 es papel
// 2 es tijera

function jugar(eleccionUsuario) {
  const eleccionMaquina = Math.round(Math.random() * 2);

  if (eleccionUsuario === "Piedra" && eleccionMaquina === 0) {
    return "Esto es un empate.";
  }
  if (eleccionUsuario === "Papel" && eleccionMaquina === 1) {
    return "Esto es un empate.";
  }
  if (eleccionUsuario === "Tijera" && eleccionMaquina === 2) {
    return "Esto es un empate.";
  }

  if (eleccionUsuario === "Piedra" && eleccionMaquina === 2) {
    return "Ganaste";
  }
  if (eleccionUsuario === "Papel" && eleccionMaquina === 0) {
    return "Ganaste";
  }
  if (eleccionUsuario === "Tijera" && eleccionMaquina === 1) {
    return "Ganaste";
  }

  if (eleccionUsuario === "Piedra" && eleccionMaquina === 1) {
    return "Perdiste";
  }
  if (eleccionUsuario === "Papel" && eleccionMaquina === 2) {
    return "Perdiste";
  }
  if (eleccionUsuario === "Tijera" && eleccionMaquina === 0) {
    return "Perdiste";
  }
}

console.log(jugar("Piedra"));
console.log(jugar("Papel"));
console.log(jugar("Tijera"));

// jugar("Milanesa");
