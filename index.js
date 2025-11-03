require('dotenv').config();
const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require('./routes/roater/auth');
app.use('/auth', authroutes);

app.get('/', (req, res) => res.send('Proyecto integrado - servidor funcionando'));

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, username, email FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on', port));
