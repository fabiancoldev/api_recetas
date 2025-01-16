// Importación de mongoose para el modelado de datos
import mongoose from "mongoose";

// Definición del esquema de la receta
const recetaSchema = new mongoose.Schema({
  // Nombre de la receta
  nombre: {
    type: String,
    required: true,
  },
  // Lista de ingredientes necesarios
  ingredientes: {
    type: String,
    required: true,
  },
  // Pasos para preparar la receta
  instrucciones: {
    type: String,
    required: true,
  },
  // Estado de la receta (Activa/Inactiva)
  estado: {
    type: String,
    default: "Activa",
  },
  // URL de la imagen de la receta
  imagenUrl: {
    type: String,
    required: false,
    default: '',
  },
  // Categoría de la receta (ej: Postres, Platos principales, etc.)
  categoria: {
    type: String,
    default: "Plato fuerte",
  },
  // Fecha de creación de la receta
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Creación y exportación del modelo
const Receta = mongoose.model("Receta", recetaSchema);
export default Receta;
