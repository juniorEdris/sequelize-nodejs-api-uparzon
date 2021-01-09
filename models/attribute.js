'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attribute.init({
    attributable_id: DataTypes.INTEGER,
    attributable_type: DataTypes.STRING,
    name: DataTypes.STRING,
    input_name: DataTypes.STRING,
    price_status: DataTypes.INTEGER,
    details_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attribute',
  });
  return Attribute;
};