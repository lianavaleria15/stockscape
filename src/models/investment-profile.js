const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class InvestmentProfile extends Model {}

InvestmentProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: { type: DataTypes.STRING, allowNull: false },

    time_period: { type: DataTypes.INTEGER, allowNull: false },

    investment_value: { type: DataTypes.DECIMAL(10, 2), allowNull: false },

    currency_code: { type: DataTypes.STRING, allowNull: false },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = InvestmentProfile;
