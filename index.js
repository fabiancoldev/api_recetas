// Importación de dependencias necesarias
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conectDB } from "./config/bd.js";
import recetaRoutes from "./routes/receta.routes.js";

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación Express
const app = express();

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
conectDB();

// Configuración de rutas
app.use("/", recetaRoutes);

// Solo inicia el servidor si está en desarrollo
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

// Exportar la aplicación para Vercel
export default app;
