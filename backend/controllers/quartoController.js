const Quarto = require('../models/Quarto');

exports.getAllQuartos = async (req, res) => {
  try {
    const dados = await Quarto.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar quartos', details: err });
  }
};

exports.createQuarto = async (req, res) => {
  try {
    await Quarto.create(req.body);
    res.status(201).json({ message: 'Quarto inserido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir quarto', details: err });
  }
};

exports.updateQuarto = async (req, res) => {
  try {
    await Quarto.update(req.params.id, req.body);
    res.json({ message: 'Quarto atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar quarto', details: err });
  }
};

exports.deleteQuarto = async (req, res) => {
  try {
    await Quarto.remove(req.params.id);
    res.json({ message: 'Quarto deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar quarto', details: err });
  }
};
