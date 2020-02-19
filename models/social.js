let Sequelize = require('sequelize');
let db = require('../config/database');

'use strict';
let Social = db.define('social', {
    platform: {
        type: Sequelize.STRING(15)
    },
    handle: {
        type: Sequelize.STRING(20)
    },
    link: {
        type: Sequelize.STRING(80)
    },
    memberId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
            model: 'user',
            key: 'memberId'
        }
    }
}, {
    db,
    tableName: 'social',
    modelName: 'social',
    timestamp: true

});

module.exports = Social;