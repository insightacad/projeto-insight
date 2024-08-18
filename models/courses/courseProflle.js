const Sequelize = require('sequelize');
const db = require('../../config/cfgdb');

const Course = db.define('course', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    course_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    course_description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a tabela (Manter comentado.)
//User.sync();
module.exports = Course;