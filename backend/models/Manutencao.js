const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Manutencao');
  return rows;
};

exports.create = async (manutencao) => {
  const { id_manutencao, data, tipo_servico, descricao, custo } = manutencao;
  await db.query(
    'INSERT INTO Manutencao (id_manutencao, data, tipo_servico, descricao, custo) VALUES (?, ?, ?, ?, ?)',
    [id_manutencao, data, tipo_servico, descricao, custo]
  );
};

exports.update = async (id, novo) => {
  const { data, tipo_servico, descricao, custo } = novo;
  await db.query(
    'UPDATE Manutencao SET data = ?, tipo_servico = ?, descricao = ?, custo = ? WHERE id_manutencao = ?',
    [data, tipo_servico, descricao, custo, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM Manutencao WHERE id_manutencao = ?', [id]);
};
