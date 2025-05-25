const db = require('../db');

// Listar todas as supervisões
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Supervisiona');
  return rows;
};

// Inserir nova supervisão
exports.create = async (data) => {
  const { idFuncionario_supervisor, idFuncionario_supervisionado } = data;
  await db.query(
    'INSERT INTO Supervisiona (idFuncionario_supervisor, idFuncionario_supervisionado) VALUES (?, ?)',
    [idFuncionario_supervisor, idFuncionario_supervisionado]
  );
};

// Remover supervisão
exports.remove = async (supervisorId, supervisionadoId) => {
  await db.query(
    'DELETE FROM Supervisiona WHERE idFuncionario_supervisor = ? AND idFuncionario_supervisionado = ?',
    [supervisorId, supervisionadoId]
  );
};
