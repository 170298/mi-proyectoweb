import express from 'express';
import authRoutes from './routes/auth.js'; // Importa correctamente con la extensión .js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
