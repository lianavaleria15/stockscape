const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Company extends Model {}

// WHAT OTHER FIELDS DO WE WANT/NEED?
const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [2, 4],
    },
  },
  janPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  decPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  gainLoss: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company_summary: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "company",
};

Company.init(schema, options);

module.exports = Company;
