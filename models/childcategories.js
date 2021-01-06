'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Childcategory extends Model {

    static associate(models) {
      // Childcategory.belongsToMany(models.Subcategories,{ through: 'subcategory_id' })
    }
  };
  Childcategory.init({
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
    modelName: 'Childcategory',
    tableName: 'childcategories',
    underscored: true,
    timestamps:false,
  });
  return Childcategory;
};