'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Childcategories extends Model {

    static associate(models) {
      // define association here
    }
  };
  Childcategories.init({
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:1,
    }
  }, {
    sequelize,
    modelName: 'Childcategories',
    tableName: 'childcategories',
    timestamps:false,
  });
  return Childcategories;
};