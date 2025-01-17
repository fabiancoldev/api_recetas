// Importación de dependencias y controladores
import express from "express";
import {
  getRecetas,
  postRecetas,
  getRecetaXId,
  patchReceta,
  inactivarReceta,
  deleteReceta,
  getRecetaNombre
} from "../controllers/receta.controller.js";

const router = express.Router();

// Ruta raíz para la API
router.get("/", (req, res) => {
  res.send("Bienvenido a la API de recetas. Usa /recetas para acceder a las recetas.");
});

// Definición de rutas para el CRUD de recetas
router.get("/recetas", getRecetas);
router.post("/recetas", postRecetas);
router.get("/recetas/:id", getRecetaXId);
router.get("/buscar/:nombre", getRecetaNombre);
router.patch("/recetas/:id", patchReceta);
router.patch("/recetas/:id/inactivar", inactivarReceta);
router.delete("/recetas/:id", deleteReceta);

export default router;
