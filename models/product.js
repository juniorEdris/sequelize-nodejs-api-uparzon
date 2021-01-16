'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.belongsTo(models.Vendor,{
        foreignKey:'user_id',
      })
      Product.hasMany(models.Rating)
    }
  };
  Product.init({
    sku: {
      type: DataTypes.STRING,
    },
    product_type: {
      type: DataTypes.ENUM,
      values: ['normal', 'affliate'],
      allowNull:false,
      defaultValue:'normal',
    },
    affiliate_link: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER(191),
      allowNull:false,
      defaultValue:'0',
    },
    category_id: {
      type: DataTypes.INTEGER(191).UNSIGNED,
    },
    subcategory_id: {
      type: DataTypes.INTEGER(191).UNSIGNED,
    },
    childcategory_id: {
      type: DataTypes.INTEGER(191).UNSIGNED,
    },
    attributes: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull:false,
      defaultValue:'None',
    },
    slug: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    file: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    size_price: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    previous_price: {
      type: DataTypes.DOUBLE,
    },
    vendor_price: {
      type: DataTypes.DOUBLE,
    },
    details: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    policy: {
      type:DataTypes.TEXT
    },
    status: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull:false,
      defaultValue:1,
    },
    views: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull:false,
      defaultValue:0,
    },
    tags: {
      type: DataTypes.STRING,
    },
    features: {
      type: DataTypes.TEXT,
    },
    colors: {
      type: DataTypes.TEXT,
    },
    product_condition: {
      type: DataTypes.INTEGER(1),
      allowNull:false,
      defaultValue:0,
    },
    ship: {
      type: DataTypes.STRING,
    },
    is_meta: {
      type: DataTypes.INTEGER(1),
      allowNull:false,
      defaultValue:0,
    },
    meta_tag: {
      type: DataTypes.TEXT,
    },
    meta_description: {
      type: DataTypes.TEXT,
    },
    youtube: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['Physical', 'Digital','Licence'],
    },
    license: {
      type: DataTypes.TEXT,
    },
    license_qty: {
      type: DataTypes.TEXT,
    },
    link:{
      type: DataTypes.TEXT,
    },
    platform:{
      type: DataTypes.STRING,
    },
    region:{
      type: DataTypes.STRING,
    },
    licence_type:{
      type: DataTypes.STRING,
    },
    measure:{
      type: DataTypes.STRING,
    },
    featured:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    best:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    top:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    hot:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    latest:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    big:{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:0,
      allowNull:false,
    },
    trending:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false,
    },
    sale:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false,
    },
    is_discount:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false,
    },
    discount_date:{
      type: DataTypes.TEXT,
    },
    whole_sell_qty:{
      type: DataTypes.TEXT,
    },
    whole_sell_discount:{
      type: DataTypes.TEXT,
    },
    is_catalog:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false,
    },
    catalog_id:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false,
    },
    is_verified:{
      type: DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'products',
    modelName: 'Product',
    underscored:true,
  });
  return Product;
};