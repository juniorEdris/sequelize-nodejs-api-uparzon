'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    
    static associate(models) {
      Vendor.belongsTo(models.Product,{
        // foreignKey:'user_id',
      });
      Vendor.hasOne(models.Vendor_delivery,{
        foreignKey: 'vendor_id'
      })
    }
  };
  Vendor.init({
    firebase_client_id: {
      type:DataTypes.TEXT,
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:false
  },
    email: {
      type:DataTypes.STRING,
    },
    photo: {
      type:DataTypes.STRING,
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    remember_token: {
      type:DataTypes.TEXT,
    },
    zip: {
      type:DataTypes.INTEGER,

    },
    city: {
      type:DataTypes.STRING,
    },
    address: {
      type:DataTypes.TEXT,

    },
    lat: {
      type:DataTypes.STRING,
    },
    lon: {
      type:DataTypes.STRING
    },
    category_id: {
      type:DataTypes.INTEGER,
    },
    subcategory_id: {
      type:DataTypes.INTEGER,
    },
    shop_name: {
      type:DataTypes.STRING,
    },
    owner_name: {
      type:DataTypes.STRING,
    },
    shop_number: {
      type:DataTypes.INTEGER,
    },
    shop_address: {
      type:DataTypes.STRING,
    },
    latitude: {
      type:DataTypes.STRING,
    },
    longitude: {
      type:DataTypes.STRING,
    },
    shop_contact: {
      type:DataTypes.STRING,
    },
    shop_logo: {
      type:DataTypes.STRING,
    },
    shop_image: {
      type:DataTypes.STRING,
    },
    shop_details: {
      type:DataTypes.STRING,
    },
    ref_by: {
      type:DataTypes.STRING,
    },
    district_id: {
      type:DataTypes.INTEGER,
    },
    upazilla_id: {
      type:DataTypes.INTEGER,
    },
    union_id: {
      type:DataTypes.INTEGER,
    },
    f_url: {
      type:DataTypes.STRING,
    },
    t_url: {
      type:DataTypes.STRING,
    },
    l_url: {
      type:DataTypes.STRING,
    },
    bkash: {
      type:DataTypes.TEXT,
    },
    rocket: {
      type:DataTypes.TEXT,
    },
    nagad: {
      type:DataTypes.TEXT,
    },    
    ucash: {
      type:DataTypes.TEXT,
    },
    mcash: {
      type:DataTypes.TEXT,
    },
    bank_id: {
      type:DataTypes.INTEGER,
    },
    status: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:0,
    },
    serial: {
      type:DataTypes.INTEGER,
    },
    balance: {
      type:DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Vendor',
    tableName:'vendors',
    underscored:true,
  });
  return Vendor;
};