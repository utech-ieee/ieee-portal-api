let Sequelize = require('sequelize');
let db = require('../config/database');

const User = db.define('user', {
    memberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        autoIncrement: true
    },
    fname: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    lname: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    studentId: {
        type: Sequelize.STRING(7),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
}, {
    db,
    tableName: 'user',
    timestamps: true
})

module.exports = User;