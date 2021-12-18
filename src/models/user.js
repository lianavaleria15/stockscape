const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    first_name: { type: DataTypes.STRING, allowNull: "false" },
    last_name: { type: DataTypes.STRING, allowNull: "false" },
    //come back to this and add validation
    password: { type: DataTypes.TEXT },
    username: { type: DataTypes.TEXT, allowNull: false, unique: true },
    email: { type: DataTypes.TEXT, validate: { isEmail: true } },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = { User };
