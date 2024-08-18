// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const Sequelize = require('sequelize');

// Configuração do Sequelize usando variáveis de ambiente
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Testar a conexão com o banco de dados
sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
})
.catch((erro) => {
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso! Erro gerado: " + erro);
});

module.exports = sequelize;
