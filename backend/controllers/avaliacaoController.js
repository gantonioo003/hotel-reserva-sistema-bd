const Avaliacao = require('../models/Avaliacao');

exports.getAll = async (req, res) => {
  try {
    const dados = await Avaliacao.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar avaliações', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Avaliacao.create(req.body);
    res.status(201).json({ message: 'Avaliação criada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar avaliação', details: err });
  }
};

exports.update = async (req, res) => {
  try {
    await Avaliacao.update(req.params.id, req.body);
    res.json({ message: 'Avaliação atualizada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar avaliação', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    await Avaliacao.remove(req.params.id);
    res.json({ message: 'Avaliação deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar avaliação', details: err });
  }
};
