// ===== Carpintería Los Robles =====
// Backend principal con Express y MySQL

import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Importar rutas (corregido)
import authRouter from "./routes/router/auth.js";

// Configuración base
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Permitir CORS y JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas estáticas (por si sirves el frontend desde aquí)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

// Conexión MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "admin123",
  database: process.env.DB_NAME || "carpinteria_db",
  port: process.env.DB_PORT || 3306,
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a la base de datos:", err.message);
  } else {
    console.log("✅ Conectado correctamente a MySQL (carpinteria_db)");
  }
});

// Rutas principales
app.use("/api", authrouter);

// Ruta base
app.get("/", (req, res) => {
  res.send("🚀 Servidor Carpintería Los Robles activo y funcionando");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌐 Servidor ejecutándose en http://localhost:${PORT}`);
});
