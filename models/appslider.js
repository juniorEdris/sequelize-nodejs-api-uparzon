'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AppSlider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AppSlider.init({
    title_text: DataTypes.TEXT,
    photo: DataTypes.STRING,
    link: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AppSlider',
  });
  return AppSlider;
};