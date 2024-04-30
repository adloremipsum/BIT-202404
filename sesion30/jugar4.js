function jugar4(eleccionUsuario) {
  const numeroRandom = Math.round(Math.random() * 2);
  const valoresParaJugar = ["Piedra", "Papel", "Tijera"];
  const eleccionMaquina = valoresParaJugar[numeroRandom];

  const opuesto = {
    Piedra: "Papel",
    Papel: "Tijera",
    Tijera: "Piedra",
  };

  if (!valoresParaJugar.includes(eleccionUsuario)) {
    return "Debes elegir una de las siguientes opciones: Piedra, Papel o Tijera";
  }

  if (eleccionUsuario === eleccionMaquina) {
    return `Elegiste ${eleccionUsuario}. La maquina eligió ${eleccionMaquina}. Esto es un empate`;
  }

  if (opuesto[eleccionUsuario] === eleccionMaquina) {
    return `Elegiste ${eleccionUsuario}. La maquina eligió ${eleccionMaquina}. Has perdido!`;
  } else {
    return `Elegiste ${eleccionUsuario}. La maquina eligió ${eleccionMaquina}. Has ganado!`;
  }
}

console.log(jugar4("Piedra"));
console.log(jugar4("Papel"));
console.log(jugar4("Tijera"));
console.log(jugar4("Milanesa"));
