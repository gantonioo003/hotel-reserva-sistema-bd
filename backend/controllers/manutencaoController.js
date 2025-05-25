const Manutencao = require('../models/Manutencao');

exports.getAllManutencoes = async (req, res) => {
  try {
    const dados = await Manutencao.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar manutenções', details: err });
  }
};

exports.createManutencao = async (req, res) => {
  try {
    await Manutencao.create(req.body);
    res.status(201).json({ message: 'Manutenção inserida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir manutenção', details: err });
  }
};

exports.updateManutencao = async (req, res) => {
  try {
    await Manutencao.update(req.params.id, req.body);
    res.json({ message: 'Manutenção atualizada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar manutenção', details: err });
  }
};

exports.deleteManutencao = async (req, res) => {
  try {
    await Manutencao.remove(req.params.id);
    res.json({ message: 'Manutenção deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar manutenção', details: err });
  }
};
