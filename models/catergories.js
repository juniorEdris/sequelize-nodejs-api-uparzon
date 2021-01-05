'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catergories extends Model {

    static associate(models) {
      // define association here
    }
  };
  Catergories.init({
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
    modelName: 'Catergories',
    tableName:'categories',
    timestamps:false,
  });
  return Catergories;
};