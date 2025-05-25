const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// 🔽 ROTAS
const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/api/pessoas', pessoaRoutes);

const telefoneRoutes = require('./routes/telefoneRoutes');
app.use('/api/telefones', telefoneRoutes);

const hospedeRoutes = require('./routes/hospedeRoutes');
app.use('/api/hospedes', hospedeRoutes);

const funcionarioRoutes = require('./routes/funcionarioRoutes');
app.use('/api/funcionarios', funcionarioRoutes);

const quartoRoutes = require('./routes/quartoRoutes');
app.use('/api/quartos', quartoRoutes);

const manutencaoRoutes = require('./routes/manutencaoRoutes');
app.use('/api/manutencoes', manutencaoRoutes);

const executaRoutes = require('./routes/executaRoutes');
app.use('/api/executa', executaRoutes);

const pagamentoRoutes = require('./routes/pagamentoRoutes');
app.use('/api/pagamentos', pagamentoRoutes);

const reservaRoutes = require('./routes/reservaRoutes');
app.use('/api/reservas', reservaRoutes);

const avaliacaoRoutes = require('./routes/avaliacaoRoutes');
app.use('/api/avaliacoes', avaliacaoRoutes);

const servicoRoutes = require('./routes/servicoRoutes');
app.use('/api/servicos', servicoRoutes);

const possuiRoutes = require('./routes/possuiRoutes');
app.use('/api/possui', possuiRoutes);

const supervisionaRoutes = require('./routes/supervisionaRoutes');
app.use('/api/supervisiona', supervisionaRoutes);












// 🔽 INICIA SERVIDOR
app.listen(3001, () => {
  console.log('🚀 Servidor rodando na porta 3001');
});
