USE hotel;

-- Tabela Pessoa
INSERT INTO Pessoa (nome, cpf, data_nascimento, rua, numero, cidade, estado, cep)
VALUES 
('João Silva', '12345678900', '1990-05-10', 'Rua A', '100', 'Rio de Janeiro', 'RJ', '20000000'),
('Ana Souza', '98765432100', '1985-03-22', 'Rua B', '200', 'São Paulo', 'SP', '01000000');

-- Telefones
INSERT INTO Telefone (id_pessoa, numero) VALUES 
(1, '(21)91234-5678'),
(1, '(21)97654-3210'),
(2, '(11)99876-1234');

-- Hóspede e Funcionário
INSERT INTO Hospede (id_pessoa) VALUES (1);
INSERT INTO Funcionario (id_pessoa, supervisor_id) VALUES (2, NULL);

-- Quartos
INSERT INTO Quarto (numero, tipo, capacidade, valor_diaria, status)
VALUES 
('101', 'simples', 1, 150.00, 'livre'),
('102', 'suíte', 2, 300.00, 'livre');

-- Reserva
INSERT INTO Reserva (id_hospede, data_entrada, data_saida, qtd_hospedes)
VALUES (1, '2024-04-01', '2024-04-05', 1);

-- Reserva_Quarto
INSERT INTO Reserva_Quarto (id_reserva, id_quarto)
VALUES (1, 1);

-- Serviços
INSERT INTO Servico (nome, descricao, preco)
VALUES ('Café da manhã', 'Buffet completo', 30.00);

-- Reserva_Servico
INSERT INTO Reserva_Servico (id_reserva, id_servico)
VALUES (1, 1);

-- Pagamento
INSERT INTO Pagamento (id_reserva, valor_total, data_pagamento, forma_pagamento, status_pagamento)
VALUES (1, 600.00, '2024-04-01', 'cartao', 'pago');

-- Avaliação
INSERT INTO Avaliacao (id_reserva, nota, comentario)
VALUES (1, 5, 'Muito bom!');

-- Manutenção
INSERT INTO Manutencao (id_quarto, id_funcionario, descricao, data, custo, status)
VALUES (1, 2, 'Troca de lâmpada', '2024-03-30', 20.00, 'concluída');