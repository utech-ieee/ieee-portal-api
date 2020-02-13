let Sequelize = require('sequelize');
let db = require('../config/database');

const junc_user_achievements = db.define('junc_user_achievements', {
    achievementsId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'achievements',
            key: 'achievementsId'
        }
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'user',
            key: 'memberId'
        }
    }
},{
    db,
    tableName: 'junc_user_achievements',
    timestamps: true
})

module.exports = junc_user_achievements;