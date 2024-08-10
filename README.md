# Documentação do Protocolo-BicicletaComRodinha

**Pré-requisitos**
Antes de iniciar, certifique-se de que você tem o Node.js instalado em sua máquina. Essas ferramentas são essenciais para gerenciar as dependências do projeto e para executar o servidor de desenvolvimento.

**Configuração Inicial**

**1. Instalação das Dependências**
Para instalar todas as dependências necessárias para o projeto, abra um terminal na raiz do projeto e execute o seguinte comando:
```npm install```

**Siga as instruções no terminal para rodar corretamente o projeto.**

**3.Instalação do Express**
O Express é um framework para Node.js que facilita a criação de aplicações web e API. Para instalá-lo, execute:
```npm install express```

**O projeto estará rodando na porta 3000 do localhost, acessível através do endereço: http://localhost:3000**

**5.Desenvolvimento com Nodemon**
Para facilitar o desenvolvimento, instale o Nodemon globalmente e como dependência de desenvolvimento para reiniciar o servidor automaticamente a cada alteração no código:

```npm install -g nodemon```
```npm install --save-dev nodemon```

**Para rodar o projeto com Nodemon, utilize:**
```npx nodemon app```

**Banco de Dados e Autenticação**

**1.Sequelize**

**O Sequelize é um ORM para Node.js que suporta diversos bancos de dados. Para instalá-lo, juntamente com o driver do MySQL, execute:**
```npm install --save sequelize mysql2```

**2.Criação do Banco de Dados**
Execute o seguinte comando SQL para criar o banco de dados necessário para o projeto:
```CREATE DATABASE bicicletacomrodinha CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;```

**3.Criptografia de Senha**
Para a criptografia de senhas, utilizamos o módulo bcryptjs. Para instalá-lo, execute:
```npm install --save bcryptjs```

**4.JSON Web Token (JWT)**
Para a implementação de autenticação via JWT, instale a dependência necessária:

```npm install --save jsonwebtoken```

**Conclusão**
Após seguir estas instruções, seu ambiente de desenvolvimento estará configurado e pronto para ser utilizado. O projeto Protocolo-BicicletaComRodinha está agora configurado para desenvolvimento local, permitindo que você trabalhe na implementação de novas funcionalidades e na melhoria da aplicação.
