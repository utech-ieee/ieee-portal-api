'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
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
            studentId: {
                type: Sequelize.STRING(7),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(30),
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
        return queryInterface.dropTable('users');
    }
};