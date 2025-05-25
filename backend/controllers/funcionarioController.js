const Funcionario = require('../models/Funcionario');

exports.getAllFuncionarios = async (req, res) => {
  try {
    const dados = await Funcionario.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar funcionários', details: err });
  }
};

exports.createFuncionario = async (req, res) => {
  try {
    const { idPessoa } = req.body;
    await Funcionario.create(idPessoa);
    res.status(201).json({ message: 'Funcionário inserido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir funcionário', details: err });
  }
};

exports.updateFuncionario = async (req, res) => {
  try {
    const { id } = req.params;
    const { novoIdPessoa } = req.body;
    await Funcionario.update(id, novoIdPessoa);
    res.json({ message: 'Funcionário atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar funcionário', details: err });
  }
};

exports.deleteFuncionario = async (req, res) => {
  try {
    const { id } = req.params;
    await Funcionario.remove(id);
    res.json({ message: 'Funcionário deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar funcionário', details: err });
  }
};
