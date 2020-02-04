let Sequelize = require('sequelize');
let db = require('../config/database');

const Skill = db.define('skill', {
    skillId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    field: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    db,
    tableName: 'skill',
    timestamps: true
})

module.exports = Skill;