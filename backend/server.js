// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rotas vão aqui depois

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
