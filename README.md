
<h1 align="center">
     ♻️ <a href="#" alt="site do ecoleta"> Ecoleta </a>
</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tgmarinho/README-ecoleta">
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tgmarinho/README-ecoleta">
  </a>
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Configurando Variáveis de Ambiente](#configurando-variaveis-de-ambiente)
     * [Rodando o Servidor](#rodando-o-servidor)
     * [Rodando o Testes](#rodando-os-testes)
   * [Tecnologias](#-tecnologias)
     * [Server](#-server)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#-licença)
<!--te-->

## 💻 Sobre o projeto

Blog API - É uma aplicação backend, com a finalidade de criação e logins para usuários e CRUD para posts de blogs, com a possibilidade de classificações em categorias.

---

## ⚙️ Funcionalidades

- [x] Usuários:
  - [x] Cadastro de novos usuários pela rota "/user" (Método POST);
  - [x] Listagem de usuários pela rota "/user" (Método GET);
  - [x] Listagem de usuário por seu ID pela rota "/user/:id" (Método GET);
  - [x] Deletar usuário pela rota "/user/me" (Método DELETE);
- [x] Login de usuários pela rota "/login" (Método POST);
- [x] Categorias:
  - [x] Cadastro de novas categorias pela rota "/categories" (Método POST);
  - [x] Listagem de categorias pela rota "/categories" (Método GET);
- [x] Posts:
  - [x] Cadastro de novos post pela rota "/post" (Método POST);
  - [x] Listagem de posts pela rota "/post" (Método GET);
  - [x] Listagem de post por seu ID pela rota "/post/:id" (Método GET);
  - [x] Editar post pela rota "/user/:postId" (Método PUT);
  - [x] Deletar post pela rota "/user/:postId" (Método DELETE);
  - [x] Buscar post por texto pela rota "/search" (Método GET);

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL Server](https://dev.mysql.com/downloads/mysql/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Configurando Variáveis de Ambiente

Primeiramente, você deve configurar suas variáves de ambiente, no arquivo [.env](https://github.com//IsaacCruzLM/Blog_API/edit/main/.env), com o seu usuário de acesso ao servidor MySQL de sua máquina, sua senhan de acesso e uma string de sua preferência que servirá de senha secreta para o JWT.

### 🎲 Rodando o Servidor

```bash

# Clone este repositório
$ git clone git@github.com:IsaacCruzLM/Blog_API.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Blog_API

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

### 🎲 Rodando os Testes

```bash

# Rodar testes localmente
$ npm test

# Rodar cobertura dos testes
$ npm run test-coverage

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Sequelize](https://sequelize.org/v3/)**
-   **[Mysql2](https://www.npmjs.com/package/mysql2)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Jsonwebtoken](https://jwt.io/)**
-   **[Jest](https://jestjs.io/)**

---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/isaaccruzz/">
 <img style="border-radius: 50%;" src="./public/profile.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Isaac Cruz</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Isaac-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/isaaccruzz/)](https://www.linkedin.com/in/isaaccruzz/) 
[![Gmail Badge](https://img.shields.io/badge/-isaac.clm1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:isaac.clm1@gmail.com)](mailto:isaac.clm1@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Isaac Cruz👋🏽 [Entre em contato!](https://www.linkedin.com/in/isaaccruzz/)

---
