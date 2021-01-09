'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategories extends Model {

    static associate(models) {
      Subcategories.belongsTo(models.Categories)
      Subcategories.hasOne(models.Childcategory)
    }
  };
  Subcategories.init({
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    photo: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Subcategories',
    tableName: 'subcategories',
    underscored: true,
    timestamps:false,
  });
  return Subcategories;
};