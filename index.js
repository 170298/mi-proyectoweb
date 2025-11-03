const express = require('express');
const app = express();

app.use(express.json());

// Importación corregida del router de autenticación
const authRouter = require('./routes/router_auth');
app.use('/auth', authRouter);

// ...otras rutas y lógica que necesites aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
