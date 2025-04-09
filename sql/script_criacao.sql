CREATE TABLE Pessoa (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    rua VARCHAR(100),
    numero VARCHAR(10),
    cidade VARCHAR(50),
    estado VARCHAR(2),
    cep CHAR(8)
);

CREATE TABLE Hospede (
    id_pessoa INTEGER PRIMARY KEY REFERENCES Pessoa(id)
);

CREATE TABLE Funcionario (
    id_pessoa INTEGER PRIMARY KEY REFERENCES Pessoa(id),
    supervisor_id INTEGER REFERENCES Funcionario(id_pessoa)
);

CREATE TABLE Telefone (
    id SERIAL PRIMARY KEY,
    id_pessoa INTEGER REFERENCES Pessoa(id),
    numero VARCHAR(15) NOT NULL
);

CREATE TABLE Quarto (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(10) UNIQUE NOT NULL,
    tipo VARCHAR(20) CHECK (tipo IN ('simples', 'duplo', 'suíte')),
    capacidade INTEGER NOT NULL,
    valor_diaria DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('livre', 'reservado', 'ocupado')) NOT NULL
);

CREATE TABLE Reserva (
    id SERIAL PRIMARY KEY,
    id_hospede INTEGER REFERENCES Hospede(id_pessoa),
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    qtd_hospedes INTEGER NOT NULL
);

CREATE TABLE Reserva_Quarto (
    id_reserva INTEGER REFERENCES Reserva(id),
    id_quarto INTEGER REFERENCES Quarto(id),
    PRIMARY KEY (id_reserva, id_quarto)
);

CREATE TABLE Servico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE Reserva_Servico (
    id_reserva INTEGER REFERENCES Reserva(id),
    id_servico INTEGER REFERENCES Servico(id),
    PRIMARY KEY (id_reserva, id_servico)
);

CREATE TABLE Pagamento (
    id SERIAL PRIMARY KEY,
    id_reserva INTEGER REFERENCES Reserva(id),
    valor_total DECIMAL(10,2) NOT NULL,
    data_pagamento DATE,
    forma_pagamento VARCHAR(20) CHECK (forma_pagamento IN ('dinheiro', 'cartao', 'pix')),
    status_pagamento VARCHAR(20) CHECK (status_pagamento IN ('pago', 'pendente'))
);

CREATE TABLE Avaliacao (
    id SERIAL PRIMARY KEY,
    id_reserva INTEGER REFERENCES Reserva(id),
    nota INTEGER CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT
);

CREATE TABLE Manutencao (
    id SERIAL PRIMARY KEY,
    id_quarto INTEGER REFERENCES Quarto(id),
    id_funcionario INTEGER REFERENCES Funcionario(id_pessoa),
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    custo DECIMAL(10,2),
    status VARCHAR(20) CHECK (status IN ('pendente', 'concluída'))
);