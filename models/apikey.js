'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ApiKey.init({
    consumer_key: DataTypes.STRING,
    consumer_secret: DataTypes.STRING,
    nonce: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
  });
  return ApiKey;
};