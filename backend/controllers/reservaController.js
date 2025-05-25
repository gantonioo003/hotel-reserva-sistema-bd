const Reserva = require('../models/Reserva');

exports.getAll = async (req, res) => {
  try {
    const dados = await Reserva.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar reservas', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Reserva.create(req.body);
    res.status(201).json({ message: 'Reserva criada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar reserva', details: err });
  }
};

exports.update = async (req, res) => {
  try {
    await Reserva.update(req.params.id, req.body);
    res.json({ message: 'Reserva atualizada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar reserva', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    await Reserva.remove(req.params.id);
    res.json({ message: 'Reserva deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar reserva', details: err });
  }
};
