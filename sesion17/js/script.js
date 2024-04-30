const usersContainer = document.querySelector("ul");

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
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].nombre);
  console.log(users[i].apellido);

  usersContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div>
            <h2>${users[i].nombre} ${users[i].apellido}</h2>
            <p>${users[i].edad}</p>   
        </div>
    `
  );
}
