let Sequelize = require('sequelize');
let db = require('../config/database');

const Achievements = db.define('achievements', {
    achievementsId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    db,
    tableName: 'achievements',
    timestamps: true
})

module.exports = Achievements;