import funcionesUsuarios from "./usuarios.js";

console.log(
  funcionesUsuarios.agregarUsuario({
    nombre: "Pepe",
    apellido: "Milanesa",
    edad: 80,
  })
);
console.log(funcionesUsuarios.buscarUsuario("Luke"));
console.log(funcionesUsuarios.listaDeUsuarios());
