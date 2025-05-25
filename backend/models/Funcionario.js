const db = require('../db');

// Listar todos os funcionários
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Funcionario');
  return rows;
};

// Criar novo funcionário
exports.create = async (idPessoa) => {
  await db.query('INSERT INTO Funcionario (idPessoa) VALUES (?)', [idPessoa]);
};

// Atualizar (neste caso não tem o que atualizar além do ID, mas mantemos a estrutura)
exports.update = async (id, novoIdPessoa) => {
  await db.query('UPDATE Funcionario SET idPessoa = ? WHERE idPessoa = ?', [novoIdPessoa, id]);
};

// Remover
exports.remove = async (id) => {
  await db.query('DELETE FROM Funcionario WHERE idPessoa = ?', [id]);
};
