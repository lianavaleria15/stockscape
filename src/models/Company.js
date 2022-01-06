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
  ticker: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [2, 4],
    },
  },
  investment_profile_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "investmentProfile",
      key: "id",
    },
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
