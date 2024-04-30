const tituloPrincipal = document.getElementById("datos");
// const tituloPrincipal2 = document.querySelector("#datos")

tituloPrincipal.addEventListener("click", function () {
  const nombreCompleto = prompt("Ingresar nombre y apellido");
  tituloPrincipal.textContent = nombreCompleto;
});
