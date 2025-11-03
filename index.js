const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Ruta principal (para probar el despliegue)
app.get('/', (req, res) => {
  res.send('🚀 Servidor funcionando correctamente en Render');
});

// Rutas de autenticación
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
