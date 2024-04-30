// const user = {
//   id: 1,
//   name: "Leia",
//   lastname: "Organa",
// };

// JS Orientado a Objetos

class User {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
}

class Product {
  constructor(name, brand, price, category) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.category = category;
  }
}

const nuevoUsuario = new User("Leia", "Organa", 33);
const otroUsuario = new User("Luke", "Skywalker", 33);

const producto1 = new Product("Iphone X", "Apple", 100, "Smartphones");
const producto2 = new Product("Pixel 6A", "Google", 100, "Smartphones");

console.log(producto1);
console.log(producto2);
