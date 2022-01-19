const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Portfolio extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    allowNull: true,
  },
  // this needs to decrease every time a stock is added to the portfolio
  remaining_budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 1000000,
  },
};

//
const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "portfolio",
};

Portfolio.init(schema, options);

module.exports = Portfolio;
