const Supervisiona = require('../models/Supervisiona');

exports.getAll = async (req, res) => {
  try {
    const dados = await Supervisiona.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar supervisões', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Supervisiona.create(req.body);
    res.status(201).json({ message: 'Supervisão criada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar supervisão', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    const { supervisorId, supervisionadoId } = req.params;
    await Supervisiona.remove(supervisorId, supervisionadoId);
    res.json({ message: 'Supervisão removida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover supervisão', details: err });
  }
};
