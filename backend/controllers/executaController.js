const Executa = require('../models/Executa');

exports.getAll = async (req, res) => {
  try {
    const dados = await Executa.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar execuções', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Executa.create(req.body);
    res.status(201).json({ message: 'Execução registrada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar execução', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    const ids = req.body; // Espera um JSON com os 3 campos
    await Executa.remove(ids);
    res.json({ message: 'Execução removida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover execução', details: err });
  }
};
