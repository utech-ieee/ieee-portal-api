let Sequelize = require('sequelize');
let db = require('../config/database');

const junc_user_skill = db.define('junc_user_skill', {
    skillId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'skill',
            key: 'skillId'
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
}, {
    db,
    tableName: 'junc_user_skill',
    timestamps: true
})

module.exports = junc_user_skill;