# Sistema de Reserva de Hotéis – Projeto de Banco de Dados

Este repositório apresenta o desenvolvimento completo de um sistema de **Reserva de Hotéis**, desenvolvido como projeto final da disciplina de **Projeto e Modelagem de Banco de Dados**, ministrada pela professora **Gabrielle K. Canalle**.

---

## 🌍 Visão Geral

O objetivo do sistema é permitir o gerenciamento completo de um hotel, incluindo o controle de hóspedes, funcionários, reservas, quartos, manutenções, pagamentos, avaliações e serviços adicionais.

### 💡 Destaques:

* Modelagem conceitual (MER), lógica relacional e scripts SQL completos
* Backend moderno utilizando **Java + Spring Boot**
* Frontend com **React** em JavaScript
* Integração total com banco de dados **MySQL**
* CRUD completo para todas as tabelas do modelo
* Projeto dividido em camadas (model, controller, repository, etc.)
* Estrutura pronta para testes e expansão futura

---

## 🚀 Tecnologias Utilizadas

* **Backend**: Java 17 + Spring Boot 3
* **Frontend**: React + Vite (JavaScript)
* **Banco de Dados**: MySQL
* **ORM**: Spring Data JPA (Hibernate)
* **IDE recomendadas**: IntelliJ IDEA, VS Code

---

## 🔧 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/hotel-reserva-sistema-bd.git
cd hotel-reserva-sistema-bd/backend
```

### 2. Configure o banco de dados MySQL

* Crie um banco chamado hotel
* Execute os scripts:

```sql
source ./sql/script_criacao.sql;
source ./sql/script_insercao.sql;
```

### 3. Configure o `application.properties`

Exemplo:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/hotel
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
```

### 4. Inicie o backend (Spring Boot)

```bash
./mvnw spring-boot:run
```

O backend estará disponível em: [http://localhost:8080](http://localhost:8080)

---

## 📦 Estrutura do Projeto

```
hotel-reserva-sistema-bd/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/hotel/reserva/
│   │       │   ├── controller/
│   │       │   ├── model/
│   │       │   ├── repository/
│   │       │   └── ReservaApplication.java
│   │       └── resources/
│   │           └── application.properties
├── sql/
│   ├── script_criacao.sql
│   └── script_insercao.sql
└── frontend/ (em breve)
```

---

## 📄 Funcionalidades (CRUDs)

✔️ Implementadas com Spring Boot:

* Pessoa
* Telefone (relacionada a Pessoa)
* Hospede (herda Pessoa)
* Funcionario (herda Pessoa)
* Quarto
* Manutencao
* Executa (relaciona Funcionario, Manutencao, Quarto)
* Pagamento
* Reserva (relaciona Hospede, Quarto, Pagamento)
* Avaliacao (ligada à Reserva)
* Servico
* Possui (Reserva possui Serviços)
* Supervisiona (auto-relacionamento de Funcionario)

---

## 📅 Etapas do Projeto

| Etapa                     | Descrição                    | Status     |
| ------------------------- | ---------------------------- | ---------- |
| Mini mundo                | Definição textual do sistema | ✅ Feito    |
| Modelo Conceitual         | MER via BRModelo             | ✅ Feito    |
| Modelo Lógico             | Tabelas relacionais          | ✅ Feito    |
| Scripts SQL               | Criação e inserção de dados  | ✅ Feito    |
| CRUDs Backend Spring Boot | APIs REST com Java           | ✅ Feito    |
| Frontend React            | Interface para interação     | ⏳ Em breve |

---

## 📱 Exemplos de Endpoints

```http
GET    /api/pessoas
POST   /api/pessoas
PUT    /api/pessoas/{id}
DELETE /api/pessoas/{id}
```

Exemplo de JSON:

```json
{
  "idPessoa": 1,
  "nome": "Maria Oliveira",
  "cpf": "12345678900",
  "dataNascimento": "1995-08-15",
  "endereco": "Rua das Flores, 123"
}
```

---

## 👥 Autores

* Gabriel Antonio
* Gustavo Laporte
* Matheos Guerra
* Pedro Dhalia

🧠 Projeto acadêmico – 2025


