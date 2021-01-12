'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Counter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Counter.init({
    type: {
      type:DataTypes.ENUM,
      values: ['referral', 'browser'],
      defaultValue:'referral',
      allowNull:false,
    },
    referral: {
      type:DataTypes.STRING,
    },
    total_count: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    todays_count: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    today: {
      type:DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Counter',
    tableName:'counters',
    timestamps:false,
  });
  return Counter;
};