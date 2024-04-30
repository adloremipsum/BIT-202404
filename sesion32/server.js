import express from "express";
import operaciones from "./operaciones.js";
import cors from "cors";
const app = express();

app.use(cors());

// Rutas
app.get("/", function (request, response) {
  response.send("Te damos la bienvenida este proyecto que utiliza Express.js");
});

app.get("/api/sumar/:numeroA/:numeroB", function (request, response) {
  const numeroA = Number(request.params.numeroA);
  const numeroB = Number(request.params.numeroB);
  response.json(operaciones.sumar(numeroA, numeroB));
});

app.get("/api/restar/:numeroA/:numeroB", function (request, response) {
  const numeroA = Number(request.params.numeroA);
  const numeroB = Number(request.params.numeroB);
  response.json(operaciones.restar(numeroA, numeroB));
});

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
