require('dotenv').config();
const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// routes
const express = require('express');
const app = express();

app.use(express.json());

// Importación corregida: usa router_auth en vez de auth
const authRouter = require('./routes/router_auth');
app.use('/auth', authRouter);

// ...otras rutas y lógica (agrega aquí tu código)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
