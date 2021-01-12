'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{...this.get(),id:undefined}
    }
  };
  User.init({
    partner_id:{
      type: DataTypes.INTEGER(10),
    },
    firebase_client_id:{
      type: DataTypes.STRING,
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue:'None',
    },
    photo:{
      type: DataTypes.STRING ,
    },
    gender:{
      type: DataTypes.STRING ,
    },
    birth_date:{
      type: DataTypes.DATE,
    },
    zip:{
      type: DataTypes.STRING ,
    },
    city:{
      type: DataTypes.STRING ,
    },
    country:{
      type: DataTypes.STRING ,
    },
    address:{
      type: DataTypes.STRING ,
    },
    phone:{
      type: DataTypes.STRING ,
    },
    phone_verified:{
      type: DataTypes.INTEGER(4),
      allowNull:false,
      defaultValue:0,
    },
    temp_otp:{
      type: DataTypes.STRING(8) ,
    },
    otp_validity:{
      type: DataTypes.STRING(20) ,
    },
    fax:{
      type: DataTypes.STRING ,
    },
    email:{
      type: DataTypes.STRING ,
      validate:{
        isEmail:true,
      }
    },
    password:{
      type: DataTypes.STRING ,
    },
    remember_token:{
      type: DataTypes.STRING ,
    },
    is_provider:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    status:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    verification_link:{
      type: DataTypes.TEXT,
    },
    email_verified:{
      type: DataTypes.ENUM,
      values:['Yes','No'],
      defaultValue:'No',
    },
    affilate_code:{
      type: DataTypes.TEXT,
    },
    affilate_income:{
      type: DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    shop_name:{
      type: DataTypes.TEXT,
    },
    owner_name:{
      type: DataTypes.TEXT,
    },
    shop_number:{
      type: DataTypes.TEXT,
    },
    shop_address:{
      type: DataTypes.TEXT,
    },
    reg_number:{
      type: DataTypes.TEXT,
    },
    shop_message:{
      type: DataTypes.TEXT,
    },
    shop_details:{
      type: DataTypes.TEXT,
    },
    shop_logo:{
      type: DataTypes.STRING,
    },
    f_url:{
      type: DataTypes.TEXT,
    },
    g_url:{
      type: DataTypes.TEXT,
    },
    t_url:{
      type: DataTypes.TEXT,
    },
    l_url:{
      type: DataTypes.TEXT,
    },
    is_vendor:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    promotional_code:{
      type: DataTypes.STRING,
    },
    invitation_code:{
      type: DataTypes.STRING,
    },
    f_check:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    g_check:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    t_check:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    l_check:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    mail_sent:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    shipping_cost:{
      type: DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    current_balance:{
      type: DataTypes.DOUBLE,
      allowNull:false,
      defaultValue:0,
    },
    date:{
      type: DataTypes.DATE,
    },
    ban:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
  }, {
    sequelize,
    tableName:'users', //optional to set database table name
      modelName: 'User',
    underscored:true,
    timestamps:false,
  });
  return User;
};