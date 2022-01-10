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

  // company_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   autoIncrement: true,
  // },

  units: { type: DataTypes.INTEGER, allowNull: false },

  // user_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
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
