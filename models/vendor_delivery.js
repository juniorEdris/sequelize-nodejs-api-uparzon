'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor_delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vendor_delivery.init({
    name: {
      type:DataTypes.STRING,
    },
    min_order: {
      type:DataTypes.DECIMAL
    },
    inside_deli_charge: {
      type:DataTypes.DECIMAL
    },
    outside_deli_charge: {
      type:DataTypes.DECIMAL
    },
    inside_deli_time: {
      type:DataTypes.STRING,
    },
    outside_deli_time: {
      type:DataTypes.STRING,
    },
    vendor_id: {
      type:DataTypes.BIGINT.UNSIGNED,
    },
    status: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    }
  }, {
    sequelize,
    modelName: 'Vendor_delivery',
    tableName:'vendor_deliveries',
    underscored:true,
  });
  return Vendor_delivery;
};