const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");

const datosDelUsuario = {};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  datosDelUsuario.nombre = inputNombre.value;
  datosDelUsuario.apellido = inputApellido.value;

  console.log(datosDelUsuario);
  alert("Gracias por enviar la información!");
});
