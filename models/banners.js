'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    static associate(models) {
      // define association here
    }
  };
  Banner.init({
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
      modelName: 'Banner',
      tableName: 'banners',
      underscored: true,
    timestamps:false,
  });
  return Banner;
};