const db = require('../db');

// Listar todos
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Telefone');
  return rows;
};

// Inserir novo telefone
exports.create = async (telefone) => {
  const { telefone_PK, telefone: numero, idPessoa } = telefone;
  await db.query(
    'INSERT INTO Telefone (telefone_PK, telefone, idPessoa) VALUES (?, ?, ?)',
    [telefone_PK, numero, idPessoa]
  );
};

// Atualizar
exports.update = async (id, novoTel) => {
  const { telefone, idPessoa } = novoTel;
  await db.query(
    'UPDATE Telefone SET telefone = ?, idPessoa = ? WHERE telefone_PK = ?',
    [telefone, idPessoa, id]
  );
};

// Deletar
exports.remove = async (id) => {
  await db.query('DELETE FROM Telefone WHERE telefone_PK = ?', [id]);
};
