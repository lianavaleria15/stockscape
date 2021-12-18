const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: { type: DataTypes.STRING, allowNull: "false" },

    investment_profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "investment-profile",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = { Company };
