import pokemonController from "../controllers/pokemonController.js";
import express from "express";
const router = express.Router();

router.get("/api/pokemons", pokemonController.list);
router.get("/api/pokemons/:id", pokemonController.find);
router.post("/api/pokemons", pokemonController.create);
router.patch("/api/pokemons/:id", pokemonController.update);
router.delete("/api/pokemons/:id", pokemonController.destroy);

export default router;
