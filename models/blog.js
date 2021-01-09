'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Blog.init({
    category_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    photo: DataTypes.STRING,
    source: DataTypes.STRING,
    views: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    meta_tag: DataTypes.TEXT,
    meta_description: DataTypes.TEXT,
    tags: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};