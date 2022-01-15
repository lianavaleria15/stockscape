const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class InvestorType extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: { type: DataTypes.STRING, allowNull: false },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "investortype",
};

InvestorType.init(schema, options);

module.exports = InvestorType;
