// controllers/pessoaController.js
const Pessoa = require('../models/Pessoa');

exports.getAllPessoas = async (req, res) => {
  try {
    const dados = await Pessoa.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pessoas', details: err });
  }
};

exports.createPessoa = async (req, res) => {
  try {
    await Pessoa.create(req.body);
    res.status(201).json({ message: 'Pessoa criada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pessoa', details: err });
  }
};

exports.updatePessoa = async (req, res) => {
  try {
    await Pessoa.update(req.params.id, req.body);
    res.json({ message: 'Pessoa atualizada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar pessoa', details: err });
  }
};

exports.deletePessoa = async (req, res) => {
  try {
    await Pessoa.remove(req.params.id);
    res.json({ message: 'Pessoa deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar pessoa', details: err });
  }
};
