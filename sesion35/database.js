let database = [
  {
    name: "Charizard",
    type: "Fire",
    generation: "1",
    id: "6",
  },
  {
    name: "Arcanine",
    type: "Fire",
    generation: "1",
    id: "59",
  },
  {
    name: "Flareon",
    type: "Fire",
    generation: "1",
    id: "136",
  },
  {
    name: "Moltres",
    type: "Fire",
    generation: "1",
    id: "146",
  },
  {
    name: "Typhlosion",
    type: "Fire",
    generation: "2",
    id: "157",
  },
  {
    name: "Houndoom",
    type: "Fire",
    generation: "2",
    id: "229",
  },
  {
    name: "Blaziken",
    type: "Fire",
    generation: "3",
    id: "257",
  },
  {
    name: "Infernape",
    type: "Fire",
    generation: "4",
    id: "392",
  },
  {
    name: "Emboar",
    type: "Fire",
    generation: "5",
    id: "500",
  },
  {
    name: "Delphox",
    type: "Fire",
    generation: "6",
    id: "655",
  },
];

function setNewDatabase(newArray) {
  database = newArray;
  console.log(database);
}

export { database, setNewDatabase };
