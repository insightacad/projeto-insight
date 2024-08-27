const Sequelize = require('sequelize');
const db = require('../config/cfgdb');

const User = db.define('user_courses', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    course_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false, // Desativa o uso de createdAt e updatedAt
});
//Criar a tabela (Manter comentado.)
// User.sync();
module.exports = User;