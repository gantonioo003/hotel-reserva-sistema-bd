const db = require('../db');

// Listar todas as avaliações
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Avaliacao');
  return rows;
};

// Inserir avaliação
exports.create = async (avaliacao) => {
  const { idAvaliacao, comentario, nota, idReserva } = avaliacao;
  await db.query(
    'INSERT INTO Avaliacao (idAvaliacao, comentario, nota, idReserva) VALUES (?, ?, ?, ?)',
    [idAvaliacao, comentario, nota, idReserva]
  );
};

// Atualizar
exports.update = async (id, avaliacao) => {
  const { comentario, nota, idReserva } = avaliacao;
  await db.query(
    'UPDATE Avaliacao SET comentario = ?, nota = ?, idReserva = ? WHERE idAvaliacao = ?',
    [comentario, nota, idReserva, id]
  );
};

// Remover
exports.remove = async (id) => {
  await db.query('DELETE FROM Avaliacao WHERE idAvaliacao = ?', [id]);
};
