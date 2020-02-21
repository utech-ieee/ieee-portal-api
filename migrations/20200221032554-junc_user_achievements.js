'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('junc_user_achievement', {
      junc_user_achievementsId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'achievement',
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
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('junc_user_achievements');
  }
};
