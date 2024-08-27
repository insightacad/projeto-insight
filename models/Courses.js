const Sequelize = require('sequelize');
const db = require('../../config/cfgdb');

const Courses = db.define('courses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a tabela (Manter comentado.)
//User.sync();
module.exports = Course;