'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    user_id: {
      type:DataTypes.INTEGER,
    },
    cart: {
      type:DataTypes.TEXT,
      allowNull:false,
      defaultValue:'None',
    },
    method: {
      type:DataTypes.STRING,
    },
    shipping: {
      type:DataTypes.STRING,
    },
    pickup_location: {
      type:DataTypes.STRING
    },
    totalQty: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:'None',
      field:'totalQty',
  },
    pay_amount: {
      type:DataTypes.FLOAT,
      allowNull:false,
      defaultValue:'None',
    },
    txnid: {
      type:DataTypes.STRING,
    },
    charge_id: {
      type:DataTypes.STRING,
    },
    order_number: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:'None',
    },
    payment_status: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:'None',
    },
    customer_email: {
      type:DataTypes.STRING,
    },
    customer_name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    customer_country: {
      type:DataTypes.STRING,
    },
    customer_phone: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    customer_address: {
      type:DataTypes.STRING,
    },
    customer_city: {
      type:DataTypes.STRING
    },
    customer_zip: {
      type:DataTypes.STRING
    },
    shipping_country: {
      type:DataTypes.STRING
    },
    shipping_email: {
      type:DataTypes.STRING
    },
    shipping_phone: {
      type:DataTypes.STRING
    },
    shipping_address: {
      type:DataTypes.STRING
    },
    shipping_city: {
      type:DataTypes.STRING
    },
    shipping_zip: {
      type:DataTypes.STRING
    },
    order_note: {
      type:DataTypes.TEXT
    },
    coupon_code: {
      type:DataTypes.STRING
    },
    coupon_discount: {
      type:DataTypes.STRING
    },
    status: {
      type:DataTypes.ENUM,
      values: ['pending', 'processing', 'completed','on delivery','delivered','declined','cancelled'],
    },
    completed_at: {
      type:DataTypes.DATE
    },
    affilate_user: {
      type:DataTypes.STRING
    },
    affilate_charge: {
      type:DataTypes.STRING
    },
    currency_sign: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    currency_value: {
      type:DataTypes.DOUBLE,
      allowNull:false,
    },
    shipping_cost: {
      type:DataTypes.DOUBLE,
      allowNull:false,
    },
    packing_cost: {
      type:DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    tax: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    dp: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:0,
    },
    pay_id: {
      type:DataTypes.TEXT
    },
    vendor_shipping_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    vendor_packing_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    uparzon_amount: {
      type:DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    ub_charge: {
      type:DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    rc_status: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:0,
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscored:true,
  });
  return Order;
};