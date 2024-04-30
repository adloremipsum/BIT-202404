// let tituloPrincipal = document.querySelector("h1");
// let subtitulo = document.querySelector("h2");

const buttonDark = document.querySelector("#button-dark");
const buttonLight = document.querySelector("#button-light");
const cambiarTema = document.querySelector("#cambiar-tema");

// Callback
buttonDark.addEventListener("click", function () {
  console.log("Hicimos clic en el botón de TEMA OSCURO");
  // A
  document.body.classList.add("dark-theme");
});

buttonLight.addEventListener("click", function () {
  console.log("Hicimos clic en el botón TEMA CLARO");
  // B
  document.body.classList.remove("dark-theme");
});

cambiarTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
