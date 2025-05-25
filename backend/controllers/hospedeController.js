const Hospede = require('../models/Hospede');

exports.getAllHospedes = async (req, res) => {
  try {
    const dados = await Hospede.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar hóspedes', details: err });
  }
};

exports.createHospede = async (req, res) => {
  try {
    await Hospede.create(req.body);
    res.status(201).json({ message: 'Hóspede inserido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir hóspede', details: err });
  }
};

exports.updateHospede = async (req, res) => {
  try {
    await Hospede.update(req.params.id, req.body);
    res.json({ message: 'Hóspede atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar hóspede', details: err });
  }
};

exports.deleteHospede = async (req, res) => {
  try {
    await Hospede.remove(req.params.id);
    res.json({ message: 'Hóspede deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar hóspede', details: err });
  }
};
