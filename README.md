# Sistema de Reserva de Hotéis – Projeto de Banco de Dados

Este repositório apresenta o desenvolvimento completo de um sistema de **Reserva de Hotéis**, realizado como projeto final da disciplina de **Projeto e Modelagem de Banco de Dados** ministrada pela professora **Gabrielle K. Canalle**.

---

## 🌍 Visão Geral do Projeto

O objetivo do sistema é fornecer uma aplicação robusta de gerenciamento hoteleiro, permitindo o controle de reservas, pagamentos, manutenções, serviços, avaliações, relações funcionais e todos os processos que envolvem a hospedagem de clientes.

### 💡 Destaques:

* Modelagem conceitual (MER) e lógica relacional completa
* Scripts SQL de criação e população de dados
* CRUDs completos (inserção, leitura, atualização, exclusão) para **todas as tabelas**
* API backend em **Node.js + Express** com conexão a banco **MySQL** via **mysql2/promise**
* Testes automatizados com **Axios** em `test.js`

---

## 🚀 Tecnologias Utilizadas

* **Backend**: Node.js + Express
* **Banco de Dados**: MySQL
* **Conexão**: mysql2 (versão Promise)
* **Testes de API**: Axios via `test.js`
* **IDE**: VS Code

---

## 🔧 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/hotel-reserva-sistema-bd.git
cd hotel-reserva-sistema-bd/backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

* Certifique-se de que o MySQL está rodando
* Crie um banco chamado `hotel`
* Execute o script SQL de criação:

```sql
source ./sql/script_criacao.sql;
source ./sql/script_insercao.sql;
```

### 4. Inicie o servidor

```bash
node server.js
```

### 5. Teste a API

Execute:

```bash
node test.js
```

---

## 🏛️ Estrutura do Projeto

```
hotel-reserva-sistema-bd/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── test.js
│   ├── db.js
│   └── server.js
├── sql/
│   ├── script_criacao.sql
│   └── script_insercao.sql
├── docs/
│   ├── mini_mundo.md
│   ├── modelo_conceitual.png
│   └── modelo_logico.md
└── README.md
```

---

## 📄 Funcionalidades Implementadas (CRUD)

* [x] **Pessoa**
* [x] **Telefone** (relacionado a Pessoa)
* [x] **Hospede** (subtipo de Pessoa)
* [x] **Funcionario** (subtipo de Pessoa)
* [x] **Quarto**
* [x] **Manutencao**
* [x] **Executa** (ligando Funcionario + Manutencao + Quarto)
* [x] **Pagamento**
* [x] **Reserva** (ligando Quarto, Hospede, Pagamento)
* [x] **Avaliacao** (ligada a Reserva)
* [x] **Servico**
* [x] **Possui** (reserva possui serviços)
* [x] **Supervisiona** (funcionário supervisiona outro)

---

## 📅 Etapas do Projeto

| Etapa                     | Descrição                         | Status               |
| ------------------------- | --------------------------------- | -------------------- |
| Mini mundo                | Definição textual do sistema      | ✅ Concluído          |
| Modelo Conceitual         | MER via BRModelo                  | ✅ Concluído          |
| Modelo Lógico             | Conversão p/ tabelas relacionais  | ✅ Concluído          |
| Script SQL                | Criação e inserção de dados       | ✅ Concluído          |
| CRUD via Node.js          | API funcional com Express + MySQL | ✅ Concluído          |
| Testes via Axios          | Arquivo `test.js` com chamadas    | ✅ Concluído          |
| Interface Java (opcional) | CRUD com JDBC puro                | ⏳ Em desenvolvimento |

---

## 📈 Exemplo de Rota (Pessoa)

```http
GET /api/pessoas
POST /api/pessoas
PUT /api/pessoas/:id
DELETE /api/pessoas/:id
```

Exemplo de corpo (POST):

```json
{
  "idPessoa": 1,
  "nome": "João Silva",
  "cpf": "12345678901",
  "dataNascimento": "1990-01-01",
  "endereco": "Rua das Flores, 123"
}
```

---

## 👥 Autores

* **Gabriel Antonio**
* **Gustavo Laporte**
* **Matheos Guerra**
* **Pedro Dhalia**

Projeto acadêmico desenvolvido em 2025 ✨
