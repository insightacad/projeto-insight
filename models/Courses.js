const Sequelize = require('sequelize');
const db = require('../config/cfgdb');

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
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'courses',
    timestamps: false, // Desativa o uso de createdAt e updatedAt
});

module.exports = Courses;
