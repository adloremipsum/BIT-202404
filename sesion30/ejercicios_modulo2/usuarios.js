const users = [
  {
    nombre: "Leia",
    apellido: "Organa",
    edad: 30,
  },
  {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 30,
  },
  {
    nombre: "Han",
    apellido: "Solo",
    edad: 35,
  },
  {
    nombre: "Obi-Wan",
    apellido: "Kenobi",
    edad: 60,
  },
  {
    nombre: "Jar Jar",
    apellido: "Binks",
    edad: 23,
  },
];

function agregarUsuario(nuevoUsuario) {
  users.push(nuevoUsuario);
  return users;
}

function buscarUsuario(nombre) {
  return users.find(function (user) {
    return user.nombre.toLowerCase() === nombre.toLowerCase();
  });
}

function listaDeUsuarios() {
  return users;
}

export default {
  agregarUsuario: agregarUsuario,
  buscarUsuario: buscarUsuario,
  listaDeUsuarios: listaDeUsuarios,
};
