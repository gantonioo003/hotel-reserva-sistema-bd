USE Hotel;

-- PESSOAS
INSERT INTO pessoa (idPessoa, nome, cpf, dataNascimento, endereco) VALUES
(1, 'João Silva', '11111111111', '1985-04-12', 'Rua das Flores, 123'),
(2, 'Maria Oliveira', '22222222222', '1990-08-20', 'Av. Central, 456'),
(3, 'Carlos Souza', '33333333333', '1978-11-03', 'Rua do Sol, 789'),
(4, 'Ana Lima', '44444444444', '1995-02-14', 'Travessa Verde, 321'),
(5, 'Paulo Mendes', '55555555555', '1980-07-23', 'Rua Azul, 654'),
(6, 'Juliana Castro', '66666666666', '1988-10-09', 'Rua Amarela, 231'),
(7, 'Marcos Tavares', '77777777777', '1975-03-01', 'Av. Oceano, 100'),
(8, 'Fernanda Nunes', '88888888888', '1992-12-31', 'Rua das Palmeiras, 80'),
(9, 'Bruno Martins', '99999999999', '1986-05-19', 'Alameda Verde, 432'),
(10, 'Lucas Fernandes', '10101010101', '1993-06-15', 'Rua da Serra, 21'),
(11, 'Gabriela Lima', '12121212121', '1991-09-12', 'Av. Brasil, 900'),
(12, 'Thiago Rocha', '13131313131', '1984-01-22', 'Rua Horizonte, 77'),
(13, 'Renata Campos', '14141414141', '1989-11-11', 'Rua das Acácias, 88'),
(14, 'Eduardo Reis', '15151515151', '1997-04-05', 'Av. Maracanã, 101'),
(15, 'Camila Duarte', '16161616161', '1996-07-29', 'Rua do Limoeiro, 10');

-- TELEFONES
INSERT INTO telefone (telefone_PK, telefone, idPessoa) VALUES
(1, '81999990000', 1),
(2, '81988881111', 1),
(3, '81977772222', 2),
(4, '81966663333', 4),
(5, '81955554444', 5),
(6, '81944445555', 6),
(7, '81933332222', 7),
(8, '81922221111', 8),
(9, '81911112222', 9);

-- HÓSPEDES
INSERT INTO hospede (idPessoa) VALUES (1), (2), (4), (5), (6), (8), (10), (12);

-- FUNCIONÁRIOS
INSERT INTO funcionario (idPessoa) VALUES (3), (7), (9), (11), (13), (14), (15);

-- SUPERVISIONA
INSERT INTO supervisiona (idFuncionario_supervisor, idFuncionario_supervisionado) VALUES
(3, 7),
(3, 9),
(9, 11),
(13, 14),
(13, 15);

-- QUARTOS
INSERT INTO quarto (idQuarto, numero, tipo, capacidade, valorDiaria, status) VALUES
(1, '101', 'simples', 1, 120.00, 'livre'),
(2, '102', 'duplo', 2, 180.00, 'reservado'),
(3, '103', 'casal', 2, 200.00, 'livre'),
(4, '201', 'luxo', 3, 350.00, 'livre'),
(5, '202', 'simples', 1, 130.00, 'reservado');

-- PAGAMENTOS
INSERT INTO pagamento (idPagamento, forma, valor, data, status) VALUES
(1, 'cartão', 300.00, '2025-05-20', 'pago'),
(2, 'pix', 500.00, '2025-05-21', 'pendente'),
(3, 'dinheiro', 150.00, '2025-05-22', 'pago'),
(4, 'cartão', 400.00, '2025-05-23', 'pago'),
(5, 'pix', 200.00, '2025-05-24', 'pago');

-- RESERVAS
INSERT INTO reserva (idReserva, dataEntrada, dataSaida, qtdPessoas, idHospede, idPagamento, idQuarto) VALUES
(1, '2025-06-01', '2025-06-05', 2, 1, 1, 2),
(2, '2025-06-10', '2025-06-15', 1, 2, 2, 5),
(3, '2025-06-20', '2025-06-25', 1, 4, 3, 1),
(4, '2025-06-05', '2025-06-09', 2, 5, 4, 3),
(5, '2025-07-01', '2025-07-10', 3, 6, 5, 4);

-- SERVIÇOS
INSERT INTO servico (idServico, nome, descricao, valor) VALUES
(1, 'Café da manhã', 'Buffet completo das 7h às 10h', 30.00),
(2, 'Translado', 'Transporte aeroporto-hotel', 50.00),
(3, 'Lavanderia', 'Serviço de lavagem de roupas', 25.00),
(4, 'Spa', 'Massagem relaxante de 1 hora', 100.00);

-- POSSUI
INSERT INTO possui (idServico, idReserva) VALUES
(1, 1),
(2, 1),
(3, 2),
(1, 3),
(4, 5);

-- AVALIAÇÕES
INSERT INTO avaliacao (idAvaliacao, comentario, nota, idReserva) VALUES
(1, 'Muito bom atendimento.', 5, 1),
(2, 'Quarto limpo e confortável.', 4, 3),
(3, 'Poderia melhorar o café.', 3, 2),
(4, 'Ótimo custo-benefício.', 5, 5);

-- MANUTENÇÃO
INSERT INTO manutencao (id_manutencao, data, tipo_servico, descricao, custo) VALUES
(1, '2025-05-10', 'elétrica', 'Troca de lâmpadas', 100.00),
(2, '2025-05-12', 'limpeza', 'Limpeza profunda do quarto 201', 80.00),
(3, '2025-05-15', 'hidráulica', 'Reparo no chuveiro do quarto 102', 120.00);

-- EXECUTA
INSERT INTO executa (idFuncionario, idManutencao, idQuarto) VALUES
(3, 1, 1),
(7, 2, 4),
(9, 3, 2);
