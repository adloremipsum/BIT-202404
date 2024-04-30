fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// async/await

async function obtenerPersonajes() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
