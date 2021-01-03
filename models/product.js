'use strict';
const {
  Model, TINYINT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    sku: {
      type: DataTypes.STRING,
    },
    product_type: {
      type: DataTypes.ENUM,
      values: ['normal', 'affliate'],
    },
    affliate_link: {
      type: DataTypes.TEXT,
    },
    vendor_id: {
      type: DataTypes.INTEGER(191),
    },
    category_id: {
      type: DataTypes.INTEGER(191),
    },
    subcategory_id: {
      type: DataTypes.INTEGER(191),
    },
    childcategory_id: {
      type: DataTypes.INTEGER(191),
    },
    attributes: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    slug: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    file: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    size_price: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    previous_price: {
      type: DataTypes.DOUBLE,
    },
    vendor_price: {
      type: DataTypes.DOUBLE,
    },
    details: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    policy: {
      type:DataTypes.TEXT
    },
    status: {
      type: DataTypes.INTEGER(2),
    },
    views: {
      type: DataTypes.TEXT,
    },
    tags: {
      type: DataTypes.STRING,
    },
    features: {
      type: DataTypes.TEXT,
    },
    colors: {
      type: DataTypes.TEXT,
    },
    product_condition: {
      type: DataTypes.INTEGER(1),
    },
    ship: {
      type: DataTypes.STRING,
    },
    is_meta: {
      type: DataTypes.INTEGER(1),
    },
    meta_tag: {
      type: DataTypes.TEXT,
    },
    meta_description: {
      type: DataTypes.TEXT,
    },
    youtube: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['Physical', 'Digital','Licence'],
    },
    licence: {
      type: DataTypes.TEXT,
    },
    licence_qty: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};