// MOCK DE PESSOAS
export const pessoasMock = [
  {
    idPessoa: 1,
    nome: "João Silva",
    cpf: "12345678901",
    dataNascimento: "1985-04-12",
    endereco: "Rua das Flores, 123"
  },
  {
    idPessoa: 2,
    nome: "Maria Souza",
    cpf: "98765432100",
    dataNascimento: "1990-10-01",
    endereco: "Av. Brasil, 456"
  }
];

export function getPessoas() {
  return Promise.resolve(pessoasMock);
}

export function createPessoa(pessoa) {
  const novaPessoa = { ...pessoa, idPessoa: Date.now() };
  pessoasMock.push(novaPessoa);
  return Promise.resolve(novaPessoa);
}

// MOCK DE HÓSPEDES
let hospedesMock = [];

export function getHospedes() {
  return Promise.resolve(hospedesMock);
}

export function createHospede(idPessoa) {
  const jaEhHospede = hospedesMock.some((h) => h.idPessoa === idPessoa);
  if (!jaEhHospede) {
    const pessoa = pessoasMock.find((p) => p.idPessoa === idPessoa);
    if (pessoa) {
      hospedesMock.push(pessoa);
    }
  }
  return Promise.resolve();
}

// MOCK DE FUNCIONÁRIOS
let funcionariosMock = [];

export function getFuncionarios() {
  return Promise.resolve(funcionariosMock);
}

export function createFuncionario(idPessoa) {
  const jaEhFuncionario = funcionariosMock.some((f) => f.idPessoa === idPessoa);
  if (!jaEhFuncionario) {
    const pessoa = pessoasMock.find((p) => p.idPessoa === idPessoa);
    if (pessoa) {
      funcionariosMock.push(pessoa);
    }
  }
  return Promise.resolve();
}

// MOCK DE QUARTOS
let quartosMock = [];

export function getQuartos() {
  return Promise.resolve(quartosMock);
}

export function createQuarto(quarto) {
  const novo = { ...quarto, idQuarto: Date.now() };
  quartosMock.push(novo);
  return Promise.resolve();
}

// MOCK DE RESERVAS E PAGAMENTOS
let reservasMock = [];
let pagamentosMock = [];
let idReservaAuto = 1;
let idPagamentoAuto = 1;

export function getReservas() {
  return Promise.resolve(reservasMock);
}

export function createReserva(dados) {
  const novoPagamento = {
    idPagamento: idPagamentoAuto++,
    forma: "Cartão",
    valor: dados.valor, // baseado na diária
    data: new Date().toISOString().split("T")[0],
    status: "Pago"
  };
  pagamentosMock.push(novoPagamento);

  const novaReserva = {
    idReserva: idReservaAuto++,
    dataEntrada: dados.dataEntrada,
    dataSaida: dados.dataSaida,
    qtdPessoas: dados.qtdPessoas,
    idHospede: parseInt(dados.idHospede),
    idPagamento: novoPagamento.idPagamento,
    idQuarto: parseInt(dados.idQuarto)
  };

  reservasMock.push(novaReserva);
  return Promise.resolve(novaReserva);
}

export function getPagamentos() {
  return Promise.resolve(pagamentosMock);
}

export function deleteHospede(idPessoa) {
  hospedesMock = hospedesMock.filter((h) => h.idPessoa !== idPessoa);
  return Promise.resolve();
}

export function deleteFuncionario(idPessoa) {
  funcionariosMock = funcionariosMock.filter((f) => f.idPessoa !== idPessoa);
  return Promise.resolve();
}

export function updatePessoa(idPessoa, novosDados) {
  const index = pessoasMock.findIndex((p) => p.idPessoa === idPessoa);
  if (index !== -1) {
    pessoasMock[index] = { ...pessoasMock[index], ...novosDados };
  }
  return Promise.resolve();
}

let manutencoesMock = [];
let executasMock = [];
let idManutencaoAuto = 1;

export function getManutencoes() {
  return Promise.resolve(manutencoesMock);
}

export function createManutencao(data) {
  const nova = {
    id_manutencao: idManutencaoAuto++,
    data: data.data,
    tipo_servico: data.tipo_servico,
    descricao: data.descricao,
    custo: parseFloat(data.custo)
  };
  manutencoesMock.push(nova);

  executasMock.push({
    idFuncionario: parseInt(data.idFuncionario),
    idManutencao: nova.id_manutencao,
    idQuarto: parseInt(data.idQuarto)
  });

  return Promise.resolve(nova);
}

export function getExecutas() {
  return Promise.resolve(executasMock);
}

export function deletePessoa(id) {
  pessoas = pessoas.filter(p => p.idPessoa !== id);
  return Promise.resolve();
}
