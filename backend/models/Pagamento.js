const db = require('../db');

// Listar todos
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Pagamento');
  return rows;
};

// Inserir novo
exports.create = async (dados) => {
  const { idPagamento, forma, valor, data, status } = dados;
  await db.query(
    'INSERT INTO Pagamento (idPagamento, forma, valor, data, status) VALUES (?, ?, ?, ?, ?)',
    [idPagamento, forma, valor, data, status]
  );
};

// Atualizar
exports.update = async (id, dados) => {
  const { forma, valor, data, status } = dados;
  await db.query(
    'UPDATE Pagamento SET forma = ?, valor = ?, data = ?, status = ? WHERE idPagamento = ?',
    [forma, valor, data, status, id]
  );
};

// Deletar
exports.remove = async (id) => {
  await db.query('DELETE FROM Pagamento WHERE idPagamento = ?', [id]);
};
