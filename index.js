const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola desde Clever Cloud con PostgreSQL!');
});

app.get('/usuarios', async (req, res) => {
  const result = await db.query('SELECT * FROM usuarios');
  res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
