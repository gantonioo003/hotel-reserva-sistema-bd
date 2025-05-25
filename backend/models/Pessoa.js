// models/Pessoa.js
const db = require('../db');

// Listar todas as pessoas
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM Pessoa');
  return rows;
};

// Criar nova pessoa
exports.create = async (pessoa) => {
  const { idPessoa, nome, cpf, dataNascimento, endereco } = pessoa;
  await db.query(
    'INSERT INTO Pessoa (idPessoa, nome, cpf, dataNascimento, endereco) VALUES (?, ?, ?, ?, ?)',
    [idPessoa, nome, cpf, dataNascimento, endereco]
  );
};

// Atualizar
exports.update = async (id, pessoa) => {
  const { nome, cpf, dataNascimento, endereco } = pessoa;
  await db.query(
    'UPDATE Pessoa SET nome = ?, cpf = ?, dataNascimento = ?, endereco = ? WHERE idPessoa = ?',
    [nome, cpf, dataNascimento, endereco, id]
  );
};

// Deletar
exports.remove = async (id) => {
  await db.query('DELETE FROM Pessoa WHERE idPessoa = ?', [id]);
};
