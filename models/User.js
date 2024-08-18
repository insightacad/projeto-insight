const Sequelize = require('sequelize');
const db = require('../config/cfgdb');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    creation_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
});

//Criar a tabela (Manter comentado.)
// User.sync();
module.exports = User;