const axios = require('axios');

(async () => {
  try {
    // === Pessoa ===
    await axios.post('http://localhost:3001/api/pessoas', {
      idPessoa: 1,
      nome: 'João Silva',
      cpf: '12345678901',
      dataNascimento: '1985-04-12',
      endereco: 'Rua das Flores, 123'
    });

    await axios.put('http://localhost:3001/api/pessoas/1', {
      nome: 'João S. Silva',
      cpf: '12345678901',
      dataNascimento: '1985-04-12',
      endereco: 'Rua das Palmeiras, 456'
    });

    await axios.get('http://localhost:3001/api/pessoas');
    await axios.delete('http://localhost:3001/api/pessoas/1');

    // === Telefone ===
    await axios.post('http://localhost:3001/api/telefones', {
      telefone_PK: 1,
      telefone: '81999999999',
      idPessoa: 2
    });

    await axios.put('http://localhost:3001/api/telefones/1', {
      telefone: '81988888888',
      idPessoa: 2
    });

    await axios.get('http://localhost:3001/api/telefones');
    await axios.delete('http://localhost:3001/api/telefones/1');

    // === Hóspede ===
    await axios.post('http://localhost:3001/api/hospedes', { idPessoa: 3 });
    await axios.get('http://localhost:3001/api/hospedes');
    await axios.delete('http://localhost:3001/api/hospedes/3');

    // === Funcionário ===
    await axios.post('http://localhost:3001/api/funcionarios', { idPessoa: 4 });
    await axios.get('http://localhost:3001/api/funcionarios');
    await axios.delete('http://localhost:3001/api/funcionarios/4');

    // === Quarto ===
    await axios.post('http://localhost:3001/api/quartos', {
      idQuarto: 1,
      numero: '101',
      tipo: 'Duplo',
      capacidade: 2,
      valorDiaria: 150.00,
      status: 'Disponível'
    });

    await axios.put('http://localhost:3001/api/quartos/1', {
      numero: '101A',
      tipo: 'Triplo',
      capacidade: 3,
      valorDiaria: 200.00,
      status: 'Ocupado'
    });

    await axios.get('http://localhost:3001/api/quartos');
    await axios.delete('http://localhost:3001/api/quartos/1');

    // === Manutenção ===
    await axios.post('http://localhost:3001/api/manutencoes', {
      id_manutencao: 1,
      data: '2025-05-24',
      tipo_servico: 'Limpeza geral',
      descricao: 'Limpeza e troca de roupas de cama',
      custo: 100
    });

    await axios.put('http://localhost:3001/api/manutencoes/1', {
      data: '2025-05-25',
      tipo_servico: 'Reparo elétrico',
      descricao: 'Troca de lâmpadas e revisão do quadro',
      custo: 250
    });

    await axios.get('http://localhost:3001/api/manutencoes');
    await axios.delete('http://localhost:3001/api/manutencoes/1');

    // === Executa ===
    await axios.post('http://localhost:3001/api/executa', {
      idFuncionario: 4,
      idManutencao: 1,
      idQuarto: 1
    });

    await axios.get('http://localhost:3001/api/executa');
    await axios.delete('http://localhost:3001/api/executa/4/1/1');

    // === Pagamento ===
    await axios.post('http://localhost:3001/api/pagamentos', {
      idPagamento: 1,
      forma: 'Cartão',
      valor: 300.00,
      data: '2025-06-01',
      status: 'Pago'
    });

    await axios.put('http://localhost:3001/api/pagamentos/1', {
      forma: 'Pix',
      valor: 310.00,
      data: '2025-06-02',
      status: 'Confirmado'
    });

    await axios.get('http://localhost:3001/api/pagamentos');
    await axios.delete('http://localhost:3001/api/pagamentos/1');

    // === Reserva ===
    await axios.post('http://localhost:3001/api/reservas', {
      idReserva: 1,
      dataEntrada: '2025-06-10',
      dataSaida: '2025-06-15',
      qtdPessoas: 2,
      idHospede: 2,
      idPagamento: 1,
      idQuarto: 1
    });

    await axios.put('http://localhost:3001/api/reservas/1', {
      dataEntrada: '2025-06-11',
      dataSaida: '2025-06-16',
      qtdPessoas: 3,
      idHospede: 2,
      idPagamento: 1,
      idQuarto: 1
    });

    await axios.get('http://localhost:3001/api/reservas');
    await axios.delete('http://localhost:3001/api/reservas/1');

    // === Avaliação ===
    await axios.post('http://localhost:3001/api/avaliacoes', {
      idAvaliacao: 1,
      comentario: 'Excelente atendimento!',
      nota: 10,
      idReserva: 1
    });

    await axios.put('http://localhost:3001/api/avaliacoes/1', {
      comentario: 'Muito bom, só o Wi-Fi que falhou.',
      nota: 9,
      idReserva: 1
    });

    await axios.get('http://localhost:3001/api/avaliacoes');
    await axios.delete('http://localhost:3001/api/avaliacoes/1');

    // === Serviço ===
    await axios.post('http://localhost:3001/api/servicos', {
      idServico: 1,
      nome: 'Café da manhã',
      descricao: 'Serviço de café da manhã completo',
      valor: 50
    });

    await axios.put('http://localhost:3001/api/servicos/1', {
      nome: 'Café da manhã premium',
      descricao: 'Com mais opções de frutas e pães',
      valor: 65
    });

    await axios.get('http://localhost:3001/api/servicos');
    await axios.delete('http://localhost:3001/api/servicos/1');

    // === Possui ===
    await axios.post('http://localhost:3001/api/possui', {
      idServico: 1,
      idReserva: 1
    });

    await axios.get('http://localhost:3001/api/possui');
    await axios.delete('http://localhost:3001/api/possui/1/1');

    // === Supervisiona ===
    await axios.post('http://localhost:3001/api/supervisiona', {
      idFuncionario_supervisor: 4,
      idFuncionario_supervisionado: 4
    });

    await axios.get('http://localhost:3001/api/supervisiona');
    await axios.delete('http://localhost:3001/api/supervisiona/4/4');

    console.log("✅ Todos os testes executados com sucesso.");
  } catch (err) {
    console.error("❌ Erro:", err.response?.data || err);
  }
})();
