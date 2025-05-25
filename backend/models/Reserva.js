const db = require('../db');

// Listar todas
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Reserva');
  return rows;
};

// Criar
exports.create = async (reserva) => {
  const { idReserva, dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto } = reserva;
  await db.query(
    'INSERT INTO Reserva (idReserva, dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [idReserva, dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto]
  );
};

// Atualizar
exports.update = async (id, dados) => {
  const { dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto } = dados;
  await db.query(
    'UPDATE Reserva SET dataEntrada = ?, dataSaida = ?, qtdPessoas = ?, idHospede = ?, idPagamento = ?, idQuarto = ? WHERE idReserva = ?',
    [dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto, id]
  );
};

// Deletar
exports.remove = async (id) => {
  await db.query('DELETE FROM Reserva WHERE idReserva = ?', [id]);
};
