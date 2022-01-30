'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customers.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    address: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};