// db.js
const mysql = require('mysql2/promise'); // usa a versão com promises
require('dotenv').config();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hotel'
});

db.getConnection()
  .then(() => {
    console.log('🟢 Conectado ao banco de dados MySQL!');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no MySQL:', err);
  });

module.exports = db;
