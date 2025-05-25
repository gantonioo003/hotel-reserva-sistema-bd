const db = require('../db');

// Listar todos
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Hospede');
  return rows;
};

// Inserir novo hóspede
exports.create = async (hospede) => {
  const { idPessoa } = hospede;
  await db.query('INSERT INTO Hospede (idPessoa) VALUES (?)', [idPessoa]);
};

// Atualizar (nesse caso, não há campos a alterar, pois só tem FK)
// Vamos considerar a recriação do vínculo, se necessário
exports.update = async (id, novo) => {
  await db.query('UPDATE Hospede SET idPessoa = ? WHERE idPessoa = ?', [novo.idPessoa, id]);
};

// Deletar
exports.remove = async (id) => {
  await db.query('DELETE FROM Hospede WHERE idPessoa = ?', [id]);
};
