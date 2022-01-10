const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class CompanyPortfolio extends Model {}

CompanyPortfolio.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "company",
        key: "id",
      },
    },
    investment_profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "investmentProfile",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "product_tag",
  }
);

module.exports = CompanyPortfolio;
