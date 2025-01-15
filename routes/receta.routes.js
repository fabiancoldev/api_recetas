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

// Definición de rutas para el CRUD de recetas
// GET - Obtener todas las recetas
router.get("/recetas", getRecetas);

// POST - Crear una nueva receta
router.post("/recetas", postRecetas);

// GET - Obtener una receta por su ID
router.get("/recetas/:id", getRecetaXId);

// GET - Buscar recetas por nombre
router.get("/buscar/:nombre", getRecetaNombre);

// PATCH - Actualizar una receta
router.patch("/recetas/:id", patchReceta);

// PATCH - Inactivar una receta
router.patch("/recetas/:id/inactivar", inactivarReceta);

// DELETE - Eliminar una receta
router.delete("/recetas/:id", deleteReceta);

export default router;
