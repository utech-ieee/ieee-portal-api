'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('social', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            platform: {
                type: Sequelize.STRING
            },
            handle: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            memberId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {
                    model: 'user',
                    key: 'memberId'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('social');
    }
};