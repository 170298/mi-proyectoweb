// index.js
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js'; // ✅ Ruta corregida
import dotenv from 'dotenv';
import './db.js'; // si tu db.js configura la conexión

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter); // ejemplo de uso

// Puerto de Render o local
const PORT = process.env.PORT || 3000;

// Servidor activo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

