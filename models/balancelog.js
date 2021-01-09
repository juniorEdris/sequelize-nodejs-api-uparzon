'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BalanceLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BalanceLog.init({
    vendor_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    dr: DataTypes.DOUBLE,
    cr: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'BalanceLog',
  });
  return BalanceLog;
};