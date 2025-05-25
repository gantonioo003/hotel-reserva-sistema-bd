const Pagamento = require('../models/Pagamento');

exports.getAll = async (req, res) => {
  try {
    const dados = await Pagamento.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar pagamentos', details: err });
  }
};

exports.create = async (req, res) => {
  try {
    await Pagamento.create(req.body);
    res.status(201).json({ message: 'Pagamento registrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pagamento', details: err });
  }
};

exports.update = async (req, res) => {
  try {
    await Pagamento.update(req.params.id, req.body);
    res.json({ message: 'Pagamento atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar pagamento', details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    await Pagamento.remove(req.params.id);
    res.json({ message: 'Pagamento deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar pagamento', details: err });
  }
};
