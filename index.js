import express from 'express';
import authRouter from './routes/auth.js';

const app = express();

app.use(express.json()); // Para analizar JSON en el body

// Usar las rutas de autenticacion bajo /auth
app.use('/auth', authRouter);

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a Carpintería Los Robles API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
