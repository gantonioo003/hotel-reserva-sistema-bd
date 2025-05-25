const axios = require('axios');

async function testarSupervisiona() {
  try {
    // Criar supervisão
    await axios.post('http://localhost:3001/api/supervisiona', {
      idFuncionario_supervisor: 5,
      idFuncionario_supervisionado: 6
    });
    console.log('✅ Supervisão criada');

    // Ver tudo
    const res = await axios.get('http://localhost:3001/api/supervisiona');
    console.log('📋 Supervisões:', res.data);

    // Deletar
    await axios.delete('http://localhost:3001/api/supervisiona/5/6');
    console.log('🗑️ Supervisão removida');
  } catch (err) {
    console.error('❌ Erro:', err.response?.data || err);
  }
}

testarSupervisiona();
