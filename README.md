# Sistema de Reserva de Hotéis – Projeto de Banco de Dados

Este repositório contém o desenvolvimento completo do projeto de banco de dados para um *Sistema de Reserva de Hotéis, elaborado para a disciplina de **Projeto e Modelagem de BD* da professora Gabrielle K. Canalle.

---

## Objetivo do Projeto

Desenvolver um sistema de banco de dados relacional completo que gerencie:

- Hóspedes
- Funcionários
- Quartos
- Reservas
- Pagamentos
- Serviços adicionais
- Manutenções
- Avaliações

Incluindo modelagem conceitual, lógica, scripts SQL e uma interface funcional em Java.

---

## Tecnologias utilizadas

- *Sistema Gerenciador de Banco de Dados (SGBD):* MySQL
- *Ferramenta de interface com o banco:* DBeaver
- *Linguagem de programação:* Java (com JDBC puro)
- *Ferramenta de modelagem conceitual:* BRModelo

---

## Estrutura do Projeto

*Diretório raiz: hotel-reserva-sistema-bd/*

- docs/  
  - mini_mundo.md – Descrição do mini mundo  
  - modelo_conceitual.png – Modelo conceitual (MER)  
  - modelo_logico.md – Modelo lógico relacional

- sql/  
  - script_criacao.sql – Script de criação das tabelas (MySQL)  
  - script_insercao.sql – Script de inserção de dados fictícios

- interface_java/  
  - Arquivos da interface CRUD feita em Java (com JDBC puro)

- relatorios/  
  - relatorio_v1.pdf – Relatório da primeira etapa do projeto

- README.md – Este arquivo com instruções do projeto

## Módulo 1 – Entregas

- [x] Mini mundo
- [x] Modelo conceitual (feito no BRModelo)
- [x] Modelo lógico relacional (feito no BRModelo)
- [x] Script de criação do banco (MySQL)
- [x] Script de inserção de dados fictícios
- [ ] CRUD funcional em Java (sem uso de frameworks/ORM)
- [ ] Relatório versão 1.0

---

## Observações

- Nenhum tipo de framework ORM (como Hibernate, JPA, Django ORM etc.) foi utilizado, conforme exigido pela disciplina.
- Todos os comandos SQL foram escritos manualmente, com uso de *constraints como PK, FK, CHECK e UNIQUE*.

---

## Autores

- Gabriel Antonio, Gustavo Laporte, Matheos Guerra, Pedro Dhalia.
- Projeto acadêmico – 2025
