const db = require('../db');

// Listar todos os serviços
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Servico');
  return rows;
};

// Inserir novo serviço
exports.create = async (servico) => {
  const { idServico, nome, descricao, valor } = servico;
  await db.query(
    'INSERT INTO Servico (idServico, nome, descricao, valor) VALUES (?, ?, ?, ?)',
    [idServico, nome, descricao, valor]
  );
};

// Atualizar serviço
exports.update = async (id, servico) => {
  const { nome, descricao, valor } = servico;
  await db.query(
    'UPDATE Servico SET nome = ?, descricao = ?, valor = ? WHERE idServico = ?',
    [nome, descricao, valor, id]
  );
};

// Remover
exports.remove = async (id) => {
  await db.query('DELETE FROM Servico WHERE idServico = ?', [id]);
};
