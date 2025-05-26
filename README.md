# Sistema de Reserva de Hotéis – Projeto de Banco de Dados

Este repositório apresenta o desenvolvimento completo de um sistema de Reserva de Hotéis, elaborado como projeto final da disciplina de Projeto e Modelagem de Banco de Dados da professora Gabrielle K. Canalle.

---

## 🌐 Visão Geral

O sistema simula as operações de um hotel, permitindo o gerenciamento completo de:

* Hóspedes, Funcionários e seus relacionamentos
* Quartos, Reservas, Pagamentos
* Manutenções e Execuções de serviços
* Avaliações dos hóspedes
* Serviços adicionais

---

## 🛠️ Tecnologias Utilizadas

* Backend: Java 17 + Spring Boot 3
* Frontend: React + Vite (JavaScript)
* Banco de Dados: MySQL
* ORM: Spring Data JPA (Hibernate)
* Gerenciador de dependências: Maven
* IDEs: IntelliJ (backend) e VS Code (frontend)

---

## 🚀 Como Rodar o Projeto

1. Inicie o banco de dados MySQL

Abra o MySQL Workbench ou terminal:

```sql
mysql -u root -p
-- digite sua senha

CREATE DATABASE hotel;
USE hotel;

source ./sql/script_criacao.sql;
source ./sql/script_insercao.sql;
```

2. Inicie o backend (Spring Boot)

Abra um terminal e navegue até a pasta backend:

```bash
cd backend
./mvnw spring-boot:run
```

3. Inicie o frontend (React + Vite)

Abra outro terminal:

```bash
cd frontend
npm install
npm run dev
```

4. Acesse no navegador:

[http://localhost:5173](http://localhost:5173)

---

## 🧱 Estrutura do Projeto

hotel-reserva-sistema-bd/
├── backend/
│   ├── src/
│   │   └── main/java/com/hotel/reserva/
│   │       ├── controller/
│   │       ├── model/
│   │       ├── repository/
│   │       └── ReservaApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── sql/
│   ├── script\_criacao.sql
│   └── script\_insercao.sql
└── docs/
├── mini\_mundo.md
├── modelo\_conceitual.png
└── modelo\_logico.md

---

## ✅ Funcionalidades Implementadas (CRUDs)

* Pessoa
* Telefone (relacionada a Pessoa)
* Hospede (herança de Pessoa)
* Funcionario (herança de Pessoa)
* Quarto
* Manutencao
* Executa (ligação entre Funcionario, Quarto e Manutencao)
* Pagamento
* Reserva (relacionada a Quarto, Hospede e Pagamento)
* Avaliacao (ligada à Reserva)
* Servico
* Possui (reserva possui serviços)
* Supervisiona (auto-relacionamento entre Funcionários)

---

## 🔁 Exemplos de Endpoints (Pessoa)

GET     /api/pessoas
POST    /api/pessoas
PUT     /api/pessoas/{id}
DELETE  /api/pessoas/{id}

Exemplo de JSON:

```json
{
  "idPessoa": 1,
  "nome": "João da Silva",
  "cpf": "12345678900",
  "dataNascimento": "1990-05-15",
  "endereco": "Av. Principal, 123"
}
```

---

## 👨‍💻 Autores

* Gabriel Antonio
* Gustavo Laporte
* Matheos Guerra
* Pedro Dhalia

Projeto acadêmico – 2025

