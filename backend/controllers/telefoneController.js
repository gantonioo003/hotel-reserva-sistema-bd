const Telefone = require('../models/Telefone');

exports.getAllTelefones = async (req, res) => {
  try {
    const dados = await Telefone.getAll();
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro no getAllTelefones:', err); // ADICIONE ESTA LINHA
    res.status(500).json({ error: 'Erro ao buscar telefones', details: err });
  }
};

exports.createTelefone = async (req, res) => {
  try {
    await Telefone.create(req.body);
    res.status(201).json({ message: 'Telefone inserido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir telefone', details: err });
  }
};

exports.updateTelefone = async (req, res) => {
  try {
    await Telefone.update(req.params.id, req.body);
    res.json({ message: 'Telefone atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar telefone', details: err });
  }
};

exports.deleteTelefone = async (req, res) => {
  try {
    await Telefone.remove(req.params.id);
    res.json({ message: 'Telefone deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar telefone', details: err });
  }
};
