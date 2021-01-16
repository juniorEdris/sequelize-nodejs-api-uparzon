'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rating.belongsTo(models.Product,{
        through:'id',
      })
      Rating.belongsTo(models.User,{
        through:'id'
      })
    }
  };
  Rating.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    product_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    review: {
      type:DataTypes.TEXT,
    },
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    review_date:{
      type: DataTypes.DATE,
      allowNull:false,
    },
    image:{
      type: DataTypes.STRING,
    },
    status:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
  }, {
    sequelize,
    modelName: 'Rating',
    tableName:'ratings',
    timestamps:false,
    underscored:true,
  });
  return Rating;
};