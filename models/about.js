let Sequelize = require('sequelize');
let db = require('../config/database');
'use strict';
let About = db.define('about', {
  about: {
    type: Sequelize.STRING(100)
  },
  active:{
    type: Sequelize.BOOLEAN
  },
  paid: {
    type: Sequelize.BOOLEAN
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
  tableName: 'about', 
  modelName: 'about',
  timestamp: true 
});

module.exports = About;