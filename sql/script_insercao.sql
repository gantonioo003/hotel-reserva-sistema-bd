USE Hotel;

-- Inserções para a tabela PESSOA
INSERT INTO pessoa (idPessoa, nome, cpf, dataNascimento, endereco) VALUES
(1, 'João Silva', '12345678901', '1985-04-12', 'Rua das Flores, 123'),
(2, 'Maria Oliveira', '98765432100', '1990-08-20', 'Av. Central, 456'),
(3, 'Carlos Souza', '45678912300', '1978-11-03', 'Rua do Sol, 789');

-- Telefones (multivalorados)
INSERT INTO telefone (telefone_PK, telefone, idPessoa) VALUES
(1, '81999990000', 1),
(2, '81988881111', 1),
(3, '81977772222', 2);

-- HÓSPEDE
INSERT INTO hospede (idPessoa) VALUES (1), (2);

-- FUNCIONÁRIO
INSERT INTO funcionario  (idPessoa) VALUES (3);

-- QUARTO
INSERT INTO quarto (idQuarto, numero, tipo, capacidade, valorDiaria, status) VALUES
(1, 101, 'simples', 1, 120.00, 'livre'),
(2, 102, 'duplo', 2, 180.00, 'reservado');

-- PAGAMENTO
INSERT INTO pagamento (idPagamento, forma, valor, data, status) VALUES
(1, 'cartão', 300.00, '2025-05-20', 'pago');

-- RESERVA
INSERT INTO reserva (idReserva, dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto) VALUES
(1, '2025-06-01', '2025-06-05', 2, 1, 1, 2);

-- SERVIÇO
INSERT INTO servico (idServico, nome, descricao, valor) VALUES
(1, 'Café da manhã', 'Buffet completo das 7h às 10h', 30.00),
(2, 'Translado', 'Transporte aeroporto-hotel', 50.00);

-- POSSUI
INSERT INTO possui (idServico, idReserva) VALUES
(1, 1),
(2, 1);

-- AVALIAÇÃO
INSERT INTO avaliacao (idAvaliacao, comentario, nota, idReserva) VALUES
(1, 'Muito bom atendimento.', 5, 1);

-- MANUTENÇÃO
INSERT INTO manutencao (id_manutencao, data, tipo_servico, descricao, custo) VALUES
(1, '2025-05-10', 'elétrica', 'Troca de lâmpadas', 100.00);

-- EXECUTA
INSERT INTO executa (idFuncionario, idManutencao, idQuarto) VALUES
(3, 1, 1);

-- SUPERVISIONA (auto-relacionamento)
INSERT INTO supervisiona (idFuncionario_supervisor, idFuncionario_supervisionado) VALUES
(3, 3);
