import express from 'express';
const router = express.Router();

// Ejemplo de ruta de autenticación
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí iría la lógica de login (temporal)
  res.json({ message: `Usuario ${username} intenta iniciar sesión.` });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: `Usuario ${username} registrado correctamente.` });
});

export default router;
