USE Hotel;

-- 1. Listar todas as reservas com dados do hóspede, quarto e valor pago
SELECT 
    r.idReserva,
    p.nome AS hospede,
    q.numero AS quarto,
    q.tipo,
    r.dataEntrada,
    r.dataSaida,
    pag.valor AS valorPago
FROM reserva r
JOIN hospede h ON r.idHospede = h.idPessoa
JOIN pessoa p ON h.idPessoa = p.idPessoa
JOIN quarto q ON r.idQuarto = q.idQuarto
JOIN pagamento pag ON r.idPagamento = pag.idPagamento;

-- 2. Reservas com mais de 2 pessoas
SELECT
  r.idReserva,
  p.nome AS hospede,
  r.qtdPessoas,
  r.dataEntrada,
  r.dataSaida
FROM reserva r
JOIN hospede h ON r.idHospede = h.idPessoa
JOIN pessoa p ON h.idPessoa = p.idPessoa
WHERE r.qtdPessoas > 2;

-- 3. Média das avaliações por tipo de quarto
SELECT 
    q.tipo,
    AVG(a.nota) AS media_avaliacao
FROM avaliacao a
JOIN reserva r ON a.idReserva = r.idReserva
JOIN quarto q ON r.idQuarto = q.idQuarto
GROUP BY q.tipo;

-- 4. Manutenções realizadas com nome do funcionário e número do quarto
SELECT
  m.id_manutencao,
  m.tipo_servico,
  m.data,
  m.descricao,
  p.nome AS funcionario_responsavel,
  q.numero AS quarto
FROM manutencao m
JOIN executa e ON m.id_manutencao = e.idManutencao
JOIN funcionario f ON e.idFuncionario = f.idPessoa
JOIN pessoa p ON f.idPessoa = p.idPessoa
JOIN quarto q ON e.idQuarto = q.idQuarto;

-- 5. Reservas que utilizaram serviços adicionais e quais serviços
SELECT 
    r.idReserva,
    p.nome AS hospede,
    s.nome AS servico
FROM reserva r
JOIN hospede h ON r.idHospede = h.idPessoa
JOIN pessoa p ON h.idPessoa = p.idPessoa
JOIN possui po ON r.idReserva = po.idReserva
JOIN servico s ON po.idServico = s.idServico;

-- 6. Quais quartos estão atualmente com status 'reservado'
SELECT 
    q.numero,
    q.tipo,
    q.status
FROM quarto q
WHERE q.status = 'reservado';

-- 7. Pagamentos realizados por data
SELECT 
    data,
    COUNT(*) AS total_pagamentos,
    SUM(valor) AS total_arrecadado
FROM pagamento
GROUP BY data
ORDER BY data DESC;

-- 8. Hospedes com suas últimas reservas
SELECT 
    p.nome,
    MAX(r.dataEntrada) AS ultima_entrada
FROM pessoa p
JOIN hospede h ON p.idPessoa = h.idPessoa
JOIN reserva r ON r.idHospede = h.idPessoa
GROUP BY p.nome;
