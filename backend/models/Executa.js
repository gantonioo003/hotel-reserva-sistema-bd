const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Executa');
  return rows;
};

exports.create = async (dados) => {
  const { idFuncionario, idManutencao, idQuarto } = dados;
  await db.query(
    'INSERT INTO Executa (idFuncionario, idManutencao, idQuarto) VALUES (?, ?, ?)',
    [idFuncionario, idManutencao, idQuarto]
  );
};

exports.remove = async ({ idFuncionario, idManutencao, idQuarto }) => {
  await db.query(
    'DELETE FROM Executa WHERE idFuncionario = ? AND idManutencao = ? AND idQuarto = ?',
    [idFuncionario, idManutencao, idQuarto]
  );
};
