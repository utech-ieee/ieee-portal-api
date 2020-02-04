'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('skill', {
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
        return queryInterface.dropTable('skill');
    }
};