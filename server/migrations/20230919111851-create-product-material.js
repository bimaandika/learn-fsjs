'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductMaterials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Products',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      materialId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Materials',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      quantity: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductMaterials');
  }
};