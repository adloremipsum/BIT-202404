import pokemonRoutes from "./routes/pokemonRoutes.js";
import express from "express";
const app = express();

app.use(express.json());

// Rutas
app.use("/", pokemonRoutes);

app.listen(3000, () => {
  console.log("Este servidor está corriendo en el puerto 3000");
});
