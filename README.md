# Sistema de Reserva de Hotéis – Projeto de Banco de Dados

Este repositório contém o desenvolvimento completo do projeto de banco de dados para um *Sistema de Reserva de Hotéis*, elaborado para a disciplina de **Projeto e Modelagem de BD** da professora Gabrielle K. Canalle.

---

## Objetivo do Projeto

O **Sistema de Reserva de Hotéis** tem como objetivo o desenvolvimento de uma solução de banco de dados relacional para gerenciar as operações de um hotel, incluindo:

- **Hóspedes**: Cadastro de hóspedes com dados pessoais (nome, CPF, data de nascimento, endereço e múltiplos telefones).
- **Funcionários**: Cadastro de funcionários, com possibilidade de supervisão entre eles.
- **Quartos**: Cadastro de quartos com informações sobre número, tipo, capacidade, valor da diária e status.
- **Reservas**: Gestão de reservas realizadas por hóspedes, incluindo datas de entrada e saída, número de hóspedes e quartos reservados.
- **Pagamentos**: Registro de pagamentos por reserva, com informações sobre valor pago e forma de pagamento.
- **Serviços Adicionais**: Cadastro de serviços adicionais oferecidos aos hóspedes (como café da manhã, lavanderia, transporte).
- **Manutenções**: Registro de manutenções realizadas nos quartos, com informações sobre data, custo e status.
- **Avaliações**: Possibilidade de avaliações feitas pelos hóspedes, vinculadas a reservas.

Este sistema foi projetado para ser uma aplicação de banco de dados relacional robusta, com funcionalidades de cadastro, consulta, e atualização de dados, que possibilita uma gestão eficaz dos processos de um hotel.

---

## Tecnologias utilizadas

- **Sistema Gerenciador de Banco de Dados (SGBD):** MySQL
- **Ferramenta de interface com o banco:** DBeaver
- **Linguagem de programação:** Java (com JDBC puro)
- **Ferramenta de modelagem conceitual:** BRModelo

---

## Estrutura do Projeto

A estrutura do repositório é organizada da seguinte maneira:

*Diretório raiz: hotel-reserva-sistema-bd/*

- **docs/**
  - `mini_mundo.md` – Descrição detalhada do mini mundo.
  - `modelo_conceitual.png` – Modelo conceitual do sistema (MER).
  - `modelo_logico.md` – Modelo lógico relacional do banco de dados.
  
- **sql/**
  - `script_criacao.sql` – Script de criação das tabelas do banco de dados (MySQL).
  - `script_insercao.sql` – Script de inserção de dados fictícios para testes.

- **interface_java/**
  - Arquivos do CRUD funcional feito em Java utilizando JDBC puro para interagir com o banco de dados.

- **relatorios/**
  - `relatorio_v1.pdf` – Relatório da primeira etapa do projeto.

- **README.md** – Este arquivo com as instruções do projeto.

---

## Módulo 1 – Entregas

- [x] **Mini Mundo**: Descrição do sistema e suas entidades.
- [x] **Modelo Conceitual**: Diagrama Entidade-Relacionamento (MER) feito no BRModelo.
- [x] **Modelo Lógico Relacional**: Mapeamento do modelo conceitual para o modelo lógico, com definição das tabelas e relacionamentos.
- [x] **Script de Criação do Banco (MySQL)**: Scripts SQL para a criação das tabelas do banco.
- [x] **Script de Inserção de Dados Fictícios**: Scripts SQL para inserir dados fictícios no banco de dados.
- [x] **CRUD Funcional em Java**: Implementação do CRUD utilizando JDBC puro para manipulação das informações no banco de dados (sem uso de frameworks ORM).
- [x] **Relatório Versão 1.0**: Relatório da primeira etapa do projeto, detalhando a modelagem e as decisões tomadas.

---

## Relatório de Etapas

### Relatório Versão 1.0

O relatório apresentado nesta etapa do projeto descreve a modelagem do sistema de banco de dados, os detalhes do mini mundo, o modelo conceitual (MER) e o modelo lógico relacional. O **mini mundo** é uma descrição detalhada do contexto do sistema, abordando as entidades principais e os relacionamentos entre elas.

Além disso, o modelo conceitual foi elaborado utilizando o **BRModelo**, com a criação do diagrama Entidade-Relacionamento (MER) que ilustra as entidades (Hóspede, Funcionário, Quarto, Reserva, Pagamento, Serviço, Manutenção, Avaliação) e seus relacionamentos.

No **modelo lógico relacional**, as entidades foram mapeadas para tabelas do banco de dados, com definição das chaves primárias (PK), chaves estrangeiras (FK), e restrições como **CHECK** e **UNIQUE**.

A fase de implementação inclui a criação de scripts SQL para:
- A criação das tabelas do banco de dados.
- A inserção de dados fictícios para simulação do funcionamento do sistema.

### Etapas Futuras

Nas próximas etapas do projeto, o desenvolvimento do CRUD funcional em **Java** será feito, permitindo que o sistema realize operações de inserção, consulta, atualização e exclusão de dados no banco de dados MySQL.

---

## Observações

- Nenhum tipo de **framework ORM** (como Hibernate, JPA, Django ORM etc.) foi utilizado, conforme exigido pela disciplina.
- Todos os comandos SQL foram escritos manualmente, utilizando **constraints** como **PK**, **FK**, **CHECK** e **UNIQUE** para garantir a integridade dos dados.
- A interface foi implementada utilizando **JDBC puro**, sem o uso de frameworks adicionais para acesso a banco de dados.

---

## Autores

- Gabriel Antonio
- Gustavo Laporte
- Matheos Guerra
- Pedro Dhalia

**Projeto acadêmico – 2025**
