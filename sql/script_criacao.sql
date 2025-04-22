CREATE DATABASE IF NOT EXISTS Hotel;
USE Hotel;

CREATE TABLE Pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    rua VARCHAR(100),
    numero VARCHAR(10),
    cidade VARCHAR(50),
    estado CHAR(2),
    cep CHAR(8),
    telefone1 VARCHAR(255) NULL, 
    telefone2 VARCHAR(15)           
);

CREATE TABLE Hospede (
    id_pessoa INT PRIMARY KEY,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id)
);


CREATE TABLE Funcionario (
    id_pessoa INT PRIMARY KEY,
    supervisor_id INT,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id),
    FOREIGN KEY (supervisor_id) REFERENCES Funcionario(id_pessoa)
);


CREATE TABLE Quarto (
    numero VARCHAR(5) PRIMARY KEY,      
    tipo ENUM('simples', 'duplo', 'suíte'),  
    capacidade INT NOT NULL,             
    valor_diaria DECIMAL(10,2) NOT NULL, 
    status ENUM('livre', 'reservado', 'ocupado') NOT NULL 
);


CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_hospede INT,
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    qtd_hospedes INT NOT NULL,
    quartos TEXT,         
    servicos TEXT,        
    FOREIGN KEY (id_hospede) REFERENCES Hospede(id_pessoa)
);

CREATE TABLE Servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL
);


CREATE TABLE Pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    valor_total DECIMAL(10,2) NOT NULL,
    data_pagamento DATE,
    forma_pagamento ENUM('dinheiro', 'cartao', 'pix'),
    status_pagamento ENUM('pago', 'pendente'),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id)
);


CREATE TABLE Avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_reserva INT,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id)
);


CREATE TABLE Manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_quarto VARCHAR(5),
    id_funcionario INT,
    descricao TEXT NOT NULL,
    data DATE NOT NULL,
    custo DECIMAL(10,2),
    status ENUM('pendente', 'concluída'),
    FOREIGN KEY (id_quarto) REFERENCES Quarto(numero),
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_pessoa)
);
