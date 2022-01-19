const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

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
  units: { type: DataTypes.INTEGER, allowNull: false },
  //this needs to be populated via the companies model (frontend)
  unit_cost: { type: DataTypes.INTEGER, allowNull: false },
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
