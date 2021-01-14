'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {

    static associate(models) {
      Categories.hasMany(models.Subcategories)
    }
  };
  Categories.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
    photo: {
      type: DataTypes.STRING,
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:0,
    },
    image: {
      type: DataTypes.STRING,
    },
    vendor_percentage: {
      type: DataTypes.DOUBLE,
    }
  }, {
    sequelize,
    modelName: 'Categories',
    tableName:'categories',
    timestamps:false,
    underscored: true,
  });
  return Categories;
};