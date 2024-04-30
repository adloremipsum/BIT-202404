class Animal {
  constructor(name, legs, age) {
    this.name = name;
    this.legs = legs;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, legs, age, breed) {
    super(name, legs, age);
    this.breed = breed;
  }
  bark() {
    return "Wof wof! My name is " + this.name;
  }
}

class Cat extends Animal {
  constructor(name, legs, age, colors) {
    super(name, legs, age);
    this.colors = colors;
  }
  meow() {
    return "Meow meow!";
  }
}

class Turtle extends Animal {
  constructor(name, legs, age, size) {
    super(name, legs, age);
    this.size = size;
  }

  greetings() {
    return "Aguante JavaScript!";
  }
}

const perro1 = new Dog("Eloisa", 4, 5, "Street");

console.log(perro1.name);
console.log(perro1.bark());

const gato1 = new Cat("Garfield", 4, 5, ["White", "Orange"]);
const tortuga1 = new Turtle("JavaScript", 4, 50, "Big");

console.log(perro1);
