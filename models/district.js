'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  District.init({
    division_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bn_name: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    url: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};