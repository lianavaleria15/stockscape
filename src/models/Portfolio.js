const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Portfolio extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  company_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "company",
      key: "id",
    },
    allowNull: true,
  },

  units: { type: DataTypes.INTEGER, allowNull: false },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    allowNull: false,
  },

  // hook required
  stock_returns: { type: DataTypes.DECIMAL(20, 2), allowNull: true },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "portfolio",
};

Portfolio.init(schema, options);

module.exports = Portfolio;
