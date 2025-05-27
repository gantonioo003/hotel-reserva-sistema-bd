CREATE DATABASE IF NOT EXISTS Hotel;
USE Hotel;

CREATE TABLE Pessoa (
    idPessoa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(14) UNIQUE,
    dataNascimento DATE,
    endereco VARCHAR(200)
);

CREATE TABLE Telefone (
    telefone_PK INT PRIMARY KEY,
    telefone VARCHAR(15),
    idPessoa INT,
    FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa)
);

CREATE TABLE Hospede (
    idPessoa INT PRIMARY KEY,
    FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa)
);

CREATE TABLE Funcionario (
    idPessoa INT PRIMARY KEY,
    FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa)
);

CREATE TABLE Supervisiona (
    idFuncionario_supervisor INT,
    idFuncionario_supervisionado INT,
    PRIMARY KEY (idFuncionario_supervisor, idFuncionario_supervisionado),
    FOREIGN KEY (idFuncionario_supervisor) REFERENCES Funcionario(idPessoa),
    FOREIGN KEY (idFuncionario_supervisionado) REFERENCES Funcionario(idPessoa)
);

CREATE TABLE Quarto (
    idQuarto INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10),
    tipo VARCHAR(20),
    capacidade INT,
    valorDiaria DECIMAL(10,2),
    status VARCHAR(20) NOT NULL DEFAULT 'livre'
);

CREATE TABLE Manutencao (
    id_manutencao INT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    tipo_servico VARCHAR(50),
    descricao TEXT,
    custo DECIMAL(10,2)
);

CREATE TABLE Executa (
    idFuncionario INT,
    idManutencao INT,
    idQuarto INT,
    PRIMARY KEY (idFuncionario, idManutencao, idQuarto),
    FOREIGN KEY (idFuncionario) REFERENCES Funcionario(idPessoa),
    FOREIGN KEY (idManutencao) REFERENCES Manutencao(id_manutencao),
    FOREIGN KEY (idQuarto) REFERENCES Quarto(idQuarto)
);

CREATE TABLE Pagamento (
idPagamento INT AUTO_INCREMENT PRIMARY KEY,
forma VARCHAR(20),
valor DECIMAL(10,2),
data DATE,
status VARCHAR(20)
);

CREATE TABLE Reserva (
    idReserva INT AUTO_INCREMENT PRIMARY KEY,
    dataEntrada DATE,
    dataSaida DATE,
    qtdPessoas INT,
    idHospede INT,
    idPagamento INT,
    idQuarto INT,
    FOREIGN KEY (idHospede) REFERENCES Hospede(idPessoa),
    FOREIGN KEY (idPagamento) REFERENCES Pagamento(idPagamento),
    FOREIGN KEY (idQuarto) REFERENCES Quarto(idQuarto)
);

CREATE TABLE Avaliacao (
    idAvaliacao INT PRIMARY KEY,
    comentario TEXT,
    nota INT,
    idReserva INT,
    FOREIGN KEY (idReserva) REFERENCES Reserva(idReserva)
);

CREATE TABLE Servico (
    idServico INT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    valor DECIMAL(10,2)
);

CREATE TABLE Possui (
    idServico INT,
    idReserva INT,
    PRIMARY KEY (idServico, idReserva),
    FOREIGN KEY (idServico) REFERENCES Servico(idServico),
    FOREIGN KEY (idReserva) REFERENCES Reserva(idReserva)
);
