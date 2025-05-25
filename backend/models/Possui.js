const db = require('../db');

// Listar todas as ligações serviço-reserva
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Possui');
  return rows;
};

// Adicionar relação serviço ↔ reserva
exports.create = async (dados) => {
  const { idServico, idReserva } = dados;
  await db.query(
    'INSERT INTO Possui (idServico, idReserva) VALUES (?, ?)',
    [idServico, idReserva]
  );
};

// Remover uma ligação
exports.remove = async (idServico, idReserva) => {
  await db.query(
    'DELETE FROM Possui WHERE idServico = ? AND idReserva = ?',
    [idServico, idReserva]
  );
};
