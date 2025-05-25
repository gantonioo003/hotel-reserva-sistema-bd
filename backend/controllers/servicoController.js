const Servico = require('../models/Servico');

exports.getAll = async (req, res) => {
  try {
    const dados = await Servico.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar serviços', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Servico.create(req.body);
    res.status(201).json({ message: 'Serviço criado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar serviço', details: err });
  }
};

exports.update = async (req, res) => {
  try {
    await Servico.update(req.params.id, req.body);
    res.json({ message: 'Serviço atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar serviço', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    await Servico.remove(req.params.id);
    res.json({ message: 'Serviço deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar serviço', details: err });
  }
};
