'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      sku: {
        type: Sequelize.STRING
      },
      product_type: {
        type: Sequelize.STRING
      },
      affliate_link: {
        type: Sequelize.TEXT
      },
      vendor_id: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.STRING
      },
      childcategory_id: {
        type: Sequelize.STRING
      },
      subcategory_id: {
        type: Sequelize.STRING
      },
      attributes: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.TEXT
      },
      slug: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      size_price: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.STRING
      },
      previous_price: {
        type: Sequelize.STRING
      },
      vendor_price: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.TEXT
      },
      stock: {
        type: Sequelize.STRING
      },
      policy: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.TEXT
      },
      views: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.TEXT
      },
      colors: {
        type: Sequelize.TEXT
      },
      product_condition: {
        type: Sequelize.STRING
      },
      ship: {
        type: Sequelize.STRING
      },
      is_meta: {
        type: Sequelize.STRING
      },
      meta_tag: {
        type: Sequelize.TEXT
      },
      meta_description: {
        type: Sequelize.TEXT
      },
      youtube: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      licence: {
        type: Sequelize.TEXT
      },
      licence_qty: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('products');
  }
};