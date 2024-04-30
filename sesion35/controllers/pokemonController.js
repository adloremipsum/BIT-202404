import { database, setNewDatabase } from "../database.js";

function list(request, response) {
  response.json(database);
}

function find(request, response) {
  const idDelPokemon = request.params.id;
  const pokemonEncontrado = database.find(function (pokemon) {
    return idDelPokemon === pokemon.id;
  });
  response.json(pokemonEncontrado);
}

function create(request, response) {
  const nuevoPokemon = request.body;
  database.push(nuevoPokemon);
  response.json(database);
}

function update(request, response) {
  const nuevosDatos = request.body;
  const idDelPokemon = request.params.id;
  const pokemonEncontrado = database.find(function (pokemon) {
    return idDelPokemon === pokemon.id;
  });

  pokemonEncontrado.id = nuevosDatos.id || pokemonEncontrado.id;
  pokemonEncontrado.name = nuevosDatos.name || pokemonEncontrado.name;
  pokemonEncontrado.type = nuevosDatos.type || pokemonEncontrado.type;
  pokemonEncontrado.generation =
    nuevosDatos.generation || pokemonEncontrado.generation;

  response.json(pokemonEncontrado);
}

function destroy(request, response) {
  const idPokemonParaEliminar = request.params.id;
  const nuevoArrayDePokemons = database.filter(function (pokemon) {
    return idPokemonParaEliminar !== pokemon.id;
  });

  setNewDatabase(nuevoArrayDePokemons);

  response.json({
    message: "El pokemon ha sido eliminado",
    data: database,
  });
}

export default {
  list: list,
  find: find,
  create: create,
  update: update,
  destroy: destroy,
};
