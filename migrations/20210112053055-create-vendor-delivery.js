'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vendor_deliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      min_order: {
        type: Sequelize.DECIMAL
      },
      inside_deli_charge: {
        type: Sequelize.DECIMAL
      },
      outside_deli_charge: {
        type: Sequelize.DECIMAL
      },
      inside_deli_time: {
        type: Sequelize.STRING
      },
      outside_deli_time: {
        type: Sequelize.STRING
      },
      vendor_id: {
        type: Sequelize.BIGINT
      },
      status: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vendor_deliveries');
  }
};