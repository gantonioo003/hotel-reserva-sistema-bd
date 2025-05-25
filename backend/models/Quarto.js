const db = require('../db');

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Quarto');
  return rows;
};

exports.create = async (quarto) => {
  const { idQuarto, numero, tipo, capacidade, valorDiaria, status } = quarto;
  await db.query(
    'INSERT INTO Quarto (idQuarto, numero, tipo, capacidade, valorDiaria, status) VALUES (?, ?, ?, ?, ?, ?)',
    [idQuarto, numero, tipo, capacidade, valorDiaria, status]
  );
};

exports.update = async (id, novo) => {
  const { numero, tipo, capacidade, valorDiaria, status } = novo;
  await db.query(
    'UPDATE Quarto SET numero = ?, tipo = ?, capacidade = ?, valorDiaria = ?, status = ? WHERE idQuarto = ?',
    [numero, tipo, capacidade, valorDiaria, status, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM Quarto WHERE idQuarto = ?', [id]);
};
