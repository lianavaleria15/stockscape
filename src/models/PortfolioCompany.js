const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class PortfolioCompany extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  portfolio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "portfolio",
      key: "id",
    },
    allowNull: true,
  },
  company_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "company",
      key: "id",
    },
    allowNull: true,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "portfolioCompany",
};

PortfolioCompany.init(schema, options);

module.exports = PortfolioCompany;
