const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class InvestmentProfile extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING, allowNull: false },

  // WHAT WILL THIS LOOK LIKE?
  time_period: { type: DataTypes.INTEGER, allowNull: false },

  initial_investment: { type: DataTypes.DECIMAL(10, 2), allowNull: false },

  //  currency codes reference: https://www.iban.com/currency-codes
  currency_code: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [3],
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "investmentProfile",
};

InvestmentProfile.init(schema, options);

module.exports = InvestmentProfile;
