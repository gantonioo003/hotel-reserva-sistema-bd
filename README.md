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
- [ ] **CRUD Funcional em Java**: Implementação do CRUD utilizando JDBC puro para manipulação das informações no banco de dados (sem uso de frameworks ORM).
- [ ] **Relatório Versão 1.0**: Relatório da primeira etapa do projeto, detalhando a modelagem e as decisões tomadas.

---

## Relatório de Etapas

### Relatório Versão 1.0

O relatório apresentado nesta etapa do projeto descreve a modelagem do sistema de banco de dados, os detalhes do mini mundo, o modelo conceitual (MER) e o modelo lógico relacional. O **mini mundo** é uma descrição detalhada do contexto do sistema, abordando as entidades principais e os relacionamentos entre elas.

Além disso, o modelo conceitual foi elaborado utilizando o **BRModelo**, com a criação do diagrama Entidade-Relacionamento (MER) que ilustra as entidades (Hóspede, Funcionário, Quarto, Reserva, Pagamento, Serviço, Manutenção, Avaliação) e seus relacionamentos.

No **modelo lógico relacional**, as entidades foram mapeadas para tabelas do banco de dados, com definição das chaves primárias (PK), chaves estrangeiras (FK), e restrições como **CHECK** e **UNIQUE**.

A fase de implementação inclui a criação de scripts SQL para:
- A criação das tabelas do banco de dados.
- A inserção de dados fictícios para simulação do funcionamento do sistema.

---

## Etapas Futuras

Nas próximas etapas do projeto, o desenvolvimento do CRUD funcional em **Java** será feito, permitindo que o sistema realize operações de inserção, consulta, atualização e exclusão de dados no banco de dados MySQL.

---

## Como Executar o Projeto

### Pré-requisitos:

- Java JDK instalado.
- MySQL Server instalado e configurado.
- DBeaver (ou outro cliente de banco de dados).
- IDE Java (como IntelliJ, Eclipse ou NetBeans).

### Passo a passo:

1. **Criar o Banco de Dados no MySQL**  
   - Utilize o script `script_criacao.sql` localizado na pasta `sql/` para criar as tabelas.
   - Em seguida, execute o script `script_insercao.sql` para popular as tabelas com dados fictícios.

2. **Abrir o Projeto Java**  
   - Abra a pasta `interface_java/` em sua IDE.
   - Configure a conexão JDBC com o banco de dados MySQL.
     - Verifique se as configurações de host, porta, usuário e senha estão corretas no seu código (geralmente dentro de uma classe como `Conexao.java`).

3. **Executar o CRUD**  
   - Compile e execute as classes Java disponíveis.
   - Utilize o menu textual (ou interface, se implementada) para acessar as funcionalidades de Inserir, Listar, Atualizar e Remover dados.

---

---

## Como Rodar o CRUD em Java

Para rodar o sistema completo com a interface Java utilizando JDBC puro, siga os passos abaixo:

### 1. Abrir o projeto no Eclipse

- Abra o **Eclipse IDE**.
- Vá em: `File > Open Projects from File System`.
- Selecione a pasta `interface_java/` e clique em **Finish**.
- Verifique se a estrutura do projeto está organizada corretamente, com os pacotes de:
  - `DAO/` – Acesso aos dados.
  - `model/` ou `entidades/` – Classes de entidade.
  - `interface/` ou `view/` – Telas gráficas, como `TelaPrincipal.java`, `CadastroReserva.java`, etc.
  - `utils/` – Classes utilitárias como conexão com o banco.

### 2. Adicionar o MySQL Connector (JDBC Driver)

Se ainda não possui, baixe o **MySQL Connector/J** através do link oficial:  
🔗 [https://dev.mysql.com/downloads/connector/j/](https://dev.mysql.com/downloads/connector/j/)

No Eclipse, adicione o JAR do conector ao projeto:

- Clique com o botão direito no projeto > `Build Path` > `Configure Build Path`.
- Vá até a aba `Libraries` > clique em `Add External JARs`.
- Selecione o arquivo `.jar` do **MySQL Connector** que você baixou.

Exemplo de caminho no Windows:C:\Users\seu_usuario\Downloads\mysql-connector-j-9.3.0.jar


- Clique em **Apply and Close** para confirmar.

### 3. Verificar a classe de conexão com o banco

Dentro do projeto, localize a classe `Conexao.java` (ou semelhante). Ela deve conter algo como:

   java
String url = "jdbc:mysql://localhost:3306/nome_do_banco";
String user = "root";
String password = "sua_senha";

### Substitua os campos:

- `nome_do_banco` → pelo nome real do seu banco de dados MySQL.
- `root` → pelo usuário do seu MySQL (geralmente `"root"`).
- `sua_senha` → pela senha real do seu MySQL.

---

### 4. Rodar a interface principal

- Encontre a classe principal do sistema, como `Main.java`, `TelaPrincipal.java`, `App.java`, etc.
- Clique com o botão direito sobre ela > **Run As** > **Java Application**.

A interface será exibida, permitindo:

- ✅ Cadastrar hóspedes, funcionários, quartos e reservas.
- ✅ Gerenciar pagamentos, avaliações, serviços e manutenções.
- ✅ Consultar e editar dados do sistema.

---

### ⚠️ Dicas Úteis

- Certifique-se de que o **MySQL Server está ativo** antes de rodar a aplicação.
- Verifique se as **tabelas estão criadas** e se há dados inseridos usando os scripts:
  - `sql/script_criacao.sql`
  - `sql/script_insercao.sql`
- Utilize ferramentas como **DBeaver** ou **MySQL Workbench** para facilitar o monitoramento e depuração do banco de dados.

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
