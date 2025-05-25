const Possui = require('../models/Possui');

exports.getAll = async (req, res) => {
  try {
    const dados = await Possui.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados da tabela Possui', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Possui.create(req.body);
    res.status(201).json({ message: 'Serviço vinculado à reserva com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao vincular serviço à reserva', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    const { idServico, idReserva } = req.params;
    await Possui.remove(idServico, idReserva);
    res.json({ message: 'Ligação serviço-reserva removida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover ligação', details: err });
  }
};
