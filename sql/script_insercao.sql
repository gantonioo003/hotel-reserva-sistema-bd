USE Hotel;

INSERT INTO Pessoa (nome, cpf, data_nascimento, rua, numero, cidade, estado, cep, telefone1, telefone2)
VALUES 
('João Silva', '12345678901', '1985-04-20', 'Rua A', '123', 'Recife', 'PE', '50000000', '81999999999', NULL),
('Maria Souza', '98765432100', '1990-08-15', 'Av. B', '456', 'Olinda', 'PE', '53000000', '81988888888', NULL),
('Carlos Lima', '11122233344', '1982-12-05', 'Rua C', '789', 'Recife', 'PE', '51000000', '81977777777', NULL),
('Ana Pereira', '22233344455', '1995-11-30', 'Rua D', '101', 'Jaboatão', 'PE', '54000000', '81966666666', NULL),
('Lucas Menezes', '33344455566', '1979-03-11', 'Av. E', '202', 'Paulista', 'PE', '53400000', '81955555555', NULL),
('Fernanda Costa', '44455566677', '1988-07-25', 'Rua F', '303', 'Caruaru', 'PE', '55000000', '81944444444', NULL);


INSERT INTO Hospede (id_pessoa) VALUES (1), (4);


INSERT INTO Funcionario (id_pessoa, supervisor_id) VALUES (2, NULL), (3, 2), (5, NULL), (6, 5);


INSERT INTO Quarto (numero, tipo, capacidade, valor_diaria, status)
VALUES 
('101', 'simples', 1, 150.00, 'livre'),
('102', 'duplo', 2, 250.00, 'ocupado'),
('201', 'suíte', 3, 400.00, 'reservado'),
('202', 'simples', 1, 140.00, 'livre'),
('203', 'duplo', 2, 260.00, 'livre'),
('301', 'suíte', 4, 500.00, 'ocupado');


INSERT INTO Servico (nome, descricao, preco)
VALUES 
('Café da manhã', 'Buffet completo servido no salão principal', 30.00),
('Lavanderia', 'Serviço de lavagem e passagem de roupas', 50.00),
('Translado', 'Transporte do aeroporto ao hotel', 100.00),
('Spa', 'Sessão de relaxamento e massagem', 150.00),
('Room Service', 'Entrega de alimentos e bebidas no quarto', 40.00);

INSERT INTO Reserva (id_hospede, data_entrada, data_saida, qtd_hospedes, quartos, servicos)
VALUES 
(1, '2025-04-25', '2025-04-30', 2, '102,201', '1,3'),
(4, '2025-05-05', '2025-05-10', 1, '202', '2,4'),
(1, '2025-06-01', '2025-06-07', 3, '203,301', '1,5');


INSERT INTO Pagamento (id_reserva, valor_total, data_pagamento, forma_pagamento, status_pagamento)
VALUES 
(1, 1150.00, '2025-04-22', 'pix', 'pago'),
(2, 650.00, '2025-05-01', 'cartao', 'pago'),
(3, 1800.00, NULL, 'dinheiro', 'pendente');


INSERT INTO Avaliacao (id_reserva, nota, comentario)
VALUES 
(1, 4, 'Atendimento excelente, mas o ar-condicionado estava com defeito.'),
(2, 5, 'Muito confortável e serviço excelente!'),
(3, 3, 'Hotel bom, mas houve atraso no room service.');


INSERT INTO Manutencao (id_quarto, id_funcionario, descricao, data, custo, status)
VALUES 
('102', 3, 'Reparo no ar-condicionado', '2025-04-21', 200.00, 'concluída'),
('301', 6, 'Troca do chuveiro e revisão elétrica', '2025-04-28', 320.00, 'pendente'),
('202', 5, 'Verificação do ar-condicionado e limpeza do filtro', '2025-04-20', 80.00, 'concluída');
