'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bank.init({
    vendor_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    ac_name: DataTypes.STRING,
    ac_no: DataTypes.STRING,
    branch: DataTypes.STRING,
    routing: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bank',
  });
  return Bank;
};