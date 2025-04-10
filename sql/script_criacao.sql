USE hotel;

-- Tabela Pessoa
CREATE TABLE Pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    rua VARCHAR(100),
    numero VARCHAR(10),
    cidade VARCHAR(50),
    estado CHAR(2),
    cep CHAR(8)
);

-- Tabela Hospede
CREATE TABLE Hospede (
    id_pessoa INT PRIMARY KEY,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id)
);

-- Tabela Funcionario
CREATE TABLE Funcionario (
    id_pessoa INT PRIMARY KEY,
    supervisor_id INT,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id),
    FOREIGN KEY (supervisor_id) REFERENCES Funcionario(id_pessoa)
);

-- Tabela Telefone
CREATE TABLE Telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa INT,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id)
);

-- Tabela Quarto
CREATE TABLE Quarto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10) UNIQUE NOT NULL,
    tipo ENUM('simples', 'duplo', 'suíte'),
    capacidade INT NOT NULL,
    valor_diaria DECIMAL(10,2) NOT NULL,
    status ENUM('livre', 'reservado', 'ocupado') NOT NULL
);

-- Tabela Reserva
CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_hospede INT,
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    qtd_hospedes INT NOT NULL,
    FOREIGN KEY (id_hospede) REFERENCES Hospede(id_pessoa)
);

-- Tabela Reserva_Quarto
CREATE TABLE Reserva_Quarto (
    id_reserva INT,
    id_quarto INT,
    PRIMARY KEY (id_reserva, id_quarto),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id),
    FOREIGN KEY (id_quarto) REFERENCES Quarto(id)
);

-- Tabela Servico
CREATE TABLE Servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL
);

-- Tabela Reserva_Servico
CREATE TABLE Reserva_Servico (
    id_reserva INT,
    id_servico INT,
    PRIMARY KEY (id_reserva, id_servico),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id),
    FOREIGN KEY (id_servico) REFERENCES Servico(id)
);

-- Tabela Pagamento
CREATE TABLE Pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    valor_total DECIMAL(10,2) NOT NULL,
    data_pagamento DATE,
    forma_pagamento ENUM('dinheiro', 'cartao', 'pix'),
    status_pagamento ENUM('pago', 'pendente'),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id)
);

-- Tabela Avaliacao
CREATE TABLE Avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id)
);

-- Tabela Manutencao
CREATE TABLE Manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_quarto INT,
    id_funcionario INT,
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    custo DECIMAL(10,2),
    status ENUM('pendente', 'concluída'),
    FOREIGN KEY (id_quarto) REFERENCES Quarto(id),
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_pessoa)
);