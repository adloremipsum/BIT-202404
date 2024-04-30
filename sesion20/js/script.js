const lista = document.querySelector("#lista-de-planetas");
const button = document.querySelector("#traer-planetas");

let siguientePagina = "";

console.log("Esto es JavaScript");

fetch("https://swapi.dev/api/planets?format=json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    siguientePagina = data.next;
    // Vamos hacer lo que querramos hacer con la información...
    for (planeta of data.results) {
      lista.insertAdjacentHTML(
        "beforeend",
        `
        <div class="planeta">
          <h2>${planeta.name}</h2>
          <ul>
            <li>Clima: ${planeta.climate}</li>
            <li>Población: ${planeta.population}</li>
          </ul>
        </div>
      `
      );
    }
  });

button.addEventListener("click", function () {
  fetch(siguientePagina)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      siguientePagina = data.next;
      if (siguientePagina !== null) {
        // Vamos hacer lo que querramos hacer con la información...
        for (planeta of data.results) {
          lista.insertAdjacentHTML(
            "beforeend",
            `
        <div class="planeta">
          <h2>${planeta.name}</h2>
          <ul>
            <li>Clima: ${planeta.climate}</li>
            <li>Población: ${planeta.population}</li>
          </ul>
        </div>
      `
          );
        }
      }
    });
});

console.log("Seguimos probando JavaScript");
