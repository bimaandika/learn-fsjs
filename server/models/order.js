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
      Order.belongsTo(models.Client, { foreignKey: 'clientId' })
      Order.belongsTo(models.Admin, { foreignKey: 'adminId' })
      Order.hasMany(models.Chart, { foreignKey: 'orderId' })
    }
  }
  Order.init({
    clientId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
    totalPayment: DataTypes.INTEGER,
    paymentStatus: DataTypes.STRING,
    orderStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};