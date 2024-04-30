// Array
var datosUsuario = ["Leia", "Organa", 29];
//                    0        1       2

// Objeto literal
var usuario1 = {
  nombre: "Leia", // La propiedad nombre del objeto usuario
  apellido: "Organa", // La propiedad apellido del objeto usuario
  edad: 29, // La propiedad edad del objeto usuario
  saludar: function () {
    // El método saludar del objeto usuario
    return "Hola, soy " + this.nombre + " " + this.apellido;
  },
};

// enEsteMismoObjeto -> this

var usuario2 = {
  nombre: "Marty",
  apellido: "McFly",
  edad: 25,
  saludar: function () {
    return "Hola, soy " + this.nombre + " " + this.apellido;
  },
};

var usuario3 = {
  nombre: "Beatrix",
  apellido: "Kiddo",
  edad: 32,
  saludar: function () {
    return "Hola, soy " + this.nombre + " " + this.apellido;
  },
};

console.log(usuario1.saludar());
console.log(usuario2.saludar());
console.log(usuario3.saludar());
