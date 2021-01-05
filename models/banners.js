'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banners extends Model {
    static associate(models) {
      // define association here
    }
  };
  Banners.init({
    photo: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['Large', 'TopSmall','BottomSmall'],
      allowNull:false,
    }
  }, {
    sequelize,
      modelName: 'Banners',
      tableName: 'banners',
    timestamps:false,
  });
  return Banners;
};