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
        allowNull: true,
    },
   description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: false, // Desativa o uso de createdAt e updatedAt
});
//Criar a tabela (Manter comentado.)
// User.sync();
module.exports = User;
