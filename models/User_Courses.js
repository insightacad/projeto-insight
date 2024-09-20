const Sequelize = require('sequelize');
const db = require('../config/cfgdb'); // Certifique-se de que o caminho está correto
const User = require('./User'); // Certifique-se de que o caminho está correto
const Course = require('./Courses'); // Certifique-se de que o caminho está correto

const UserCourses = db.define('user_courses', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: User, // Associa com a tabela 'users'
            key: 'id'
        }
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Course, // Associa com a tabela 'courses'
            key: 'id'
        }
    }
}, {
    tableName: 'user_courses',
    timestamps: false
});

// Definindo as associações diretamente aqui
UserCourses.belongsTo(User, { foreignKey: 'user_id', as: 'User' });
UserCourses.belongsTo(Course, { foreignKey: 'course_id', as: 'Course' });

module.exports = UserCourses;

